console.log('in app.config');

(function() {
  angular.module('app').config(config)
  config.$inject = ['$stateProvider', '$locationProvider']
  function config($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true)
    $stateProvider

    .state({
      name: 'products',
      url: '/products',
      component: 'products'
    })

    .state({
      name: 'landing',
      url: '/',
      component: 'landing'
    })

  }
})()
