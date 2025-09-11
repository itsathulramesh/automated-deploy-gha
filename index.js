// index.js
const express = require('express');
const app = express();
const path = require('path');

// Set view engine and views directory
app.set('view engine', 'ejs'); // or 'handlebars' depending on your choice
app.set('views', path.join(__dirname, 'views')); // location of your views folder


// Route renders index.ejs with dynamic data
app.get('/', (req, res) => {
  res.render('index', { message: 'DevOps CI/CD Pipeline Learner' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
