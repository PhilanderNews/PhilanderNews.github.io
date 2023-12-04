import { postBiasa } from "../dll/api.js";
import { APIAmbilSatuBerita } from "../dll/rahasia.js"
import { getValue } from "../dll/element.js";

export default function PostSatuBeritaCMS(){
    let id = getValue("id-berita");
    let datainjson = {
        "id": id
    }
    
    postBiasa(APIAmbilSatuBerita,datainjson,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('satu-berita-cms');
    const data = result;
    // Create a new div for each post
    const postDiv = document.createElement('tr');
    postDiv.classList.add('post');

    // Set the HTML content for the post
    postDiv.innerHTML = `
    <td>${data.id}</td>
    <td>${data.kategori}</td>
    <td>${data.judul}</td>
    <td>${data.waktu}</td>
    <td>${data.penulis}</td>
    <td>${data.judul}</td>
    `;
    // Append the post div to the post container
    postContainer.appendChild(postDiv);
}