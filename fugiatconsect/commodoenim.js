const fs = require('fs');

// Synchronous file read
const content = fs.readFileSync('path/to/your/file.txt', 'utf8');
console.log(content);

// Asynchronous file read
fs.readFile('path/to/your/file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
