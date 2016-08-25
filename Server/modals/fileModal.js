var mongoose = require('mongoose');
var FileScheama = new mongoose.Schema({
  "projectName" : String,
  "projectVersion":String,
  "totalNoOfLines": Number,
	"totalNoOfChars": Number,
	"totalNoOfFiles": Number,
	"fileTakenOn": String,
  "files" : []
});

var schema = mongoose.model("files",FileScheama);
module.exports = schema;
