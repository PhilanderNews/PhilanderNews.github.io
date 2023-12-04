import { getCookie,deleteCookie } from "../dll/cookie.js";
import { APIAuthorization } from "../dll/rahasia.js"

// ----------Kodingan ini menyimpan data ke dalam sessionStorage(tidak aman tapi cepat)

// export default function Authorization() {
//     const myHeaders = new Headers();
//     let tokencookie = getCookie("token");
//     myHeaders.set('token', tokencookie);

//     const adminAuthorizationElement = document.getElementById('admin-authorization');
//     const authorAuthorizationElement = document.getElementById('author-authorization');
//     const userAuthorizationElement = document.getElementById('user-authorization');

//     // Check for cached data
//     const cachedData = sessionStorage.getItem('cachedAuthorizationData');
//     if (cachedData) {
//         const cachedDataParsed = JSON.parse(cachedData);
//         handleAuthorizationResult(cachedDataParsed);
//         return Promise.resolve(cachedDataParsed);
//     }

//     // Fetch GET request
//     return fetch(APIAuthorization, {
//         method: 'GET',
//         headers: myHeaders
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Process the received data
//         handleAuthorizationResult(data);

//         // Cache the data
//         sessionStorage.setItem('cachedAuthorizationData', JSON.stringify(data));

//         return data; // Return the data for use in main.js if needed
//     })
//     .catch(error => {
//         // Handle fetch errors
//         console.error('Fetch Error:', error);
//         throw error; // Throw back the error for use in main.js if needed
//     });

//     function handleAuthorizationResult(data) {
//         const userData = data.data;
//         const role = userData.role;

//         if (data.status === true) {
//             // Additional logic based on the role and elements
//             if (adminAuthorizationElement && role.admin === false) {
//                 console.error('Error:', data.message);
//                 window.location.href = "../../login";
//             }
//             if (authorAuthorizationElement && role.author === false) {
//                 console.error('Error:', data.message);
//                 window.location.href = "../../login";
//             }
//             if (userAuthorizationElement && role.user === false) {
//                 console.error('Error:', data.message);
//                 alert("Akun anda tidak aktif");
//                 window.location.href = "../../login";
//             }
//         } else if (data.status === false) {
//             // No token header or no decode result
//             console.error('Error:', data.message);
//             window.location.href = "../../login";
//         }
//     }
// }

// ----------Kodingan full dari api(aman tapi cukup lama)

const adminAuthorizationElement = document.getElementById('admin-authorization');
const authorAuthorizationElement = document.getElementById('author-authorization');

export default function Authorization() {
    const myHeaders = new Headers();
    let tokencookie = getCookie("token");
    myHeaders.append("token", tokencookie);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    // Fetch GET request
    return fetch(APIAuthorization, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Process the received data
        handleAuthorizationResult(data);

        return data; // Return the data for use in main.js if needed
    })
    .catch(error => {
        // Handle fetch errors
        console.error('Fetch Error:', error);
        throw error; // Throw back the error for use in main.js if needed
    });
}

function handleAuthorizationResult(data) {
    const userData = data.data;
    const role = userData.role;
    

    if (data.status === true) {
        // Additional logic based on the role and elements
        
        if (adminAuthorizationElement && role != "admin") {
            handleAuthorizationError("Anda tidak terdaftar sebagai admin");
        }
        if (authorAuthorizationElement && (role != "author" && role != "admin")) {
            handleAuthorizationError("Anda tidak terdaftar sebagai admin ataupun author");
        }
    } else if (data.status === false) {
        // No token header or no decode result
        handleAuthorizationError("Ada blom login")
    }
}

function handleAuthorizationError(message) {
    console.error('Error:', message);
    alert(message);
    deleteCookie();
    window.location.href = "../../login";
}