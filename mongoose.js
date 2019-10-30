const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MongooseSchema = new Schema({
  category: String,
  description: String
});

const Mongoose = mongoose.model("mongoose", MongooseSchema);

module.exports = Mongoose;