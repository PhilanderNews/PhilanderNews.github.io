import { getBiasa } from "../dll/api.js";
import { APIAmbilDataKomentar } from "../dll/rahasia.js"

export default function GetSemuaKomentarCMS(){
    getBiasa(APIAmbilDataKomentar,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('semua-komentar-cms');
    const posts = result;
    
    posts.forEach(data => {
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
    });
}