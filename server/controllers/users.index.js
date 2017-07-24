const users = require('../models/users.js')
const farm = require('../models/farm.js')

function getAllUsers (req, res) {
  users.getAll()
  .then((allUsers) => {
    res.json(allUsers)
  }).catch((err) => {
    console.error(err);
  })
}

function login (req, res, next) {
  let user = req.body
  users.login(user)
  .then((returnedUser) => {
    if (!returnedUser.length) {
      farm.login(user)
      .then((returnedFarmer) => {
        if(!returnedFarmer.length) {
          next({status: 404, message: 'user does not exist'})
        }
        if(returnedFarmer[0].password === user.password) {
          delete returnedFarmer[0].password
          res.json(returnedFarmer[0])
        }
      })
    }
      if(returnedUser[0].password === user.password) {
        console.log(returnedUser[0].password);
        delete returnedUser[0].password
        res.json(returnedUser[0])
      }
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

module.exports = { getAllUsers, userSignUp, login }
