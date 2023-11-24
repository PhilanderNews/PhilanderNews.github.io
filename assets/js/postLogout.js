import { deleteCookie } from "./cookie.js";

export default function Logout() {
    // Hapus cookie
    deleteCookie();

    // Hapus data dari sessionStorage
    sessionStorage.removeItem('cachedAuthorizationData');

    // Alihkan ke halaman login
    window.location.href = "../../login";
}
