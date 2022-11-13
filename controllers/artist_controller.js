const express = require('express');
const router = express.Router();
const artists= require('..models/artist_model');


router.get('/', (req, res)=>{
    res.render('artist.ejs', {artists: allArtists});
});

router.get('/:artistId', (req, res) => {
    return res.render('artwork', {artworks: foundArtist});
});

module.exports = router;
