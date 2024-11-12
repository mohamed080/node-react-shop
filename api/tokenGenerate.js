var jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id} , process.env.JWTSECRECT, {
        expiresIn: "30d"
    })
}

module.exports = generateToken;