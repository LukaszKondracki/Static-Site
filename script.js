const el = document.getElementById('move');


console.log('timer start');
setInterval(() => {

    el.style.top = Math.random() * window.innerHeight;
    el.style.left = Math.random() * window.innerWidth;
    el.style.rotate = Math.random() * 360;

}, 10);