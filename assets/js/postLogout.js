import { deleteCookie } from "./cookie.js";

export default function Logout() {
    deleteCookie();
    sessionStorage.clear("tokenuser")
    sessionStorage.clear("tokenadmin")
    sessionStorage.clear("name")
    window.location.href = "../../login";
}