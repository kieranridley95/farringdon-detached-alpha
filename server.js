const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/photos', (req, res) => {
    const imagesDir = path.join(__dirname, 'public/images');
    fs.readdir(imagesDir, (err, files) => {
        if (err) return res.status(500).send('Error reading images');
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.json(imageFiles);
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));// JavaScript source code
