const exp = require("express");
const rout = exp.Router();
const mon = require('mongoose');
const Users = require('../models/loginschem');

rout.get("/log",(req,res)=>{
    res.send("Home Page");

})


rout.get("/getalluser",async(req, res) =>{
    try{
        const allus = await Users.find({});
        res.status(200).send(allus)
    }catch(error){
        res.status(500).send(error)
    }
} );


rout.get("/getlogin",async(req, res) =>{
        try{
            const user = await Users.find({});
            res.status(200).send(user)
        }catch(error){
            res.status(500).send(error)
        }
    } );
rout.post("/saveuser", async(req, res)=>{
    try{
    const {name, username, password, bio } = req.body;

    const newUser = new Users({name, username, password, bio});
    await newUser.save();
    return res.json({message: "user created "})
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Error creating '})
    }
});


rout.post('/checklogin', (req, res) => {
    const { username, password } = req.body;
  
    // find a user with the given username and password
    Users.findOne({ username: username, password: password })
      .then(user => {
        if (user) {
          res.send({ success: true });
        } else {
          res.send({ success: false });
        }
      })
      .catch(error => {
        res.send({ success: false });
      });
  });
  



module.exports = rout;