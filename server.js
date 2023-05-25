const { readFileSync, writeFileSync } = require('fs');

// Create a new express app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const count = readFileSync('./count.txt', 'utf-8');
    console.log('count', count)

    const newCount = (parseInt(count) + 1)

    writeFileSync('./count.txt', newCount.toString());

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>N0kk3n Development</title>
        </head>
        <body>
            <h1>Welcome to my development page</h1>
            <p2>Jayden is stupid</p2>
            <p>This page has been viewed ${newCount} times!</p>
        </body>
        </html>

    `);
});

// Tell the express app to listen on port 5000
app.listen(5000, () => console.log('http://localhost:5000/'));