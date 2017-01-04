

module.exports = {
    "development": {
        db: process.env.MONGODB_URI ||  'mongodb://localhost:27017/mean-blog',
        token : process.env.SECRET_TOKEN || 'secretToken',
        facebookAuth: {
            clientID: process.env.FACEBOOK_ID || require('../config/dev').facebookAuth.clientID, // your App ID
            clientSecret: process.env.FACEBOOK_SECRET || require('../config/dev').facebookAuth.clientSecret, // your App Secret
            callbackURL: process.env.FACEBOOK_CALLBACK || require('../config/dev').facebookAuth.callbackURL
        }
    },
    "production": {
        db: process.env.MONGODB_URI ||  'mongodb://localhost:27017/mean-blog',
        token : process.env.SECRET_TOKEN || "secretToken",
        facebookAuth: {
            clientSecret: process.env.FACEBOOK_SECRET, // your App Secret
            callbackURL: process.env.FACEBOOK_CALLBACK
        }
    }
}
