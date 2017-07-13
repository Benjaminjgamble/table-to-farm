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

module.exports = { getAllUsers }
