'use strict';
//require express
let http = require('http');
//require express
let express = require('express');
//express is now held in the variable app
let app = express();
//require the body parser package
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let morgan = require('morgan')
let passport = require('passport')
let cors = require('cors')
let router = require('./src/api/')
//let routes = require('./app/routes')


require('./config/passport')(passport); // pass passport for configuration
const ENV = require('./config/env')[process.env.NODE_ENV || 'development']

//mongo is a singleton we dont do anything with the module but it is required.
require('./src/database');

//requiring seed data
require('./src/seed');

// Set a static folder used by express. This folder contains our Angular application
app.use('/', express.static(__dirname + '/public'));


// Set logs
app.use(morgan('combined'));
// Set parser to get the body data request
app.use(bodyParser.urlencoded({
    'extended': 'true'
}))
app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

// Override HTTP methods to support DELETE PUT
app.use(methodOverride('X-HTTP-Method-Override'))

//CORS
app.use(cors())

// Initialize passport used by express for authentication
app.use(passport.initialize())



//uses the use method of express to prefix /api to the router method.
app.use('/api', router(passport));

//Load all api routes
//app.use('/api', routes(passport));



// listen method to run a localhost on port 8080
let port = process.env.PORT || 8080
//let server = require('./app.js')



exports.startServer = (port, path, callback) => {
    // Create server
    let server = http.Server(app);
    // Listening
    port = process.env.PORT || port
    server.listen(port, callback)
    console.log(`server listening on port ${port}`)

    //Intercept when application killed
    process.on('SIGINT', function() {
        console.log("\nStopping...")
        process.exit()
    });
  }
