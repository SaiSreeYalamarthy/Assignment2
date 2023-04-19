const exp = require("express");
const rout = exp.Router();
const User = require('../models/users');
const multer = require("multer");
const mon = require('mongoose');
const fs = require('fs');
const cors = require('cors');
rout.use(cors({ origin: true }));
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./imageupload");
    },
    filename: function(req, file, cb){
        cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

rout.get("/invt",async(req, res) =>{
    try{
        const invt = await User.find({});
        res.status(200).send(invt)
    }catch(error){
        res.status(500).send(error)
    }
} );

var upload = multer({
    storage: storage,
}).single("image");


rout.post("/additem", async(req, res)=>{
    try{
    const {name, brand, quantity, priceperunit } = req.body;

    const newUser = new User({name, brand, quantity, priceperunit});
    await newUser.save();
    return res.json({message: "Item added "})
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Error creating '})
    }
});
rout.delete("/delete/:id", async(req, res)=>{
    try{
    const invt = await User.findByIdAndDelete(req.params.id);
    if(!invt){
        return res.status(404).send();
    }
    res.send(invt);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Error deleting'})
    }
});


module.exports = rout;
