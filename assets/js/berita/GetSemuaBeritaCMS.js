import { getBiasa } from "../dll/api.js";
import { APIAmbilDataBerita } from "../dll/rahasia.js"

export default function GetSemuaBeritaCMS(){
    getBiasa(APIAmbilDataBerita,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('semua-berita-cms');
    const posts = result;
    
    posts.forEach(data => {
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
    });
}