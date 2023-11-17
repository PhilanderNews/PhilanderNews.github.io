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
    setCookieWithExpireHour("token", result.token, 2);
    setCookieWithExpireHour("username", getValue("username"), 2);
    if (result.message == "Password Salah") {
        alert("Password Salah");
    }
    if (result.message == "Selamat Datang") {
        window.location.href = "../beranda";
    }
}