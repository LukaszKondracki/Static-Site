const elements = document.querySelectorAll('.move');
const btn = document.getElementById('add');

const r = Math.random;
const [w, h] = [window.innerWidth, window.innerHeight]

const mover = (el) => {
    el.style.transform = `
        translate(${r() * w}px, ${r() * h}px) 
        rotate(${r() * 360}deg)
        scale(${r() + 0.5})`;
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

const numLabel = document.createElement('span');
numLabel.innerText = '+1';
numLabel.classList.add('num-label');
const showNum = () => {
    const lbl = numLabel.cloneNode(true);
    btn.prepend(lbl);
    setTimeout(() => lbl.remove(), 1000);
};
btn.addEventListener('click', () => {
    const newEl = elements[0].cloneNode(true);
    elements[0].insertAdjacentElement('afterend', newEl);
    showNum();
    run();
});

run();