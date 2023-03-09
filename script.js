const elements = document.querySelectorAll('.move');

const r = Math.random;

console.log('timer start');
elements.forEach(el => {
    setInterval(() => {

        el.style.top = `${r() * window.innerHeight}px`;
        el.style.left = `${r() * window.innerWidth}px`;
        el.style.rotate = `${r() * 360}deg`;
        el.style.backgroundColor = `hsl(${r() * 360}, 100%, 100%)`;
    
    }, 500);
});