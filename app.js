var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)
const flash = require('connect-flash');

// import mongoose
const mongoose = require('mongoose');

// Connect Mongoo Local
// mongoose.connect('mongodb://127.0.0.1:27017/db_anggabadilz', err => {
//   if(err) throw err;
//   console.log('Connected to MongoDB')
// });

// Connect Mongoo Atlas
mongoose.connect('mongodb+srv://jerridwip:badilzproject@cluster0.6emcd.mongodb.net/?retryWrites=true&w=majority');

// mongodb+srv://jerridwip:badilzproject@cluster0.6emcd.mongodb.net/?retryWrites=true&w=majority

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const adminController = require('./controllers/adminController');
// router admin
const adminRouter = require('./routes/admin');
const apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(session({
  secret: 'keyboard cat',
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 900000 }
}));
app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// sb-2-admin
app.use('/sb-admin-2', express.static(path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// admin
app.use('/admin', adminRouter);
app.use('/api/v1/member', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
 