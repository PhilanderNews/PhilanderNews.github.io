import LoginUser from "./postLoginUser.js";
import RegistrasiUser from "./postRegistrasiUser.js";
import Logout from "./postLogout.js";
import HapusCookie from "./postDeleteCookie.js";
import authUser from "./authUser.js";
import authAdmin from "./authAdmin.js";
import getSemuaBerita from "./getSemuaBerita.js"
import { APIAmbilDataBerita } from "./rahasia.js"

window.LoginUser = LoginUser;
window.RegistrasiUser = RegistrasiUser;
window.Logout = Logout;
window.HapusCookie = HapusCookie;

// Check if the element with ID 'preview-content' exists before calling getSemuaBerita
const previewContentElement = document.getElementById('preview-content');
const authUserNeeded = document.getElementById('auth-user-needed');
const authAdminNeeded = document.getElementById('auth-admin-needed');
if (previewContentElement) {
    getSemuaBerita(APIAmbilDataBerita);
} else {
    console.log("Element with ID 'preview-content' not found. getSemuaBerita not executed.");
}

if (authUserNeeded) {
    authUser();
} else {
    console.log("Element with ID 'auth-user-needed' not found. authUser not executed.");
}

if (authAdminNeeded) {
    authAdmin();
} else {
    console.log("Element with ID 'auth-admin-needed' not found. authAdmin not executed.");
}

// fetch('https://asia-southeast2-befous.cloudfunctions.net/PhilanderNews-AmbilDataBerita-Test')
//     .then(response => response.json())
//     .then(dataArray => {
//         // Call the exported function to update HTML content with fetched data
//         updateHTMLContent(dataArray);
//     })
//     .catch(error => console.error('Error fetching data:', error));
