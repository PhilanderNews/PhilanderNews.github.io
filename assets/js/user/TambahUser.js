import { postBiasa } from "../dll/api.js";
import { getValue } from "../dll/element.js";
import { APIRegistrasi } from "../dll/rahasia.js"

export default function TambahUser(){
    let name = getValue("name");
    let no_whatsapp = getValue("no_whatsapp");
    let username = getValue("username");
    let password = getValue("password");
    let role = getValue("role");
    // Validasi panjang karakter
    if (name.length > 21) {
        alert("Nama hanya boleh maksimal 21 karakter");
        return;
    }
    if (no_whatsapp.length > 13) {
        alert("Nomor WhatsApp hanya boleh maksimal 13 karakter");
        return;
    }
    if (username.length > 12) {
        alert("Username hanya boleh maksimal 12 karakter");
        return;
    }
    if (password.length > 12) {
        alert("Password hanya boleh maksimal 12 karakter");
        return;
    }
    if (kode.length > 12) {
        alert("Kode verifikasi hanya boleh maksimal 12 karakter");
        return;
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
        "nowa": no_whatsapp,
        "username": username,
        "password": password,
        "role": role
    }
    
    postBiasa(APIRegistrasi,datainjson,responseData);
}

function responseData(result) {
    if (result.status == true) {
        alert(result.message);
    } else {
        alert(result.message);
    }
}