function bound$1(bounds, item) {
    // Assuming bounds is an object with properties: x, y, width, height
    // And item is an object with properties: x, y

    const withinXBounds = item.x >= bounds.x && item.x <= (bounds.x + bounds.width);
    const withinYBounds = item.y >= bounds.y && item.y <= (bounds.y + bounds.height);

    return withinXBounds && withinYBounds;
}

// Example usage:
const bounds = { x: 0, y: 0, width: 100, height: 100 };
const item = { x: 50, y: 50 };

console.log(bound$1(bounds, item));  // Should print true if item is within bounds
