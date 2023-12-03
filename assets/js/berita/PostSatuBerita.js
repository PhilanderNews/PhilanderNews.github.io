import { postBiasa } from "../dll/api.js";
import { APIAmbilSatuBerita } from "../dll/rahasia.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function PostSatuBerita(){
    loadingIndicator.style.display = "block";
    const searchParams = new URLSearchParams(window.location.search);
    const idParam = searchParams.get('id');
    let datainjson = {
        "id": idParam
    }
    
    postBiasa(APIAmbilSatuBerita,datainjson,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('satu-berita');
    const data = result;
    // Create a new div for each post
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    // Set the HTML content for the post
    postDiv.innerHTML = `
    <div class="single-post">
        <div class="post-header mb-6 has-text-centered">
            <div class="meta-cat">
                <a class="post-category font-extra text-color is-uppercase font-sm letter-spacing-1" href="../?kategori=${data.kategori}">${data.kategori}</a>
            </div>
            <h2 class="post-title mt-2">
                ${data.judul}
            </h2>

            <div class="post-meta">
                <span class="is-uppercase font-sm letter-spacing-1 mr-3">by ${data.penulis}</span>
                <span class="is-uppercase font-sm letter-spacing-1">${data.waktu}</span>
            </div>
            <div class="post-featured-image mt-6">
                <img src="${data.image}" alt="featured-image" width="500">
            </div>
        </div>
        <div class="post-body">
            <div class="entry-content">
                <p>${data.konten.paragraf1}</p>
                <p>${data.konten.paragraf2}</p>
                <p>${data.konten.paragraf3}</p>
                <p>${data.konten.paragraf4}</p>
                <p>${data.konten.paragraf5}</p>
                <p>${data.konten.paragraf6}</p>
                <p>${data.konten.paragraf7}</p>
                <p>${data.konten.paragraf8}</p>
                <p>${data.konten.paragraf9}</p>
                <p>${data.konten.paragraf10}</p>
            </div>

            <div class="tags-share-box center-box is-flex has-text-centered is-justify-content-space-between border-top border-bottom py-4">
                <span class="single-comment-o"><i class="fa fa-comment-o"></i>Sumber : ${data.sumber}</span>
            </div>
        </div>
    </div>
    `;
    loadingIndicator.style.display = "none";
    // Append the post div to the post container
    postContainer.appendChild(postDiv);
}