const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const cors = require('cors'); 
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());

const uri = "mongodb://localhost:27017/Siddu";

mongoose.Promise = global.Promise;

mongoose.connect(uri, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/api/one', require('./api/server-one/index'));


module.exports = app;