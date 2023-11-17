import { postBiasa } from "./api.js";
import { getValue } from "./element.js";

export default function RegistrasiUser(){
    let target_url = "https://asia-southeast2-befous.cloudfunctions.net/PhilanderNews-RegistrasiUsers";
    let name = getValue("name");
    let email = getValue("email");
    let username = getValue("username");
    let password = getValue("password");
    if (email && !(email.endsWith("@gmail.com") || email.endsWith("@std.ulbi.ac.id") || email.endsWith("@ulbi.ac.id"))) {
        alert("Format email tidak benar");
        return; // Stop execution if the email format is not valid
    }
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
        "email": email,
        "username": username,
        "password": password,
        "role": "user"
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