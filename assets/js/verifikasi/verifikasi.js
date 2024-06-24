import { postBiasa } from "../dll/api.js";
import { getValue } from "../dll/element.js";
import { APIGenerateVerifikasi } from "../dll/rahasia.js"

export default function GenerateKodeVerifikasi(){
    let no_whatsapp = getValue("no_whatsapp");
    let username = getValue("username");
    let datainjson = {
        "nowa": no_whatsapp,
        "username": username
    }
    
    postBiasa(APIGenerateVerifikasi,datainjson,responseData);
}

function responseData(result) {
    if (result.status == true) {
        alert(result.message);
    } else {
        alert(result.message);
    }
}