import { postWithToken } from "./api.js";
import { getValue } from "./element.js";
import { setCookieWithExpireHour } from "./cookie.js";

export default function LoginUser(){
    let target_url = "https://asia-southeast2-befous.cloudfunctions.net/PhilanderNews-LoginUser";
    let tokenkey = "token";
    let username = getValue("username");
    let password = getValue("password");
    if (!username) {
        alert("Username perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!password) {
        alert("Password perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,datainjson,responseData);

}

function responseData(result) {
    if (result.token == "Password Salah") {
        alert("Password Salah");
    }
    if (result.data.role == "user") {
        setCookieWithExpireHour("token", result.token, 2);
        setCookieWithExpireHour("name", result.data.name, 2);
        setCookieWithExpireHour("role", result.data.role, 2);
        window.location.href = "../user/beranda";
    }
    if (result.data.role == "admin") {
        setCookieWithExpireHour("token", result.token, 2);
        setCookieWithExpireHour("name", result.data.name, 2);
        setCookieWithExpireHour("role", result.data.role, 2);
        window.location.href = "../admin/beranda";
    }
}