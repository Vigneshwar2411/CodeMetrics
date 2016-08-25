var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var path = require('path');
var config=require('./config/config.json');
var routing = require('./api/routing');
var formidable = require('formidable');
var util = require('util');
const mongoose = require('mongoose');
const routes = require('./api/routing.js');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true ,parameterLimit:500000}));



app.use('/', express.static(path.join(__dirname, '../')));
mongoose.connect(config.DbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection error ...!!!!!'));
db.once('open',function(){
 console.log("Connected to MongoDB successfull");
 });

 app.use('/api', routes);



// app.post("/api/v1/fileupload",function(req,res){
//     console.log("Inside file upload api call");
//     console.log("Form data received:"+req.body);
//     var form = new formidable.IncomingForm();
//     form.on('file',function(name,file){
//       console.log("inside file");
//       console.log(file);
//       // fs.readFile(file, function(err, data){
//       //     // Do something with the data (which holds the file information)
//       //     console.log("inside fs.readfile",data);
//       //   });
//     })
//     form.parse(req,function(err,fields,files){
//         console.log("After parsing");
//     });
//
// //     form.parse(req, function(err, fields, files) {
// //       console.log("inside form parse");
// //   res.writeHead(200, {'content-type': 'text/plain'});
// //   res.write('received upload:\n\n');
// //   res.end(util.inspect({fields: fields, files: files}));
// // });
//
//
// });

var port = config.port;

app.listen(port, function(){
  console.log("Server started at port :"+port);
});
