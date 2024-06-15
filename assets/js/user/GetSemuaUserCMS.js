import { getHeader } from "../dll/api.js";
import { getCookie } from "../dll/cookie.js";
import { APIAmbilDataUser } from "../dll/rahasia.js"

export default function GetSemuaUserCMS(){
    let tokencookie = getCookie("Authorization")
    let tokenkey = "Authorization"
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
            <td><a class="btn btn-primary btn-user btn-block" href="UpdateUser.html?name=${data.name}&email=${data.email}&no_whatsapp=${data.no_whatsapp}&username=${data.username}&role=${data.role}">Update</a></td>
            <td><a class="btn btn-danger btn-user btn-block" href="DeleteUser.html?username=${data.username}">Delete</a></td>
        `;
        // Append the post div to the post container
        postContainer.appendChild(postDiv);
    });
}