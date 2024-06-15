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
if (!document.cookie.includes("Authorization")) {
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

const updateBeritaElement = document.getElementById('update-berita');
if (updateBeritaElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    const kategori = searchParams.get("kategori");
    const judul = searchParams.get("judul");
    const preview = searchParams.get("preview");
    const paragraf1 = searchParams.get("paragraf1");
    const paragraf2 = searchParams.get("paragraf2");
    const paragraf3 = searchParams.get("paragraf3");
    const paragraf4 = searchParams.get("paragraf4");
    const paragraf5 = searchParams.get("paragraf5");
    const paragraf6 = searchParams.get("paragraf6");
    const paragraf7 = searchParams.get("paragraf7");
    const paragraf8 = searchParams.get("paragraf8");
    const paragraf9 = searchParams.get("paragraf9");
    const paragraf10 = searchParams.get("paragraf10");
    const sumber = searchParams.get("sumber");
    const image = searchParams.get("image");

    // change value form
    document.getElementById("id-berita").value = id;
    document.getElementById("kategori").value = kategori;
    document.getElementById("judul").value = judul;
    document.getElementById("preview").value = preview;
    document.getElementById("paragraf1").value = paragraf1;
    document.getElementById("paragraf2").value = paragraf2;
    document.getElementById("paragraf3").value = paragraf3;
    document.getElementById("paragraf4").value = paragraf4;
    document.getElementById("paragraf5").value = paragraf5;
    document.getElementById("paragraf6").value = paragraf6;
    document.getElementById("paragraf7").value = paragraf7;
    document.getElementById("paragraf8").value = paragraf8;
    document.getElementById("paragraf9").value = paragraf9;
    document.getElementById("paragraf10").value = paragraf10;
    document.getElementById("sumber").value = sumber;
    document.getElementById("image").value = image;
} else {
    console.log("Element with ID 'update-berita' not found.");
}

const deleteBeritaElement = document.getElementById('delete-berita');
if (deleteBeritaElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    // change value form
    document.getElementById("id-berita").value = id;
} else {
    console.log("Element with ID 'delete-berita' not found.");
}

const deleteKomentarElement = document.getElementById('delete-komentar');
if (deleteKomentarElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    // change value form
    document.getElementById("id-komentar").value = id;
} else {
    console.log("Element with ID 'delete-komentar' not found.");
}

const updateUserElement = document.getElementById('update-user');
if (updateUserElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get("name");
    // const email = searchParams.get("email");
    // const no_whatsapp = searchParams.get("no_whatsapp");
    const username = searchParams.get("username");
    const role = searchParams.get("role");

    // change value form
    document.getElementById("name").value = name;
    // document.getElementById("email").value = email;
    // document.getElementById("no_whatsapp").value = no_whatsapp;
    document.getElementById("username").value = username;
    document.getElementById("role").value = role;
} else {
    console.log("Element with ID 'update-user' not found.");
}

const deleteUserElement = document.getElementById('delete-user');
if (deleteUserElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const username = searchParams.get("username");

    // change value form
    document.getElementById("username").value = username;
} else {
    console.log("Element with ID 'delete-user' not found.");
}