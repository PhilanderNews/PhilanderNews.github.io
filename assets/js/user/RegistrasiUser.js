import { postBiasa } from "../dll/api.js";
import { getValue } from "../dll/element.js";
import { APIRegistrasi } from "../dll/rahasia.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function RegistrasiUser(){
    let name = getValue("name");
    let no_whatsapp = getValue("no_whatsapp");
    let username = getValue("username");
    let password = getValue("password");
    let kode = getValue("kode");
    if (!username) {
        alert("Username perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!password) {
        alert("Password perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    let datainjson = {
        "name": name,
        "nowa": no_whatsapp,
        "username": username,
        "password": password,
        "role": "user",
        "kode": kode
    }
    loadingIndicator.style.display = "block";
    
    postBiasa(APIRegistrasi,datainjson,responseData);
}

function responseData(result) {
    loadingIndicator.style.display = "none";
    if (result.status == true) {
        alert("Berhasil registrasi");
        window.location.href = "../login";
    } else {
        if (result.message == "username telah dipakai") {
            alert("username telah dipakai");
        }
        if (result.message == "gagal Hash Password") {
            alert("Gagal Hash Password");
        }
    }
}