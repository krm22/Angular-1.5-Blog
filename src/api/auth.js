'use strict'
let AuthenticationController = require('../controllers/AuthenticationController')
let UsersController = require('../controllers/UsersController')

module.exports = (app, passport) => {

    let ctrl = new UsersController()
    let authentication = new AuthenticationController()

    app.post('/auth', authentication.local)

    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: 'email'
    }))

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback', authentication.facebook(passport), (req, res, next) => {
        return ctrl.authenticate(req, res, next)
    })
}
