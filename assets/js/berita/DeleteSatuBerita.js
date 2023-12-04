import { deleteHeader } from "../dll/api.js";
import { getCookie } from "../dll/cookie.js";
import { getValue } from "../dll/element.js";
import { APIHapusBerita } from "../dll/rahasia.js"

export default function HapusBerita(){   
    let id = getValue("id-berita");

    let tokencookie = getCookie("token")
    let tokenkey = "token"
    let tokenvalue = tokencookie;

    let datainjson = {
        "id": id
    };
    
    deleteHeader(APIHapusBerita,tokenkey,tokenvalue,datainjson,responseData);
}

function responseData(result) {
    if (result.status == true) {
        alert("Berita anda terhapus");
    } else {
        alert("Anda blom login dengan benar");
    }
}