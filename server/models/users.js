// Importing the libraries
const mon = require('mongoose');

// Creating Schema for inventory  page
const schem = new mon.Schema({
    name:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    priceperunit:{
        type: Number,
        required: true,
    },
});
module.exports = mon.model("database",schem);
