const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const routesLocalUpload = require('./controller/itemController.js');
const routesRemoteUpload = require('./controller/itemControllerRemote.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var databaseToUse = ""

if (process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));

    databaseToUse = "mongodb://warren:corvette156@ds113942.mlab.com:13942/heroku_l9vjk7jr"

    app.use(routesRemoteUpload);
}
else{
    databaseToUse = 'mongodb://localhost/ItemDB';

    app.use(routesLocalUpload);
}




const MONGODB_URI = process.env.MONGODB_URI || databaseToUse;


mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

app.listen(PORT, function(){
    console.log(`app running on port ${PORT}`);
});
