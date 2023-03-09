const el = document.getElementById('move');

setInterval(() => {

    el.style.top = Math.random() * window.innerHeight;
    el.style.left = Math.random() * window.innerWidth;
    el.style.rotate = Math.random() * 360;

}, 10)