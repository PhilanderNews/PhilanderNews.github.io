import { getCookie} from "./cookie.js";

export default function checkCookieUser() {
    let user = getCookie("token");
    let name = getCookie("name");
	let role = getCookie("role");
	if (user) {
		if (role !== "user") {
			alert("Role anda bukan user");
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