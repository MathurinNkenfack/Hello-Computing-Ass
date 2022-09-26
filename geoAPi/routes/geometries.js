const {geometries} = require("../db");
const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.send(geometries);
})

router.get("/:id", (req, res)=>{
    var geometry = geometries.find(g=>g.id === req.params.id);
    geometry ? res.send(geometry) : res.status(404).send({message:"This Geometry is not found"});
    
})
module.exports = router;