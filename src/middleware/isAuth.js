const isAuth = async (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ e: 'This is a protected route & you are unauthenticated' });
};

module.exports = isAuth;