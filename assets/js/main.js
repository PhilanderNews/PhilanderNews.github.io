import LoginUser from "./postLoginUser.js";
import RegistrasiUser from "./postRegistrasiUser.js";
import Logout from "./postLogout.js";
import getSemuaBerita from "./getSemuaBerita.js"
import { APIAmbilDataBerita } from "./rahasia.js"
import Authorization from "./auth.js";

window.LoginUser = LoginUser;
window.RegistrasiUser = RegistrasiUser;
window.Logout = Logout;

// Check if the element with ID 'preview-content' exists before calling getSemuaBerita
const previewContentElement = document.getElementById('preview-content');
const auth = document.getElementById('need-authorization');
if (previewContentElement) {
    getSemuaBerita(APIAmbilDataBerita);
} else {
    console.log("Element with ID 'preview-content' not found. getSemuaBerita not executed.");
}

if (auth) {
    Authorization();
} else {
    console.log("Element with ID 'need-authorization' not found. authUser not executed.");
}
