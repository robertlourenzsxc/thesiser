// routes/remo.js
const express = require('express');
const router = express.Router();

// Route handlers
router.get('/', (req, res) => {
    res.render('login'); // Render login view
});

router.get('/option', (req, res) => {
    res.render('option'); // Render option view
});

router.get('/option/docs', (req, res) => {
    res.render('docs'); // Render docs view
});

router.get('/docs', (req, res) => {
    res.render('docs'); // Render docs view
});


router.get('/add', (req, res) => {
    res.render('add'); // Render add view
});

router.get('/docs/incoming', (req, res) => {
    res.render('incoming'); // Render incoming view
});

router.get('/docs/incoming/outgoing/pending', (req, res) => {
    res.render('pending'); // Render pending view
});

router.get('/docs/incoming/outgoing/pending/received', (req, res) => {
    res.render('received'); // Render received view
});

router.get('/docs/incoming/outgoing/pending/received/track', (req, res) => {
    res.render('track'); // Render track view
});

router.get('/docs/incoming/outgoing', (req, res) => {
    res.render('outgoing'); // Render outgoing view
});

module.exports = router;