const elements = document.querySelectorAll('.move');
const btn = document.getElementById('add');

const r = Math.random;
const mover = (el) => {

    el.style.top = `${r() * window.innerHeight}px`;
    el.style.left = `${r() * window.innerWidth}px`;
    el.style.rotate = `${r() * 360}deg`;
    el.style.backgroundColor = `hsl(${r() * 360}, 100%, 50%)`;

};
const interval = 500;

console.log('timer start');
elements.forEach(el => {
    setInterval(() => mover(el), interval);
});

btn.addEventListener('click', () => {
    const newEl = elements[0].cloneNode(true);
    elements[0].insertAdjacentElement('afterend', newEl);
    setInterval(() => mover(newEl), interval);
});