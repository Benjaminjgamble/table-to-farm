const users = require('../models/users.js')

function getAllUsers (req, res) {
  users.getAll()
  .then((allUsers) => {
    console.log('server: allUsers', allUsers);
    res.json(allUsers)
  }).catch((err) => {
    console.error(err);
  })
}

function userSignUp (req, res) {
  console.log('in controller', req.body);
  let newUser = req.body
  users.signUp(newUser)
  .then((user) => {
    res.json(user)
  }).catch((err) => {
    console.log(err);
  })
}

module.exports = { getAllUsers, userSignUp }
