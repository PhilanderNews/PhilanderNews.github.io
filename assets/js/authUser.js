import { getCookie} from "./cookie.js";
import { userrahasia } from "./rahasia.js"

export default function authUser() {
    let user = getCookie("tokenuser");
    let name = sessionStorage.getItem("name");
	let role = sessionStorage.getItem("role");
	if (!user) {
        alert("Login terlebih dahulu");
        window.location.href = "../../login";
        deleteCookie();
        sessionStorage.clear("name");
        sessionStorage.clear("role");
    } else if (!role || role !== userrahasia) {
        alert("Anda tidak memiliki akses yang diizinkan");
        window.location.href = "../../login";
        deleteCookie();
        sessionStorage.clear("name");
        sessionStorage.clear("role");
    } else {
        if (!name) {
            alert("Welcome, silahkan daftarkan nama anda pada menu profile");
            window.location.href = "../../profile";
        } else if (name) {
            alert("Welcome " + name);
        }
    }
}