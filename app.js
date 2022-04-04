var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var pool = require('./models/db');

var homeRouter = require('./routes/home');
var nosotrosRouter  = require('./routes/nosotros');
var serviciosRouter = require('./routes/servicios');
var galeriaRouter = require('./routes/galeria');
var novedadesRouter = require('./routes/novedades');
var contactoRouter = require('./routes/contacto');
var usersRouter = require('./routes/users');
const { dirname } = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
res.render('home',
{ title: 'Chalten Destinos',
  isHome:true
});
});

app.use('/home', homeRouter);
app.use('/nosotros',nosotrosRouter);
app.use('/servicios',serviciosRouter);
app.use('/galeria',galeriaRouter);
app.use('/novedades',novedadesRouter);
app.use('/contacto',contactoRouter);
app.use('/users', usersRouter);

//select
pool.query('select * from usuarios').then(function(resultados){
  console.log(resultados)
});

//insert
/*var obj = {
  nombre_usuario: 'JuliaBlinder10',
  contraseña_usuario: '1234',
  email: 'JuliB1978@email.com'
}

pool.query('insert into usuarios set ?',[obj]).then(function(resultados){
  console.log(resultados)
});*/

//update
/*var obj ={
  nombre_usuario: 'CynthiaZap',
  contraseña_usuario: '1234',
  email: 'cynthiazapata@email.com'
};

var id = 3;
pool.query('update usuarios set ? where id_usuario = ?',[obj,id]).then(function(resultados){
console.log(resultados);
});*/

//delete
/*var id = 1;

pool.query('delete from usuarios where id_usuario = ?',[id]).then(function(resultados){
  console.log(resultados);
});*/

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
