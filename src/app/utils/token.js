const jwt = require('jsonwebtoken');
const Config = require('./../../config/config.js');

function createToken(user) {
  const scopes = user.role;
  // Sign the JWT
  return jwt.sign({
      id: user.serial,
      user_name: user.email,
      scope: scopes
    },
    Config.secretkey,
    { algorithm: 'HS256', expiresIn: "48h" }
   );
}
module.exports = createToken;
