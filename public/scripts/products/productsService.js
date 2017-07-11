
(function() {
  console.log('in productsService.js');
  'use strict';

  angular.module('app')
  .service('productsService', productsService)

  productsService.$inject = ['API_BASE_URL','$http']

function productsService (baseUrl, $http) {

  // this.products = []
  // this.farmsProducts = []

   this.getAllProducts = function () {
    return $http.get(`${baseUrl}/api/products`).then((products) => {
      console.log('getAllProducts:', products);
      this.products = products.data
    })
  }

  this.getFarmsProductsJoin = function () {
   console.log('getFarmsProductsJoin');
   return $http.get(`${baseUrl}/api/farm`).then((farmsProducts) => {
     this.farmsProducts = farmsProducts.data
     return farmsProducts.data
     console.log('getFarmsProductsJoin farmsProducts:', farmsProducts);
   })
 }

}

})()
