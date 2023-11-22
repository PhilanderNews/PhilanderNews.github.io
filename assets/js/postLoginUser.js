import { postBiasa } from "./api.js";
import { getValue } from "./element.js";
import { setCookieWithExpireHour } from "./cookie.js";
import { APILogin, userrahasia, adminrahasia } from "./rahasia.js"

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
    }
    if (result.role == "user") {
        setCookieWithExpireHour("tokenuser", result.token, 2);
        sessionStorage.setItem("name", result.name)
        sessionStorage.setItem("role", userrahasia)
        window.location.href = `../${result.role}/beranda`;
    }
    if (result.role == "admin") {
        setCookieWithExpireHour("tokenadmin", result.token, 2);
        sessionStorage.setItem("name", result.name)
        sessionStorage.setItem("role", adminrahasia)
        window.location.href = `../${result.role}/beranda`;
    }
}