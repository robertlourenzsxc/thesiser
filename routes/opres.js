// routes/opres.js or add to your remo.js if you handle both in one file
const express = require('express');
const router = express.Router();

router.get('/alldocs', (req, res) => {
    res.render('alldocs'); // Ensure 'alldocs.ejs' exists in the correct 'views/opres' folder
});

router.get('/alldocs/incoming', (req, res) => {
    res.render('incoming'); // Render incoming view
});

router.get('/alldocs/incoming/outgoing/pending', (req, res) => {
    res.render('pending'); // Render pending view
});

router.get('/alldocs/incoming/outgoing/pending/received', (req, res) => {
    res.render('received'); // Render received view
});

router.get('/alldocs/incoming/outgoing/pending/received/track', (req, res) => {
    res.render('track'); // Render track view
});

router.get('/alldocs/incoming/outgoing', (req, res) => {
    res.render('outgoing'); // Render outgoing view
});

module.exports = router;
