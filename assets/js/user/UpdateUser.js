import { putHeader } from "../dll/api.js";
import { getCookie } from "../dll/cookie.js";
import { getValue } from "../dll/element.js";
import { APIUpdateUser } from "../dll/rahasia.js"

export default function UpdateUser(){
    let tokencookie = getCookie("token")
    let tokenkey = "token"
    let tokenvalue = tokencookie;

    let name = getValue("name");
    let email = getValue("email");
    let no_whatsapp = getValue("no_whatsapp");
    let username = getValue("username");
    let password = getValue("password");
    let role = getValue("role");
    let datainjson = {
        "name": name,
        "email": email,
        "no_whatsapp": no_whatsapp,
        "username": username,
        "password": password,
        "role": role
    }
    
    putHeader(APIUpdateUser,tokenkey,tokenvalue,datainjson,responseData);
}

function responseData(result) {
    if (result.status == true) {
        alert("User anda terupdate");
    } else {
        alert("Anda blom login dengan benar");
    }
}