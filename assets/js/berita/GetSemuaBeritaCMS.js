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
            <td>${data.judul}</td>
            <td>${data.kategori}</td>
            <td>${data.waktu}</td>
            <td>${data.penulis}</td>
            <td><a class="btn btn-primary btn-user btn-block" href="UpdateBerita.html?id=${data.id}&kategori=${data.kategori}&judul=${data.judul}&preview=${data.preview}&paragraf1=${data.paragraf1}&paragraf2=${data.paragraf2}&paragraf3=${data.paragraf3}&paragraf4=${data.paragraf4}&paragraf5=${data.paragraf5}&paragraf6=${data.paragraf6}&paragraf7=${data.paragraf7}&paragraf8=${data.paragraf8}&paragraf9=${data.paragraf9}&paragraf10=${data.paragraf10}&sumber=${data.sumber}&image=${data.image}">Update</a></td>
            <td><a class="btn btn-danger btn-user btn-block" href="DeleteBerita.html?id=${data.id}">Delete</a></td>
        `;
        // Append the post div to the post container
        postContainer.appendChild(postDiv);
    });
}