'use strict';
//require express
let express = require('express');

// router is now api moddule we required from index.js exports
let router = require('./api');

//express is now held in the variable app
let app = express();

//use method of express to acess all static files in the public folder
app.use('/', express.static('public'));


//uses the use method of express to prefix /api to the router method.
app.use('/api', router);

// listen method to run a localhost on port 8080
app.listen(8080, function() {
    console.log("The server is running on port 8080!");
});
