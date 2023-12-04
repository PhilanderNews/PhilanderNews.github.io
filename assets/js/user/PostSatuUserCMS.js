import { postHeader } from "../dll/api.js";
import { APIAmbilSatuUser } from "../dll/rahasia.js"
import { getValue } from "../dll/element.js";
import { getCookie } from "../dll/cookie.js";

export default function PostSatuUserCMS(){
    let tokencookie = getCookie("token")
    let tokenkey = "token"
    let tokenvalue = tokencookie;

    let username = getValue("username");
    let datainjson = {
        "username": username
    }
    
    postHeader(APIAmbilSatuUser,tokenkey,tokenvalue,datainjson,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('satu-user-cms');
    const data = result;
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
}