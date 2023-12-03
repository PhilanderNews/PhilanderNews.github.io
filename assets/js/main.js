// Tools
import Logout from "./dll/Logout.js";
// User
import Login from "./user/Login.js";
import RegistrasiUser from "./user/RegistrasiUser.js";
import Authorization from "./user/Authorization.js";
// Berita
import PostSatuBerita from "./berita/PostSatuBerita.js";
import GetSemuaBeritaBeranda from "./berita/GetSemuaBeritaBeranda.js";
// Komentar
import GetSemuaKomentarBlog from "./komentar/GetSemuaKomentarBlog.js";
import TambahKomentar from "./komentar/TambahKomentar.js";

window.Login = Login;
window.RegistrasiUser = RegistrasiUser;
window.Logout = Logout;
window.TambahKomentar = TambahKomentar;

const getallElement = document.getElementById('semua-berita');
const auth = document.getElementById('need-authorization');
const getsatuberita = document.getElementById('satu-berita');
const komentarberitaElement = document.getElementById('komentar-berita');
const divlogout = document.getElementById("logout");
const divcms = document.getElementById("cms");
const divlogin = document.getElementById("login");

if (getallElement) {
    GetSemuaBeritaBeranda();
} else {
    console.log("Element with ID 'semua-berita' not found. GetSemuaBeritaBeranda not executed.");
}

if (getsatuberita) {
    PostSatuBerita();
} else {
    console.log("Element with ID 'satu-berita' not found. PostSatuBerita not executed.");
}

if (komentarberitaElement) {
    GetSemuaKomentarBlog();
} else {
    console.log("Element with ID 'komentar-berita' not found. GetSemuaKomentarBlog not executed.");
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