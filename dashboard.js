const express = require('express');
const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(express.json())  


app.get('/', (req, res) => {
    try {
        console.log("Success")
        res.status(200).send("Success");
    } catch (error) {
        console.log(error)
        res.status(500).send("Failure")
    }
})

