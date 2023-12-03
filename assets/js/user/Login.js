import { postBiasa } from "../dll/api.js";
import { getValue } from "../dll/element.js";
import { setCookieWithExpireHour } from "../dll/cookie.js";
import { APILogin } from "../dll/rahasia.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function Login(){
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
    if (result.status == true) {
        setCookieWithExpireHour("token", result.token, 2);
        window.location.href = "../"; 
        
    } else {
        if (result.messaage == "Password Salah") {
            alert("Password Salah");
        }
    }
}