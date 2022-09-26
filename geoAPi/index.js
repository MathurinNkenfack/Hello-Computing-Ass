require("dotenv/config")
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: "http://localhost:4200"
}));
app.use(express.json());


app.get('/', (req, res) =>{
    res.send("Welcome to the GeoKids API.");
});

// Routes
const geometriesRouter = require("./routes/geometries"); 
const unitsRouter = require("./routes/units"); 


app.use('/api/geometries', geometriesRouter); 
app.use('/api/units', unitsRouter); 


const port = process.env.PORT_N || 3009;
app.listen(port, () => console.log(`Listening on port ${port}...`));
