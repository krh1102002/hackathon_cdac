const jwt = require("jsonwebtoken");

const config = require("../utils/config");
const result = require("../utils/result");

function authorization(req, res, next) {
  if (req.url == "/user/signup" || req.url == "/user/login") {
    next();
  } else {
    const token = req.headers.token;
    if (token) {
      try {
        const payload = jwt.verify(token, config.secret);
        req.headers.userId = payload.userId;
        next();
      } catch (e) {
        res.send(result.createErrorResult("invalid token"));
      }
    } else {
      res.send(result.createErrorResult("token is missing"));
    }
  }
}

module.exports = authorization;
