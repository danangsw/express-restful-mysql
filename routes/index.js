const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.MY_SECRET);

  res.render('index',
      {title: 'Express', content: 'Express with pug view engine! Nodemon!'});
});

module.exports = router;
