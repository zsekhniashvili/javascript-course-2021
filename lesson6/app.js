// Ajax
// Asynchronouse Javascript And XML

// const url = 'https://jsonplaceholder.typicode.com/users';
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.onload = () => {
//     console.log(xhr.responseText)
// };
// xhr.onerror = () => {
//     console.log(xhr);
// };
// xhr.send();

// Callbacks

// function get(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => {
//         callback(JSON.parse(xhr.responseText))
//     };
//     xhr.onerror = () => {
//         console.log(xhr);
//     };
//     xhr.send();
// }

// get(`https://jsonplaceholder.typicode.com/users`, users => {
//     console.log(users);
// })

// Callback hell
// get(`https://jsonplaceholder.typicode.com/users`, users => {
//     console.log(users);
//     for (let user of users) {
//         get(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`, posts => {
//             console.log(posts);
//             for (let post of posts) {
//                 get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, comments => {
//                     console.log("Comments ",comments);
//                 })
//             }
//         })
//     }
// })


// Promises
// function get(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () => {
//             resolve(JSON.parse(xhr.responseText))
//         };
//         xhr.onerror = () => {
//             reject(xhr);
//         };
//         xhr.send();
//     })
// }

// get(`https://jsonplaceholder.typicode.com/users`)
//     .then(users => {
//         console.log(users);
//         const postPromises = [];
//         for (let user of users) {
//             postPromises.push(get(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`))
//         }

//         return Promise.all(postPromises);
//     })
//     .then(postsArray => {
        
//     })

// get(`api/getidbyusername/hotcakes`)
//     .then(result => {
//         return get(`api/getfollowersbyid/`+result.userID);
//     })
//     .then(result => {
//         return get(`api/someothercall/`+result.followers)
//     })
//     .then(result => {
//         return get(`api/someothercall/`+result.followers)
//     })
//     .then(result => {
//         return get(`api/someothercall/`+result.followers)
//     })
//     .then(result => {
//         return get(`api/someothercall/`+result.followers)
//     })
//     .then(result => {
//         return get(`api/someothercall/`+result.followers)
//     })
//     .then(result => {
//         console.log(result);
//     })



// Promise.all
// version 1
// let imageLoaded = 0;
// for (let i = 0; i<10; i++) {
//     const img = document.createElement('img');
//     img.onload = () => {
//         console.log("Image loaded");
//         imageLoaded++;
//         if (imageLoaded === 10) {
//             console.log("All images loaded");
//         }
//     }
//     img.src = `https://randomuser.me/api/portraits/men/${i}.jpg`
//     document.body.append(img);
// }

// version 2
// function createImage(url) {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.onload = resolve;
//         img.src = url
//         document.body.append(img);
//     })
// }
// const imagePromises = [];
// for (let i = 0; i<10; i++) {
//     imagePromises.push(createImage(`https://randomuser.me/api/portraits/men/${i}.jpg`));
// }

// Promise.all(imagePromises)
// .then(() => {
//     console.log("All Images loaded");
// })


// Fetch

// fetch(`https://jsonplaceholder.typicode.com/users`, {
//     method: 'POST',
//     body: JSON.stringify({username: 'Zura'})
// })
//     .then(response => response.json())
//     .then(result => {
        
//     })

// Async & Await

async function main() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'POST',
        body: JSON.stringify({username: 'Zura'})
    })
    const result = await response.json();
    console.log(result);
}

console.log("before main");
main()
    .then(() => {
        console.log("MAin function is done");
    });
console.log("After main");