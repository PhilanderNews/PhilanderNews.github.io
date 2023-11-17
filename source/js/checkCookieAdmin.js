import { getCookie} from "./cookie.js";

export default function checkCookieAdmin() {
    let user = getCookie("token");
    let name = getCookie("name");
	let role = getCookie("role");
	if (user) {
		if (role !== "admin") {
			alert("Role anda bukan admin");
			window.location.href="../../login";
			deleteCookie();
		} else {
			alert("Welcome " + name);
		}
	
	} else {
		window.location.href="../../login";
		deleteCookie();
	}
}