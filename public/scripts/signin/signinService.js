(function() {
  'use strict';

  angular.module('app')
  .service('signinService', signinService)

  signinService.$inject = ['API_BASE_URL','$http']

  function signinService (baseUrl, $http) {

    this.userAuth = () => {
      console.log('in signin service');
      this.users = {
        name: 'dummy user',
        is_seller: false
      }
      return this.users
      /* TODO actaully make this work
      return $http.get(`/api/users`)
      .then((users) => {
        console.log(users);
        this.users = users.data
        return this.users
      })
      */
    }
    this.getUser() {
      return this.users
    }
  }
})()
