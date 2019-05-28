var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/user');

// Configure Passport
passport.use(new GoogleStrategy({
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_SECRET,
   callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
   // A user has logged in!
   User.findOne({ 'googleId': profile.id }, (err, user) => {
      if (err) return cb(err);
      if (user) {
         if(!user.avatar) {
            user.avatar = profile.photos[0].value;
            user.save((err) => {
               return cb(null, user);
            });
         } else {
            return cb(null, user);
         }
      } else {
         // That user is a new user!
         var newUser = new User({
            userName: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
         });
         newUser.save((err) => {
            if (err) return cb(err);
            return cb(null, newUser);
         });
      }
   });
}
));

passport.serializeUser((user, done) => {
   done(null, user.id);
});

passport.deserializeUser((id, done) => {
   User.findById(id, (err, user) => {
      done(err, user);
   });
});
