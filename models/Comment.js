var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    title: String,
    body: String
});

var Comment = mongoose.model("Note", commentSchema);

module.exports = Comment;