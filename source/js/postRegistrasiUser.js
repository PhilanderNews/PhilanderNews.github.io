import { postBiasa } from "./api.js";
import { setInner,getValue } from "./element.js";

export default function RegistrasiUser(){
    let target_url = "https://asia-southeast2-befous.cloudfunctions.net/PhilanderNews-RegistrasiUser";
    let datainjson = {
        "name": getValue("name"),
        "email": getValue("email"),
        "username": getValue("username"),
        "password": getValue("password")
    }
    postBiasa(target_url,datainjson,responseData);
}

function responseData(result) {
    if (result.message == "Username telah dipakai") {
        alert("Username telah dipakai");
    }
    if (result.message == "Gagal Hash Password") {
        alert("Gagal Hash Password");
    }
    if (result.message == "Berhasil Input data") {
        window.location.href = "../login";
    }
}