import { getBiasa } from "../dll/api.js";
import { APIAmbilDataKomentar } from "../dll/rahasia.js"

const loadingIndicator = document.getElementById("loadingIndicator");

export default function GetSemuaKomentarBlog(){
    loadingIndicator.style.display = "block";
    getBiasa(APIAmbilDataKomentar,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('komentar-berita');
    const posts = result;

    const searchParams = new URLSearchParams(window.location.search);
    const idParam = searchParams.get('id');
    
    posts.forEach(data => {
        // Check if the id matches the query parameter
        if (data.id_berita === idParam) {
            // Create a new div for each post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Set the HTML content for the post
            postDiv.innerHTML = `
            <div class="comment-area-box media mb-6">
                <img alt="" src="../assets/images/user.jpg" class=" is-pulled-left mr-3 mt-2" height="100" width="100">

                <div class="ml-4">
                    <h4 class="mb-0">${data.name} </h4>
                    <span class="date-comm font-sm is-capitalize text-color"><i class="ti-time mr-2"></i>${data.tanggal} </span>

                    <div class="comment-content mt-4">
                        <p>${data.komentar}</p>
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