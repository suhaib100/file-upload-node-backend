const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: Number,
    required: false,
  },
  photo:{

    type: String
  }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
