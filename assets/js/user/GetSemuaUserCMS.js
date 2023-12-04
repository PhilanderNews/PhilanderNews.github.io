import { getHeader } from "../dll/api.js";
import { getCookie } from "../dll/cookie.js";
import { APIAmbilDataUser } from "../dll/rahasia.js"

export default function GetSemuaUserCMS(){
    let tokencookie = getCookie("token")
    let tokenkey = "token"
    let tokenvalue = tokencookie;

    getHeader(APIAmbilDataUser,tokenkey,tokenvalue,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('semua-user-cms');
    const posts = result;
    
    posts.forEach(data => {
        // Create a new div for each post
        const postDiv = document.createElement('tr');
        postDiv.classList.add('post');

        // Set the HTML content for the post
        postDiv.innerHTML = `
            <td>${data.username}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.no_whatsapp}</td>
            <td>${data.role}</td>
        `;
        // Append the post div to the post container
        postContainer.appendChild(postDiv);
    });
}