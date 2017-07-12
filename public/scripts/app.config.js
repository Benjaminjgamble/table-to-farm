
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
      name: 'products',
      url: '/products',
      component: 'products'
    })

    .state({
      name: 'farm',
      url: '/farm',
      component: 'farm.landing'
    })

    .state({
      name: 'editproduct',
      url: '/farm/:id/edit',
      component: 'farm.edit'
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
