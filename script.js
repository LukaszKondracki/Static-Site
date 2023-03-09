const elements = document.querySelectorAll('.move');

console.log('timer start');
elements.forEach(el => {
    setInterval(() => {

        const r = Math.random;

        el.style.top = `${r() * window.innerHeight}px`;
        el.style.left = `${r() * window.innerWidth}px`;
        el.style.rotate = `${r() * 360}deg`;
        el.style.backgroundColor = `hsl(${r() * 360}deg 255 255)`;
    
    }, 500);
});