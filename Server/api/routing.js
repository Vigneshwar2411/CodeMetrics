var app = require('express')();
var files = require('../modals/fileModal.js');


// app.post("/api/v1/fileupload",function(req,res){
//     console.log("Inside file upload api call");
//     console.log(req.body);
//     res.json({success:"Successfully Uploaded"});
// });

app.post("/v1/fileupload",function(req,res) {
    console.log("Inside file upload api call");
    console.log(req.body);
    var fileData = new files(req.body);
    fileData.save(function (err,data) {
      if (err) {
        console.error(err);
        res.response(500).send("Error while saving");
      }
      res.json({success:"Successfully Uploaded"});
    });
});

app.get("/getproject/:proName/:version",function (req,res) {
  var proName =req.params.proName;
  var version =req.params.version;
  files.find({projectName:proName,projectVersion:version},function (err,data) {
        if (err) {
          console.error(err);
          res.response(500).send("Error while retreiveing data...");
        }
        else{
          console.log("Inside get Specific project");
          res.json(data);
        }
      });
});

app.get("/getallprojects",function (req,res) {
  files.aggregate(
    { $group: { _id: { projectName: "$projectName", projectVersion: "$projectVersion" } } },
    function (err,data) {
    if (err) {
      console.error(err);
      res.response(500).send("Error while retreiveing data...");
    }
    else{
      console.log("Inside get all projects");
      res.json(data);
    }
  })

})

module.exports = app;
