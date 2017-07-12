(function() {
  'use strict';

  angular.module('app')
  .service('productsService', productsService)

  productsService.$inject = ['API_BASE_URL','$http']

  function productsService (baseUrl, $http) {

     this.getAllProducts = function () {
      return $http.get(`${baseUrl}/api/products`)
      .then((products) => {
        this.products = products.data
        return this.products
      })
    }
  }

})()
