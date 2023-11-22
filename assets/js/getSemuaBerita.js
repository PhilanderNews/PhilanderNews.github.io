export default function getSemuaBerita(apiEndpoint) {
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(dataArray => {
            //Reference to the post container
            const postContainer = document.getElementById('preview-content');

            //Loop through the array and generate HTML content for each object
            dataArray.forEach(data => {
            //Create a new div for each post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            //Set the HTML content for the post
            postDiv.innerHTML = `
                <div class="mb-5 post-list border-bottom pb-5">
                    <div class="columns is-gapless is-multiline">
                        <div class="column is-5-desktop">
                            <a class="post-thumb" href="blog-single.html?id=${data.id}">
                                <img src="../../assets/images/news/${data.id}.jpg" alt="" class="w-100">
                            </a>
                        </div>

                        <div class="column is-7-desktop">
                            <div class="post-article">
                                <div class="meta-cat">
                                    <span class="letter-spacing cat-name font-extra is-uppercase font-sm">${data.kategori}</span>
                                </div>

                                <h3 class="post-title mt-2"><a href="blog-single.html?id=${data.id}">${data.judul}</a></h3>
                                <div class="post-content">
                                    <p>${data.preview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        //Append the post div to the post container
        postContainer.appendChild(postDiv);
    });
    })
        .catch(error => console.error('Error fetching data:', error));
}
