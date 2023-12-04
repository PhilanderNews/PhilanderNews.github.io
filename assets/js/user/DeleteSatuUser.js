import { deleteHeader } from "../dll/api.js";
import { getCookie } from "../dll/cookie.js";
import { getValue } from "../dll/element.js";
import { APIHapusUser } from "../dll/rahasia.js"

export default function HapusUser(){   
    let username = getValue("username");

    let tokencookie = getCookie("token")
    let tokenkey = "token"
    let tokenvalue = tokencookie;

    let datainjson = {
        "username": username
    };
    
    deleteHeader(APIHapusUser,tokenkey,tokenvalue,datainjson,responseData);
}

function responseData(result) {
    if (result.status == true) {
        alert("User anda terhapus");
    } else {
        alert("Anda blom login dengan benar");
    }
}