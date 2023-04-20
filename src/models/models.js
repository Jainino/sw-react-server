const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myDataSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const MyData = mongoose.model('MyData', myDataSchema);

module.exports = MyData;