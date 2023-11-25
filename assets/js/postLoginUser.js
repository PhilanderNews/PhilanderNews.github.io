import { postBiasa } from "./api.js";
import { getValue } from "./element.js";
import { setCookieWithExpireSecond } from "./cookie.js";
import { APILogin } from "./rahasia.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function LoginUser(){
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
    loadingIndicator.style.display = "block";

    postBiasa(APILogin,datainjson,responseData);

}

function responseData(result) {
    loadingIndicator.style.display = "none";
    if (result.message == "Password Salah") {
        alert("Password Salah");
    } else {
        if (result.data.role.admin == false) {
            alert("Anda tidak terdaftar sebagai admin");
        }
        if (result.data.role.author == false) {
            alert("Anda tidak terdaftar sebagai author");
        } else {
            setCookieWithExpireSecond("token", result.token, 1);
            window.location.href = "../user/beranda"; 
        }
    }
}