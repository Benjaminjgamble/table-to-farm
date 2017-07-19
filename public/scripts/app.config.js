

(function() {
  angular.module('app').config(config).run(function (productsService) {
    productsService.getAllProducts().then(function () {
    })
  })

  config.$inject = ['$stateProvider', '$locationProvider']
  function config($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true)
    $stateProvider

    .state({
      name: 'base',
      url: '/',
      redirectTo: 'main'
    })

    .state({
      name: 'markets',
      url: '/markets',
      component: 'markets.index'
    })

    .state({
      name: 'onemarket',
      url: '/markets/:id',
      component: 'markets.one'
    })

    .state({
      name: 'products',
      url: '/products',
      component: 'products'
    })

    .state({
      name: 'showproduct',
      url: '/main/:id',
      component: 'main.show'
    })

    .state({
      name: 'editproduct',
      url: '/farm/:id/edit',
      component: 'farm.edit'
    })

    .state({
      name: 'farm',
      url: '/farm',
      component: 'farm.landing'
    })

    .state({
      name: 'farmbio',
      url: '/farm/:id',
      component: 'farm.bio'
    })

    .state({
      name: 'main',
      url: '/main',
      component: 'main'
    })

    .state({
      name: 'signin',
      url: '/signin',
      component: 'signin'
    })

  }
})()
