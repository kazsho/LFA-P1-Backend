const express = require('express');

const cors = require('cors');
// const artistsData = require("./data/artists.json");

// Import static mock data for Picasso
const picassoData = require('./data/artist-bios/pablo-picasso.json');

const app = express();
app.use(cors());
app.use(express.json())


/* 
    Endpoint methods
*/

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.get(
    '/artist-bio',
    (req, res) => {
        // Return static mock data for Picasso
        res.send(picassoData);
    }
)

app.get('/painting-recognition', (req, res) => {
    // Get all game data
    const data = require('./data/painting-recognition/pablo-picasso.json');

    // Check the 'round' key in the query string corresponds to available game data 
    if (data[(Number(req.query['round']) - 1)] !== undefined) {
        // Return the game data for this round 
        res.send(data[(Number(req.query['round']) - 1)]);
    } else {
        res.status(404).send({
            message: "Game data for the requested round number was not found."
        });
    }
});

module.exports = app;