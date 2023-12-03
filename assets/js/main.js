import Login from "./user/Login.js";
import RegistrasiUser from "./user/RegistrasiUser.js";
import Logout from "./dll/postLogout.js";
import SemuaBeritaBeranda from "./berita/SemuaBeritaBeranda.js"
import SemuaBeritaSingleBlog from "./berita/SemuaBeritaSingleBlog.js";
import Authorization from "./user/Authorization.js";
import SemuaKomentarSingleBlog from "./komentar/SemuaKomentarSingleBlog.js";
import TambahKomentar from "./komentar/TambahKomentar.js";

window.Login = Login;
window.RegistrasiUser = RegistrasiUser;
window.Logout = Logout;
window.TambahKomentar = TambahKomentar;

// Check if the element with ID 'preview-content' exists before calling getSemuaBerita
const previewContentElement = document.getElementById('preview-content');
const auth = document.getElementById('need-authorization');
const fullberitaElement = document.getElementById('full-berita');
const komentarberitaElement = document.getElementById('komentar-berita');
var divlogout = document.getElementById("logout");
var divcms = document.getElementById("cms");
var divlogin = document.getElementById("login");


if (previewContentElement) {
    SemuaBeritaBeranda();
} else {
    console.log("Element with ID 'preview-content' not found. SemuaBeritaBerita not executed.");
}


if (fullberitaElement) {
    SemuaBeritaSingleBlog();
} else {
    console.log("Element with ID 'full-berita' not found. SemuaBeritaSingleBlog not executed.");
}

if (komentarberitaElement) {
    SemuaKomentarSingleBlog();
} else {
    console.log("Element with ID 'komentar-berita' not found. SemuaKomentarSingleBlog not executed.");
}

if (auth) {
    Authorization();
} else {
    console.log("Element with ID 'need-authorization' not found. authUser not executed.");
}

// Cek apakah cookie ada
if (!document.cookie.includes("token")) {
    // Jika tidak ada, sembunyikan div dengan ID tertentu
    if (divlogout) {
        divlogout.style.display = "none";
    } else {
        console.log("Element with ID 'logout' not found.");
    }
    if (divcms) {
        divcms.style.display = "none";
    } else {
        console.log("Element with ID 'cms' not found.");
    }
} else {
    if (divlogin) {
        divlogin.style.display = "none";
    } else {
        console.log("Element with ID 'login' not found.");
    }
}
