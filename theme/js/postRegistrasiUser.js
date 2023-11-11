import { postNoToken } from "./api.js";
import {setInner,getValue} from "./element.js";
import {setCookieWithExpireHour} from "./cookie.js";

export default function Login(){
    let target_url = "https://asia-southeast2-befous.cloudfunctions.net/PhilanderNews-RegistrasiUser";
    let datainjson = {
        "name": getValue("name"),
        "email": getValue("email"),
        "username": getValue("username"),
        "password": getValue("password")
    }

    postNoToken(target_url,datainjson,responseData);

}

function responseData(result) {
    setInner("pesan", result.message);
    setCookieWithExpireHour("token", result.token, 2);
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