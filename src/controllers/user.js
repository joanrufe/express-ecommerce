const User = require('../models/User')

module.exports = {
  create: async (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        birthday: req.body.birthday
      });
      await user.save();
      res.send(user);
    } catch(err) {
      res.send({err});
    }
  },
  getAll: async (req, res) => {
    const users = await User.find();
    res.send(users);
  },
  getById: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id })
      res.send(user)
    } catch(err) {
      res.send({err});
    }
  },
  delete: async (req, res) => {
    await User.deleteOne({ _id: req.params.id})
  },
  update: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id })
  
      if (req.body.title) {
        user.title = req.body.title
      }
  
      if (req.body.content) {
        user.content = req.body.content
      }
  
      await user.save()
      res.send(user)
    } catch {
      res.status(404)
      res.send({ error: "User doesn't exist!" })
    }
  }
}