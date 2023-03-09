const elements = document.querySelectorAll('.move');
const btn = document.getElementById('add');

const r = Math.random;
const mover = (e) => {

    e.style.top = `${r() * window.innerHeight}px`;
    e.style.left = `${r() * window.innerWidth}px`;
    e.style.rotate = `${r() * 360}deg`;
    e.style.backgroundColor = `hsl(${r() * 360}, 100%, 50%)`;

};
const interval = 500;

console.log('timer start');
elements.forEach(el => {
    setInterval(() => mover(el), interval);
});

btn.addEventListener('click', () => {
    const newEl = el.cloneNode(true);
    setInterval(() => mover(newEl), interval);
});