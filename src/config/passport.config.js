const passport = require("passport");
const LocalStrategy = require("../services/auth/localStrategy");
const signupSchema = require("../models/signupSchema");

const initPassport = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => done(null, user._id));

    passport.deserializeUser((id, done) => signupSchema.findById(id, (err, doc) => {
        if (err) return done(err);
        return done(null, doc);
    }));

    passport.use(LocalStrategy());
};

module.exports = initPassport;
