const mongoose=require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  work: {
    type: String,
    enum:['chef','waiter','manager'],
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // optional: to avoid duplicate emails
  },
  address: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

const Person=mongoose.model('Person',personSchema);
module.exports = Person;

