import { postBiasa } from "../dll/api.js";
import { APIAmbilSatuKomentar } from "../dll/rahasia.js"
import { getValue } from "../dll/element.js";

export default function PostSatuKomentarCMS(){
    let id = getValue("id-komentar");
    let datainjson = {
        "id": id
    }
    
    postBiasa(APIAmbilSatuKomentar,datainjson,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('satu-komentar-cms');
    const data = result;
    // Create a new div for each post
    const postDiv = document.createElement('tr');
    postDiv.classList.add('post');

    // Set the HTML content for the post
    postDiv.innerHTML = `
    <td>${data.id}</td>
    <td>${data.id_berita}</td>
    <td>${data.name}</td>
    <td>${data.tanggal}</td>
    `;
    // Append the post div to the post container
    postContainer.appendChild(postDiv);
}