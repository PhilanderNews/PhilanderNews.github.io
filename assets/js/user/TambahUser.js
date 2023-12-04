import { postBiasa } from "../dll/api.js";
import { getValue } from "../dll/element.js";
import { APIRegistrasi } from "../dll/rahasia.js"

export default function TambahUser(){
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
    
    postBiasa(APIRegistrasi,datainjson,responseData);
}

function responseData(result) {
    if (result.status == true) {
        alert("User anda telah masuk");
    } else {
        alert("Anda blom login dengan benar");
    }
}