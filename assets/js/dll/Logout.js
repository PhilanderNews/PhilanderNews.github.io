import { deleteCookie } from "./cookie.js";

export default function Logout() {
    // Hapus cookie
    deleteCookie();

    // Alihkan ke halaman login
    window.location.href = location.origin;
}
