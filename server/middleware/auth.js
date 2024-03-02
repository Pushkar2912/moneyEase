const jwt = require('jsonwebtoken')

exports.verify = (req, res, next) => {
    const { token } = req.headers
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = user
    } catch (error) {
        return res.status(400).json({
            message: "User not verified"
        })
    }
    next();
}