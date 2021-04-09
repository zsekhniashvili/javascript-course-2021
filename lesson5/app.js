// 3 ways to add event listener on element, advantages of each


// function submitHandler(){
//     console.log("Button clicked");
// }
// const button = document.querySelector('#mySubmitButton');
// button.onclick = submitHandler;
// button.onclick = function(){
//     console.log("Submit click 2");
// }

// button.addEventListener('click', submitHandler);
// button.addEventListener('click', function(){
//     console.log("Button clicked 2");
// });

// Remove event listeners
// button.removeEventListener('click', submitHandler);

// window.onload
// window.addEventListener('load', () => {
//     console.log("Window loaded");
// });

// document DOMContentLoaded
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("Document loaded");
// })



// Mouse events, event.target
// click, mousedown, mouseup, mouseenter, mousemove, mouseleave, mouseover, mouseout
// const button = document.querySelector('#mySubmitButton');
// const handler = (e) => {
//     console.log(e.currentTarget, e.target, e.clientX, e.clientY);
//     sum(1, 2);
// }

// const buttonHandler = function(e) {
//     console.log("Click", arguments);
// };

// button.addEventListener('click', buttonHandler)

// button.addEventListener('mousedown', handler)
// button.addEventListener('mouseup', handler)
// button.addEventListener('mouseenter', handler)
// button.addEventListener('mouseleave', handler)

// Event Object

// Default actions: click on a, form submission

// const link = document.querySelector('#googleLink');
// link.addEventListener('click', (ev) => {
//     console.log("Google link clicked");
//     ev.preventDefault();
// })
// const form = document.querySelector('#searchForm');
// const searchInput = document.querySelector('#searchKeyword');
// form.addEventListener('submit', (ev) => {
//     console.log(ev.target);

//     if (!searchInput.value) {
//         ev.preventDefault();
//     }
// })


// event Propogation
// const div1 = document.querySelector('#div1');
// const button1 = document.querySelector('#button1');
// button1.addEventListener('click', (ev) => {
//     console.log('Button clicked');
//     ev.stopPropagation();

//     ev.stopImmediatePropagation();
// })

// button1.addEventListener('click', (ev) => {
//     console.log('Button clicked 2');
// });

// div1.addEventListener('click', () => {
//     console.log("div clicked");
// })

// Key events
// const searchInput = document.querySelector('#searchKeyword');
// searchInput.addEventListener('change', ev => {
//     console.log(ev.target.value);
// });
// function handler(ev) {
//     console.log(ev.type);
// }
// searchInput.addEventListener('focus', handler);
// searchInput.addEventListener('blur', handler);
// searchInput.addEventListener('cut', handler);
// searchInput.addEventListener('paste', handler);
// searchInput.addEventListener('input', (ev) => {
//     console.log(ev.target.value);
    // if (ev.target.value.length > 3) {
    //     ev.target.classList.remove('is-invalid')
    //     ev.target.classList.add('is-valid')
    // } else {
    //     ev.target.classList.remove('is-valid')
    //     ev.target.classList.add('is-invalid')
    // }
// })

// document.addEventListener('keypress', ev => {
//     // console.log(ev.type);
// })

// document.addEventListener('keyup', ev => {
//     // console.log(ev.type);
// });

// document.addEventListener('keydown', ev => {
    // console.log(ev);
    // if (ev.key === 'c' && ev.ctrlKey) {
    //     alert("2");
    // }

    // if (ev.key === 'F5') {
    //     ev.preventDefault();
    // }
// })

// scroll, resize, hashchange
// window.addEventListener('scroll', ev => {
//     console.log("Scroll");
// })
// window.addEventListener('resize', ev => {
//     console.log("resize");
// })
// window.addEventListener('hashchange', ev => {
//     console.log("hashchange");
// })
// Timers
// const timeout = setTimeout(function(){
//     console.log("setTimeout");
// }, 5000);
// clearTimeout(timeout)

// const interval = setInterval(() => {
//     console.log('SetInterval');
// }, 1000)

// clearInterval(interval);

// Debouncing
// const searchInput = document.querySelector('#searchKeyword');
// searchInput.addEventListener('input', inputChange)

// let timeout;
// function inputChange() {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//         console.log("Search for users");
//     }, 500)
// }


// Event bubling

// Event capturing
document.body.addEventListener('click', ev => {
    console.log("body clicked");
}, {capture: true})
const button = document.querySelector('button');
button.addEventListener('click', ev => {
    console.log("Button clicked");
})


// TODO App