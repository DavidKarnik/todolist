const jwt = require('jsonwebtoken');

// Middleware pro kontrolu JWT
const verifyToken = (req, res, next) => {
    // const token = req.headers['authorization'];
    const token = req.cookies.token;
    if (!token) return res.status(401).json({message: 'Unauthorized'});

    jwt.verify(token, process.env.KEY, (err, user) => {
        if (err) return res.status(403).json({message: 'Forbidden'});
        req.user = user;
        next();
    });
};

module.exports = verifyToken;