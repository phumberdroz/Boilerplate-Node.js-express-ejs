var express = require('express');
var router = express.Router({
    mergeParams: true
});

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/1", function(req, res) {
  res.render("index1");
});
module.exports = router;
