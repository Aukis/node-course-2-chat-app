const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
});


//
// const hbs = require('hbs');
// const fs= require('fs');
// //helpers and partials
// hbs.registerPartials(__dirname + '/views/partials');


//middleware
// app.set('view engine','hbs');
// app.use( (req,res, next) => {
//   var now = new Date().toString();
// var log =`${now}: ${req.method} ${req.url}`;
// console.log(log);
// fs.appendFile('server.log', log + '\n', (err)=> {
//   if (err) {
//     console.log('Unable to append server.log.');
//   }
// });
//   next();
// });
 //
 // app.use((req,res,next)=> {
 //   res.render('index.html');
 // });
//
// hbs.registerHelper('getCurrentYear', () => {
//    return new Date().getFullYear()
// });
// hbs.registerHelper('screamIt', (text) => {
//   return text.toUpperCase();
// });
//
//
// app.get('/', (req,res)=>{
//   res.render('index');
// });
//
// app.get('/about', (req,res)=> {
//   res.render('about.hbs', {
//     pageTitle: 'About page'
//   });
// });
//
// app.get('/project', (req,res)=> {
//   res.render('project.hbs', {
//     pageTitle: 'Projects page'
//   });
// });
//
//
// app.get('/bad', (req,res)=> {
//   res.send({
//     errorMessage: 'Unable to handle request'
//   });
// });
