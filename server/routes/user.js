const cryptoJs = require("crypto-js");
const express = require("express");
const jwt = require("jsonwebtoken");

const pool = require("../db/mysqldb");
const result = require("../utils/result");
const config = require("../utils/config");

const router = express.Router();

// signup request
router.post("/signup", (req, res) => {
  const { full_name, email, password, phone_no } = req.body;
  const encryptedPassword = String(cryptoJs.SHA256(password));
  const sql = `insert into user(full_name,email,password,phone_no) values(?,?,?,?)`;
  pool.query(
    sql,
    [full_name, email, encryptedPassword, phone_no],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

// login request
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = String(cryptoJs.SHA256(password));
  const sql = `select * from user where email=? and password=?`;
  pool.query(sql, [email, encryptedPassword], (error, data) => {
    if (data) {
      if (data.length == 0) {
        res.send(result.createErrorResult(error));
      } else {
        const payload = {
          userId: data[0].id,
        };
        const token = jwt.sign(payload, config.secret);

        const body = {
          token: token,
          name: data[0].full_name,
        };
        res.send(result.createSuccessResult(body));
      }
    } else {
      res.send(result.createErrorResult(error));
    }
  });
});

// get all users
router.get("/", (req, res) => {
  const sql = `select * from user`;
  pool.query(sql, (error, data) => {
    if (data) {
      if (data.length == 0) {
        res.send(result.createErrorResult(error));
      } else {
        res.send(result.createSuccessResult(data));
      }
    } else {
      res.send(result.createErrorResult(error));
    }
  });
});

module.exports = router;
