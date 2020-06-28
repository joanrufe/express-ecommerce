const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  birthday: Date
});

userSchema.methods.speak = function () {
  const greeting = this.name
    ? "Hi, name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
module.exports = model('User', userSchema);