import { APIAmbilDataKomentar } from "../dll/rahasia.js"

const loadingIndicator = document.getElementById("loadingIndicator");

// ----------Kodingan ini menyimpan data ke dalam sessionStorage(tidak aman tapi cepat)

export default function SemuaKomentarSingleBlog() {
    loadingIndicator.style.display = "block";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const searchParams = new URLSearchParams(window.location.search);
    const idParam = searchParams.get('id');

    // Fetch GET request
    return fetch(APIAmbilDataKomentar, requestOptions)
    .then(response => response.json())
    .then(dataArray => {

        // Display news
        displayNews(dataArray, idParam);

        return dataArray; // Return the data for use if needed
    })
    .catch(error => console.error('Error fetching data:', error));
        
}

function displayNews(dataArray, idParam) {
    // Reference to the post container
    const postContainer = document.getElementById('komentar-berita');

    // Loop through the array and generate HTML content for each object
    dataArray.forEach(data => {
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