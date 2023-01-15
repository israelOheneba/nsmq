const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const link = document.getElementById('link');
const videos = document.getElementsByClassName('videos');

if (link) {
    link.addEventListener('click', () => {
        videos.classList.add('videos');
    })
} 

const sub = document.getElementById('sub');
if (sub) {
    sub.addEventListener('click', () => {
        window.alert("Your message is submitted");

    })
}
