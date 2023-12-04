// Tools
import Logout from "./dll/Logout.js";
// User
import Login from "./user/Login.js";
import RegistrasiUser from "./user/RegistrasiUser.js";
import Authorization from "./user/Authorization.js";
import HapusUser from "./user/DeleteSatuUser.js";
import GetSemuaUserCMS from "./user/GetSemuaUserCMS.js";
import PostSatuUserCMS from "./user/PostSatuUserCMS.js";
import TambahUser from "./user/TambahUser.js";
import UpdateUser from "./user/UpdateUser.js";
// Berita
import PostSatuBerita from "./berita/PostSatuBerita.js";
import GetSemuaBeritaBeranda from "./berita/GetSemuaBeritaBeranda.js";
import GetSemuaBeritaCMS from "./berita/GetSemuaBeritaCMS.js";
import TambahBerita from "./berita/TambahBerita.js";
import UpdateBerita from "./berita/UpdateBerita.js";
import PostSatuBeritaCMS from "./berita/PostSatuBeritaCMS.js";
import HapusBerita from "./berita/DeleteSatuBerita.js";
// Komentar
import GetSemuaKomentarBlog from "./komentar/GetSemuaKomentarBlog.js";
import TambahKomentar from "./komentar/TambahKomentar.js";
import HapusKomentar from "./komentar/DeleteSatuKomentar.js";
import GetSemuaKomentarCMS from "./komentar/GetSemuaKomentarCMS.js";
import PostSatuKomentarCMS from "./komentar/PostSatuKomentarCMS.js";

// Tools
window.Logout = Logout;
// User
window.Login = Login;
window.RegistrasiUser = RegistrasiUser;
window.HapusUser = HapusUser;
window.PostSatuUserCMS = PostSatuUserCMS;
window.TambahUser = TambahUser;
window.UpdateUser = UpdateUser;
// Berita
window.TambahBerita = TambahBerita;
window.UpdateBerita = UpdateBerita;
window.HapusBerita = HapusBerita;
window.PostSatuBeritaCMS = PostSatuBeritaCMS;
// Komentar
window.HapusKomentar = HapusKomentar;
window.TambahKomentar = TambahKomentar;
window.PostSatuKomentarCMS = PostSatuKomentarCMS;

const getallBeritaElement = document.getElementById('semua-berita');
const getallBeritaCMSElement = document.getElementById('semua-berita-cms');
const getallKomentarCMSElement = document.getElementById('semua-komentar-cms');
const getallUserCMSElement = document.getElementById('semua-user-cms');
const auth = document.getElementById('need-authorization');
const getsatuberita = document.getElementById('satu-berita');
const komentarberitaElement = document.getElementById('komentar-berita');
const divlogout = document.getElementById("logout");
const divcms = document.getElementById("cms");
const divlogin = document.getElementById("login");

if (getallBeritaElement) {
    GetSemuaBeritaBeranda();
} else {
    console.log("Element with ID 'semua-berita' not found. GetSemuaBeritaBeranda not executed.");
}

if (getallBeritaCMSElement) {
    GetSemuaBeritaCMS();
} else {
    console.log("Element with ID 'semua-berita-cms' not found. GetSemuaBeritaCMS not executed.");
}

if (getallKomentarCMSElement) {
    GetSemuaKomentarCMS();
} else {
    console.log("Element with ID 'semua-komentar-cms' not found. GetSemuaKomentarCMS not executed.");
}

if (getallUserCMSElement) {
    GetSemuaUserCMS();
} else {
    console.log("Element with ID 'semua-user-cms' not found. GetSemuaUserCMS not executed.");
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