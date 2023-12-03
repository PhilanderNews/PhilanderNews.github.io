import Login from "./user/Login.js";
import RegistrasiUser from "./user/RegistrasiUser.js";
import Logout from "./dll/postLogout.js";
import SemuaBeritaBeranda from "./berita/SemuaBeritaBeranda.js"
import Authorization from "./user/Authorization.js";

window.Login = Login;
window.RegistrasiUser = RegistrasiUser;
window.Logout = Logout;

// Check if the element with ID 'preview-content' exists before calling getSemuaBerita
const previewContentElement = document.getElementById('preview-content');
const auth = document.getElementById('need-authorization');
if (previewContentElement) {
    SemuaBeritaBeranda();
} else {
    console.log("Element with ID 'preview-content' not found. getSemuaBerita not executed.");
}

if (auth) {
    Authorization();
} else {
    console.log("Element with ID 'need-authorization' not found. authUser not executed.");
}

// Cek apakah cookie ada
if (!document.cookie.includes("token")) {
    // Jika tidak ada, sembunyikan div dengan ID tertentu
    var divToHide = document.getElementById("logout");
    if (divToHide) {
      divToHide.style.display = "none";
    } else {
        console.log("Element with ID 'logout' not found.");
    }
    var divToHide2 = document.getElementById("cms");
    if (divToHide2) {
      divToHide2.style.display = "none";
    } else {
        console.log("Element with ID 'logout' not found.");
    }
} else {
    var divToHide = document.getElementById("login");
    if (divToHide) {
      divToHide.style.display = "none";
    } else {
        console.log("Element with ID 'login' not found.");
    }
}
