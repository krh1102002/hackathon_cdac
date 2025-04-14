const express = require("express");
const pool = require("../db/mysqldb");
const router = express.Router();
const result = require("../utils/result");

// adding the blogs
router.post("/add-blog", (req, res) => {
  const { title, contents, category_id } = req.body;
  const sql = `insert into blogs(title,contents,user_id,category_id) values(?,?,?,?)`;
  pool.query(
    sql,
    [title, contents, req.headers.userId, category_id],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

// get all blogs
router.get("/all", (req, res) => {
  const sql = `select b.id,b.title,b.contents,c.title as "CategoryTitle" from blogs b,categories c where b.category_id=c.id`;
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

// user-specific blogs
router.get("/user", (req, res) => {
  const sql = `select b.id,b.title,b.contents,c.title as "Category Title" from user u,blogs b,categories c where u.id=? and u.id=b.user_id and b.category_id=c.id`;
  pool.query(sql, [req.headers.userId], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// editing the blogs
router.put("/edit-blog", (req, res) => {
  const { title, contents, category_id, id } = req.body;
  const sql = `update blogs set title=?,contents=?, category_id=? where user_id=? and id=?`;
  pool.query(
    sql,
    [title, contents, category_id, req.headers.userId, id],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

// delete the blogs
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `delete from blogs where user_id=? and id=?`;
  pool.query(sql, [req.headers.userId, id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

module.exports = router;
