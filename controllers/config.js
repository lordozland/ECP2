const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/home', async (req, res) => {
    res.render('home');
});

router.get('/life', async (req, res) => {
  res.render('life');
});

router.get('/design', async (req, res) => {
  res.render('design');
});

router.get('/company', async (req, res) => {
  res.render('company');
});

module.exports = router;