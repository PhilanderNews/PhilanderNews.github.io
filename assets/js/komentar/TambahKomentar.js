import { postHeader } from "../dll/api.js";
import { getCookie } from "../dll/cookie.js";
import { getValue } from "../dll/element.js";
import { APITambahKomentar } from "../dll/rahasia.js"
import { generateRandomString } from "../dll/random.js";

const loadingIndicator = document.getElementById("loadingIndicator");

export default function TambahKomentar(){
    const searchParams = new URLSearchParams(window.location.search);
    const idParam = searchParams.get('id');

    const randomString = generateRandomString(8);
    
    let komentar = getValue("komentar");

    let tokencookie = getCookie("token")
    let tokenkey = "token"
    let tokenvalue = tokencookie;

    let datainjson = {
        "id": randomString,
        "id_berita": idParam,
        "komentar": komentar
    }
    loadingIndicator.style.display = "block";
    
    postHeader(APITambahKomentar,tokenkey,tokenvalue,datainjson,responseData);
}

function responseData(result) {
    loadingIndicator.style.display = "none";
    if (result.status == true) {
        alert("Komentar anda telah masuk");
        window.location.reload();
    } else {
        alert("Anda blom login dengan benar");
    }
}