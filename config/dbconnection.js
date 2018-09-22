const mongoose = require('mongoose');
const dbString = require('./keys').mongoURI;
// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
connectionString = 'mongodb://localhost/devconnecter';
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(function () {
        console.log("MongoDB Connected");
    })
    .catch(function (err) {
        console.log(err);
    });
