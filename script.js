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

let handler = 0;
const run = () => {
    clearInterval(handler);
    const elements = document.querySelectorAll('.move');
    handler = setInterval(() => {
        elements.forEach(mover);
    }, interval);
}

btn.addEventListener('click', () => {
    const newEl = elements[0].cloneNode(true);
    elements[0].insertAdjacentElement('afterend', newEl);
    run();
});

run();