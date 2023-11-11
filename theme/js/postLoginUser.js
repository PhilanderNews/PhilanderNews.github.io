import { postWithToken } from "./api.js";
import {setInner,getValue} from "./element.js";
import {setCookieWithExpireHour} from "./cookie.js";

export default function Login(){
    let target_url = "https://asia-southeast2-befous.cloudfunctions.net/PhilanderNews-LoginUser";
    let tokenkey = "token";
    let tokenvalue = "688735114a6b7df3e77edd304c4e48af34b8fb8de5fe73f9f0e4a90f5db7b49e";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}

function responseData(result) {
    setInner("pesan", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    if (result.message == "Password Salah") {
        alert("Password Salah");
    }
    if (result.message == "Selamat Datang") {
        window.location.href = "../beranda";
    }
}