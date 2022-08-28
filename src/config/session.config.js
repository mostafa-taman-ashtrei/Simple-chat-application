require("dotenv").config();
const expressSession = require("express-session");
const MongoStore = require("connect-mongo");

const sessionConfig = {
    sessionAge: 1000 * 60 * 60 * 24 * 30 * 6, // 6 months
    sessionSecret: process.env.COOKIE_SECRET || 'stringforthesupersecretsessionsecretslkdfm aslfdmkaslmdf kladsm',
    cookieName: 'auth-cookie',
};


const session = expressSession({
    name: sessionConfig.cookieName,
    secret: sessionConfig.sessionSecret,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: sessionConfig.sessionAge,
        httpOnly: true,
        sameSite: 'lax', // protect against csrf
        secure: process.env.NODE_ENV === 'production',
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_CONNECTION_STRING })
});

module.exports = session;