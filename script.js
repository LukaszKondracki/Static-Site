const el = document.getElementById('move');


console.log('timer start');
setInterval(() => {

    el.style.top = `${Math.random() * window.innerHeight}px`;
    el.style.left = `${Math.random() * window.innerWidth}px`;
    el.style.rotate = `${Math.random() * 360}deg`;

}, 200);