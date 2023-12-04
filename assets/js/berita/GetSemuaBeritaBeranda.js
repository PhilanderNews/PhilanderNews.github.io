import { getBiasa } from "../dll/api.js";
import { APIAmbilDataBerita } from "../dll/rahasia.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function GetSemuaBeritaBeranda(){
    loadingIndicator.style.display = "block";
    getBiasa(APIAmbilDataBerita,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('semua-berita');
    const posts = result;

    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('kategori');
    
    posts.forEach(data => {
        // Check if the category matches the query parameter
        if (categoryParam === null || data.kategori === categoryParam) {
            // Create a new div for each post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Set the HTML content for the post
            postDiv.innerHTML = `
                <div class="mb-5 post-list border-bottom pb-5">
                    <div class="columns is-gapless is-multiline">
                        <div class="column is-5-desktop">
                            <a class="post-thumb" href="berita/?id=${data.id}">
                                <img src="${data.image}" alt="" class="w-100">
                            </a>
                        </div>

                        <div class="column is-7-desktop">
                            <div class="post-article">
                                <div class="meta-cat">
                                    <span class="letter-spacing cat-name font-extra is-uppercase font-sm">${data.kategori}</span>
                                </div>

                                <h3 class="post-title mt-2"><a href="berita/?id=${data.id}">${data.judul}</a></h3>
                                <div class="post-content">
                                    <p>${data.preview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            loadingIndicator.style.display = "none";
            // Append the post div to the post container
            postContainer.appendChild(postDiv);
        }
    });
}