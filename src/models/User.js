const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true },
  password: { type: String },
  email: { type: String, unique: true },
  verificationCode: { type: String },
  verifiedAt: { type: Date },
});

/*userSchema.methods.speak = function () {
  const greeting = this.name
    ? "Hi, name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}*/

module.exports = model('User', userSchema);