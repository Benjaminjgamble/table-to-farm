console.log('in app.module');

(function(){
  'use strict'
  angular.module('app', ['ui.router'])
  // .constant('API_BASE_URL', '<heroku-url>')
  .constant('API_BASE_URL', 'http://localhost:3000')
})()
