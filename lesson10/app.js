// What is Postman
// https://www.postman.com/downloads/

// json placeholder - make requests with different methods

// Process login form using ajax
const form = document.querySelector('#loginForm');
form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    // const username = ev.target.querySelector('[name=username]').value;
    // const password = ev.target.querySelector('[name=password]').value;
    // const data = {
    //     username,
    //     password
    // }
    const excludeFields = ['id', 'gender'];
    const fields = ev.target.querySelectorAll('[name]');
    console.log(fields);
    const data = {};
    fields.forEach(element => {

        if (excludeFields.includes(element.name)) {
            return;
        }


        if (element.type == 'checkbox') {
            data[element.name] = element.checked;
        } else {
            data[element.name] = element.value;
        }
    });

    console.log(data);
    //TODO send data to the API
});

// Reading data from input[type=file]
const photoInput = document.querySelector('#loginForm input[type=file][name=photos]');
console.log(photoInput);
photoInput.addEventListener('change', ev => {

    const files = [...ev.target.files];

    files.forEach(file => {
        readImage(file)
            .then(url => {
                const img = new Image();
                img.src = url;
                img.style.width = '100px;'
                document.body.appendChild(img);
            })
    })
});

function readImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result)
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    })
}

// localStorage

localStorage.setItem('name', 'Zura');
localStorage.setItem('age', 29);
// localStorage.getItem('name'); // Zura
// localStorage.removeItem('age');
// localStorage.clear();

// sessionStorage

// cookies
function setCookie(name,value,seconds) {
    var expires = "";
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


// desktop notifications
if (!('Notification' in window)) {
    console.log('ups');
} else {
    if (Notification.permission == 'granted') {
        showNotification()
    } else if (Notification.permission == 'denied') {
        console.log("Dont show")
    } else {
        Notification.requestPermission()
            .then((permission) => {
                if (permission === 'granted')
                    showNotification()
                else if (permission === 'denied') {
                    console.log("Dont show");
                }
            })
    }
}

function showNotification() {
    console.log("Show notification");
    const notification = new Notification("New message incoming", {
        body: "Hi there. How are you doing?",
        // icon: "yourimageurl.png"
     })
}


// window.location
window.addEventListener('hashchange', ev => {
    console.log(window.location.hash);
})

// window.history

// const url = new URL(window.location);
// url.searchParams.set('name', 'zura');
// window.history.pushState({}, '', url);

// encodeURIComponent, decodeURIComponent

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}