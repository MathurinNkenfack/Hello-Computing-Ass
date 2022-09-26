const {units} = require("../db");
const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.send(units);
})

router.get("/:id", (req, res)=>{
    var unit = units.find(l=>l.id === req.params.id);
    unit ? res.send(unit) : res.status(404).send({message:"This unit is not found"});
    
})
module.exports = router;