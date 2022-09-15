'use strict'

let slider = document.getElementById('slide');
window.addEventListener('mousemove', e => {
    let x = e.clientX;
    slider.style.left = x+'px';
})