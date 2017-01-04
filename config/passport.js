'use strict'
let FacebookStrategy = require('passport-facebook').Strategy
const USER = require('../src/models/user')
const ENV = require('./env')[process.env.NODE_ENV || 'development']

module.exports = (passport) => {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        USER.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({
        clientID: ENV.facebookAuth.clientID,
        clientSecret: ENV.facebookAuth.clientSecret,
        callbackURL: ENV.facebookAuth.callbackURL,
        profileFields: ['id', 'name', 'photos', 'emails']
    }, (token, refreshToken, profile, done) => {
        // asynchronous
        process.nextTick(function() {
            USER.findOne({
                'facebook.id': profile.id
            }, (err, user) => {

                if (err)
                    return done(err);

                if (user) {
                    return done(null, user)
                } else {
                    let newUser = new USER()

                    newUser.facebook.id = profile.id
                    newUser.facebook.token = token
                    newUser.name = profile.name.givenName + ' ' + profile.name.familyName
                    newUser.email = profile.emails[0].value || ''
                    newUser.facebook.photo = profile.photos[0].value || ''

                    newUser.save((err) => {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    })
                }

            })
        })

    }))

};
