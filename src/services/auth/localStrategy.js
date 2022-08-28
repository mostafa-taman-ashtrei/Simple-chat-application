const { compare } = require("bcrypt");
const signupSchema = require("../../models/signupSchema");
const Strategy = require('passport-local').Strategy;

const LocalStrategy = () => new Strategy(
    { usernameField: 'email', session: true, passReqToCallback: true },
    async (_, email, password, cb) => {
        const user = await signupSchema.findOne({ email });
        if (!user) return cb(null, false, { message: 'Invalid Credentials' });

        const passwordMatch = await compare(password, String(user.password));
        if (!passwordMatch) return cb(null, false, { message: 'Invalid Credentials' });

        user.password = '';
        return cb(null, user);
    });

module.exports = LocalStrategy;
