const express = require('express');
const mongoose = require('mongoose');

const routes = require('./controller/itemController.js')

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('client/build'));

app.use(routes);

const mongoDBconnection = 'mongodb://localhost/ItemDB';


mongoose.Promise = global.Promise;

mongoose.connect(mongoDBconnection);

app.listen(PORT, function(){
    console.log(`app running on port ${PORT}`);
});
