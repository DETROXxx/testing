// script.js
window.addEventListener('load', function() {
    const textContainer = document.getElementById('text-container');
    setTimeout(function() {
        textContainer.classList.add('visible');
    }, 500); // 500 milliseconds delay
});