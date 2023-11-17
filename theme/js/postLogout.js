import { deleteCookie } from "./cookie.js";

export default function Logout() {
    deleteCookie();
    window.location.href = "../login";
}