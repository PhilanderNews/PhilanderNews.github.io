import { APIAmbilDataBerita } from "../dll/rahasia.js"
import { getCookie } from "../dll/cookie.js";

const loadingIndicator = document.getElementById("loadingIndicator");

// ----------Kodingan ini menyimpan data ke dalam sessionStorage(tidak aman tapi cepat)

export default function SemuaBeritaBeranda() {
    loadingIndicator.style.display = "block";

    const myHeaders = new Headers();
    let tokencookie = getCookie("token");
    myHeaders.append("token", tokencookie);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('kategori');

    // Fetch GET request
    return fetch(APIAmbilDataBerita, requestOptions)
    .then(response => response.json())
    .then(dataArray => {

        // Display news
        displayNews(dataArray, categoryParam);
        
        // Save data to sessionStorage
        sessionStorage.setItem('cachedNewsData', JSON.stringify(dataArray));

        return dataArray; // Return the data for use if needed
    })
    .catch(error => console.error('Error fetching data:', error));
        
}

function displayNews(dataArray, categoryParam) {
    // Reference to the post container
    const postContainer = document.getElementById('preview-content');

    // Loop through the array and generate HTML content for each object
    dataArray.forEach(data => {
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

// ----------Kodingan full dari api(aman tapi cukup lama)

// export default function getSemuaBerita() {
//     loadingIndicator.style.display = "block";
//     const searchParams = new URLSearchParams(window.location.search);
//     const categoryParam = searchParams.get('kategori');

//     // Fetch GET request
//     return fetch(APIAmbilDataBerita, {
//         method: 'GET',
//     })
//     .then(response => response.json())
//     .then(dataArray => {

//         // Display news
//         displayNews(dataArray, categoryParam);

//         return dataArray; // Return the data for use if needed
//     })
//     .catch(error => console.error('Error fetching data:', error));
        
// }

// function displayNews(dataArray, categoryParam) {
//     // Reference to the post container
//     const postContainer = document.getElementById('preview-content');

//     // Loop through the array and generate HTML content for each object
//     dataArray.forEach(data => {
//         // Check if the category matches the query parameter
//         if (categoryParam === null || data.kategori === categoryParam) {
//             // Create a new div for each post
//             const postDiv = document.createElement('div');
//             postDiv.classList.add('post');

//             // Set the HTML content for the post
//             postDiv.innerHTML = `
//                 <div class="mb-5 post-list border-bottom pb-5">
//                     <div class="columns is-gapless is-multiline">
//                         <div class="column is-5-desktop">
//                             <a class="post-thumb" href="blog-single.html?id=${data.id}">
//                                 <img src="../../assets/images/news/${data.id}.jpg" alt="" class="w-100">
//                             </a>
//                         </div>

//                         <div class="column is-7-desktop">
//                             <div class="post-article">
//                                 <div class="meta-cat">
//                                     <span class="letter-spacing cat-name font-extra is-uppercase font-sm">${data.kategori}</span>
//                                 </div>

//                                 <h3 class="post-title mt-2"><a href="blog-single.html?id=${data.id}">${data.judul}</a></h3>
//                                 <div class="post-content">
//                                     <p>${data.preview}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             loadingIndicator.style.display = "none";
//             // Append the post div to the post container
//             postContainer.appendChild(postDiv);
//         }
//     });
// }