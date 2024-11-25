// routes/index.js
const express = require('express');
const router = express.Router();

// Import routes from other files
const remoRoutes = require('./remo');
const opresRoutes = require('./opres');

// Use the imported routes
router.use('/', remoRoutes); 
router.use('/', opresRoutes);

module.exports = router;
