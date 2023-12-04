import { putHeader } from "../dll/api.js";
import { getCookie } from "../dll/cookie.js";
import { getValue } from "../dll/element.js";
import { APIUpdateBerita } from "../dll/rahasia.js"

export default function UpdateBerita(){   
    let id = getValue("id-berita");
    let kategori = getValue("kategori");
    let judul = getValue("judul");
    let preview = getValue("preview");
    let paragraf1 = getValue("paragraf1");
    let paragraf2 = getValue("paragraf2");
    let paragraf3 = getValue("paragraf3");
    let paragraf4 = getValue("paragraf4");
    let paragraf5 = getValue("paragraf5");
    let paragraf6 = getValue("paragraf6");
    let paragraf7 = getValue("paragraf7");
    let paragraf8 = getValue("paragraf8");
    let paragraf9 = getValue("paragraf9");
    let paragraf10 = getValue("paragraf10");
    let sumber = getValue("sumber");
    let image = getValue("image");

    let tokencookie = getCookie("token")
    let tokenkey = "token"
    let tokenvalue = tokencookie;

    let datainjson = {
        "id": id, // Contoh id yang unik, Anda dapat menggunakan id yang sesuai dengan kebutuhan aplikasi Anda
        "kategori": kategori,
        "judul": judul,
        "preview": preview,
        "konten": {
            "paragraf1": paragraf1,
            "paragraf2": paragraf2,
            "paragraf3": paragraf3,
            "paragraf4": paragraf4,
            "paragraf5": paragraf5,
            "paragraf6": paragraf6,
            "paragraf7": paragraf7,
            "paragraf8": paragraf8,
            "paragraf9": paragraf9,
            "paragraf10": paragraf10
        },
        "sumber": sumber,
        "image": image
    };
    
    putHeader(APIUpdateBerita,tokenkey,tokenvalue,datainjson,responseData);
}

function responseData(result) {
    if (result.status == true) {
        alert("Berita anda terupdate");
    } else {
        alert("Anda blom login dengan benar");
    }
}