const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3333;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('views/images')); 
app.use(require('./controllers/config'));

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });