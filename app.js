// app.js
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const routes = require('./routes'); // Import combined routes from index.js

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

// Setup views and view engine
app.set('views', [path.join(__dirname, 'views/remo'), path.join(__dirname, 'views/opres')]);
app.set('view engine', 'ejs');

// Log incoming requests
// app.use((req, res, next) => {
//     console.log(`Incoming request: ${req.method} ${req.originalUrl}`);
//     next();
// });

// Use the combined routes
app.use('/', routes); // Use all routes from the routes folder

app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});