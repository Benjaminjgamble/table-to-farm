const users = require('../models/users.js')

function getAllUsers (req, res) {
  users.getAll()
  .then((allUsers) => {
    res.json(allUsers)
  }).catch((err) => {
    console.error(err);
  })
}

function userSignUp (req, res) {
  let newUser = req.body
  
  users.signUp(newUser)
  .then((user) => {
    res.json(user)
  }).catch((err) => {
    console.log(err);
  })
}

module.exports = { getAllUsers, userSignUp }
