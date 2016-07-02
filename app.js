var express = require('express');
var path = require('path');
var debug = require('debug');

var routes = require('./routes/index');

var Sequelize = require('sequelize');
var models = require('./models');

var port = 3000;

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(path.join(__dirname, '/public')));

// routes setup
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// db setup
models.sequelize.sync().then(function () {
  models.Course.create({
    title: "Mathematical Foundations of Computing",
    catalog_id: "CS 103",
    description: "Mathematical foundations required for computer science, including propositional predicate logic, induction, sets, functions, and relations. Formal language theory, including regular expressions, grammars, finite automata, Turing machines, and NP-completeness. Mathematical rigor, proof techniques, and applications. Prerequisite: 106A or equivalent.",
    term: "AUT1617"
  });
});
  
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
