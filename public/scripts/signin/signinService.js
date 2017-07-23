(function() {
  'use strict';
  
  angular.module('app')
  .service('signinService', signinService)

  signinService.$inject = ['API_BASE_URL','$http']

  function signinService (baseUrl, $http) {

    this.userAuth = () => {
      return $http.get(`/api/users`)
      .then((users) => {
        this.users = users.data
        return this.users
      })
    }

    this.checkUserAuth = (user) => {
      return $http.post('/api/login', user)
      .then((loggedInUser) => {
        this.loggedInUser = loggedInUser.data
        console.log('logged in user', this.loggedInUser);
        return this.loggedInUser
      })
    }

  }
})()
