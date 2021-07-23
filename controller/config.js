const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/home', async (req, res) => {
    res.render('home');
  });

module.exports = router;