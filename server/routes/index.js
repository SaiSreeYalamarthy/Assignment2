var express = require('express');
var router = express.Router();
require("dotenv").config();
const mongoose = require("mongoose")
const session = require("express-session")


// Creating a connection to mongoDB
const PORT= process.env.PORT || 3000;
const uri = 'mongodb://127.0.0.1:27017/databasesir'
const  options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
};
mongoose.connect(uri, options).then(() =>{
     console.log("Database connection established!");
    },
    err  => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', (req, res) => {
  res.send("Welcome to our router");
});


router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use(
    session({
        secret: "my secret key",
        saveUnintialized: true,
        resave: false,
    })
);

router.use((req, res, next)=> {
    res.locals.message= req.session.message;
    delete req.session.message;
    next();
});

router.use("", require("./routes"));
router.use("", require("./loginroute"));


module.exports = router;
