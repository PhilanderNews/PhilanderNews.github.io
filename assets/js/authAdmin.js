import { getCookie} from "./cookie.js";
import { adminrahasia } from "./rahasia.js"

export default function authAdmin() {
    let user = getCookie("tokenadmin");
    let name = sessionStorage.getItem("name");
	let role = sessionStorage.getItem("role");
	if (!user) {
        alert("Login terlebih dahulu");
        window.location.href = "../../login";
        deleteCookie();
        sessionStorage.clear("name");
        sessionStorage.clear("role");
    } else if (!role || role !== adminrahasia) {
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