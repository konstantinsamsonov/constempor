const elements = document.querySelectorAll('.my-element');
const shadowRoots = Array.from(elements).map(e => e.shadowRoot);
console.log(shadowRoots);
