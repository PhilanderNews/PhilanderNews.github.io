import { deleteHeader } from "../dll/api.js";
import { getCookie } from "../dll/cookie.js";
import { getValue } from "../dll/element.js";
import { APIHapusKomentar } from "../dll/rahasia.js"

export default function HapusKomentar(){   
    let id = getValue("id-komentar");

    let tokencookie = getCookie("token")
    let tokenkey = "token"
    let tokenvalue = tokencookie;

    let datainjson = {
        "id": id
    };
    
    deleteHeader(APIHapusKomentar,tokenkey,tokenvalue,datainjson,responseData);
}

function responseData(result) {
    if (result.status == true) {
        alert("Komentar terhapus");
    } else {
        alert("Anda blom login dengan benar");
    }
}