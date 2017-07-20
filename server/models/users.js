const knex = require('../../db/knex.js');

class Users {
  constructor () {
  }

  static getAll () {
    return knex('users')
  }

  static signUp (newUser) {
    return knex('users')
    .insert(newUser)
    .returning('*')
  }

  static postComment (newComment) {
    return knex('comments')
    .insert(newComment)
    .returning('*')
  }

  static login (user) {
    return knex('users')
    .where('email' , user.email)
  }

}

module.exports = Users
