var should = require("chai").should(),
supertest = require('supertest'),
app = require('../Server/server.js');

var url = supertest("http://localhost:8009");
it("Upload file and return json", function(done){
  var fileData={
  "projectName": "node-demo-app",
  "projectVersion": "v2.1.0",
  "totalNoOfLines": 35635,
  "totalNoOfChars": 1186787,
  "totalNoOfFiles": 112,
  "fileTakenOn": "2016-08-16 12:16:46.5583352 +0530 IST",
  "FileName": "node_modules\\accepts\\index.js",
  "LineCount": 232,
  "CharCount": 4963,
  "Functions": [
    "function Accepts(req) ",
    "Accepts.prototype.types = function (types_) ",
    "Accepts.prototype.encodings = function (encodings_) ",
    "Accepts.prototype.charsets = function (charsets_) ",
    "Accepts.prototype.languages = function (languages_) ",
    "function extToMime(type) ",
    "function validMime(type) "
  ],
  "Comments": [
    "/*!",
    "-----------------------------------",
    "/**",
    " * Module dependencies.",
    "-----------------------------------",
    "/**",
    " * Module exports.",
    "-----------------------------------",
    "/**",
    " * Create a new Accepts object for the given req.",
    "-----------------------------------",
    "/**",
    " * Check if the given `type(s)` is acceptable, returning",
    "-----------------------------------",
    " *     // Accept: text/html",
    " *     this.types('html');",
    "-----------------------------------",
    " *     // => \"html\"",
    " *",
    "-----------------------------------",
    " *     // Accept: text/*, application/json",
    " *     this.types('html');",
    "-----------------------------------",
    " *     // => \"html\"",
    " *     this.types('text/html');",
    "-----------------------------------",
    " *     // => \"text/html\"",
    " *     this.types('json', 'text');",
    "-----------------------------------",
    " *     // => \"json\"",
    " *     this.types('application/json');",
    "-----------------------------------",
    " *     // => \"application/json\"",
    " *",
    "-----------------------------------",
    " *     // Accept: text/*, application/json",
    " *     this.types('image/png');",
    "-----------------------------------",
    " *     // => undefined",
    " *",
    "-----------------------------------",
    " *     // Accept: text/*;q=.5, application/json",
    " *     this.types(['html', 'json']);",
    "-----------------------------------",
    " *     // => \"json\"",
    " *",
    "-----------------------------------",
    "  // support flattened arguments",
    "  if (types && !Array.isArray(types)) ",
    "-----------------------------------",
    "  // no types, return all requested types",
    "  if (!types || types.length === 0) ",
    "-----------------------------------",
    "/**",
    " * Return accepted encodings or best fit based on `encodings`.",
    "-----------------------------------",
    "  // support flattened arguments",
    "  if (encodings && !Array.isArray(encodings)) ",
    "-----------------------------------",
    "  // no encodings, return all requested encodings",
    "  if (!encodings || encodings.length === 0) ",
    "-----------------------------------",
    "/**",
    " * Return accepted charsets or best fit based on `charsets`.",
    "-----------------------------------",
    "  // support flattened arguments",
    "  if (charsets && !Array.isArray(charsets)) ",
    "-----------------------------------",
    "  // no charsets, return all requested charsets",
    "  if (!charsets || charsets.length === 0) ",
    "-----------------------------------",
    "/**",
    " * Return accepted languages or best fit based on `langs`.",
    "-----------------------------------",
    "  // support flattened arguments",
    "  if (languages && !Array.isArray(languages)) ",
    "-----------------------------------",
    "  // no languages, return all requested languages",
    "  if (!languages || languages.length === 0) ",
    "-----------------------------------",
    "/**",
    " * Convert extnames to mime.",
    "-----------------------------------",
    "/**",
    " * Check if mime is valid.",
    "-----------------------------------"
]
};
    url
         .post("/api/v1/fileupload")
         .send(fileData)
         .expect(200)
         .end(function(err,res){
           //console.log(res.json);
           res.body.success.should.be.equal('Successfully Uploaded');
           done();
         });
});
describe("Testing the routes", function(err){

  it("should pass and status code will be 304", function(done){
    var projectName='node-demo-app';
    var projectVersion='v2.1.0';
      url
           .get("/api/getproject/"+projectName+"/"+projectVersion)
           .expect(200)
           .end(function(err,res){
             should.not.exist(err);
            var jsonData =res.body;
            //console.log(jsonData);
            var code = jsonData[1];
            code.projectName.should.be.equal(projectName);
            code.projectVersion.should.be.equal(projectVersion);
             done();
           });
  });
  it("should pass and return all projects from db", function(done){
      url
           .get("/api/getallprojects")
           .expect(200)
           .end(function(err,res){
             should.not.exist(err);
             var jsonData =res.body;
             //console.log(jsonData);
             if(jsonData.length <= 0){
                console.log('json data does not exist');
             }else{
               console.log('json data found');
               var code = jsonData[1];
               //console.log(jsonData[1]);
               code._id.should.have.property("projectName");
             }
              done();
           });
  });
});
