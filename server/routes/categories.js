const express = require("express");
const pool = require("../db/mysqldb");
const result = require("../utils/result");

const router = express.Router();

// add categories
router.post("/add-category", (req, res) => {
  const { title, description } = req.body;
  const sql = `insert into categories(title,description) values(?,?)`;
  pool.query(sql, [title, description], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// get all categories
router.get("/", (req, res) => {
  const sql = `select id,title,description from categories`;
  pool.query(sql, (error, data) => {
    if (data) {
      if (data.length == 0) {
        res.send(result.createErrorResult(error));
      } else {
        res.send(result.createSuccessResult(data));
      }
    } else {
      res.send(result.createSuccessResult(error));
    }
  });
});

// edit category
router.put("/edit-category", (req, res) => {
  const { title, description, id } = req.body;
  const sql = `update categories set title=?, description=? where id=?`;
  pool.query(sql, [title, description, id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// delete categories.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `delete from categories where id=?`;
  pool.query(sql, [id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});
module.exports = router;
