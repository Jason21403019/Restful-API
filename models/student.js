const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema();
studentSchema.add({
  name: {
    type: String,
    require: true,
    minlength: 2,
  },
  age: {
    type: Number,
    default: 18,
    max: [80, "too old...."],
    min: [18, "太年輕。。。。。"],
  },
  scholarship: {
    merit: {
      type: Number,
      max: [5000, "too much student scholarship merit...."],
      default: 0,
    },
    other: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
