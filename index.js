var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
const port = 3000;

const characterRoute = require("./src/routes/charactes");
const movieRoute = require("./src/routes/movies");
const genderRoute = require("./src/routes/gender");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use('/', characterRoute);
app.use('/', genderRoute);
app.use('/', movieRoute);

app.get('/ping', (req, res) => {
  res.send('Watch out where u looking at!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
