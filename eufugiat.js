document.addEventListener('DOMContentLoaded', () => {
    const mapContentDiv = document.querySelector('.map-content');
    console.log('Map content div loaded:', mapContentDiv);

    // Example of adding dynamic content
    const dynamicMessage = document.createElement('p');
    dynamicMessage.textContent = 'Additional dynamic content can be added here.';
    mapContentDiv.appendChild(dynamicMessage);
});
