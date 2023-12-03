import { postBiasa } from "../dll/api.js";
import { getValue } from "../dll/element.js";
import { APIRegistrasi } from "../dll/rahasia.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function RegistrasiUser(){
    let name = getValue("name");
    let email = getValue("email");
    let no_whatsapp = getValue("no_whatsapp");
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
        "no_whatsapp": no_whatsapp,
        "username": username,
        "password": password,
        "role": "user"
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