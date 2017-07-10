
(function() {
  console.log('productsService.js is connected');
  'use strict';

  angular.module('app')
  .service('productsService', productsService)

  productsService.$inject = ['API_BASE_URL','$http']

function productsService (baseUrl, $http) {
  this.products = []
   this.getAllProducts = function () {
    console.log('Inside service function');
    return $http.get(`${baseUrl}/api/products`).then((products) => {
      console.log(products);
      this.products = products.data
    })
  }

}

})()
