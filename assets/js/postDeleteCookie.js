import { deleteCookie } from "./cookie.js";

export default function HapusCookie() {
    deleteCookie();
    sessionStorage.clear("tokenuser")
    sessionStorage.clear("tokenadmin")
    sessionStorage.clear("name")
}