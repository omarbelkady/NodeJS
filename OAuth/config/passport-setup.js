const passport = require('passport');
//google strategy
const GoogleStrategy = require('passport-google-oauth20');
const mykeys = require('./keys');

//telling passport I want the google strategy
/*
passport.use(
    new strategyYouWillUse({
    //options for strategy
    }), callbackFunc
)
*/

passport.use(
    new GoogleStrategy({
        //we place the client id and secret here
        clientID: mykeys.google.clientID,
        clientSecret: mykeys.google.clientSecret
    }),()=>{

    })
