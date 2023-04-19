// Importing the libraries
const mon = require('mongoose');


// Creating Schema for login page
const lschem = new mon.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    bio:{
        type: String,
        required: true,
    },
    
});
module.exports = mon.model("userdatabase",lschem);
