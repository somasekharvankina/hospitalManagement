var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  practiceId: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  practiceLocation: {
    type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true
  },
  practiceLocation: {
    type: String,
    required: true
  }


});

module.exports = mongoose.model('Book', BookSchema);
