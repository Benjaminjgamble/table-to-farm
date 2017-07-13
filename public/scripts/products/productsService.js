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

    this.getAllFarms = function () {
      return $http.get(`${baseUrl}/api/farms`)
      .then((farms) => {
        this.farms = farms.data
        return this.farms
      })
    }

    this.getAllMarkets = function () {
      return $http.get(`${baseUrl}/api/markets`)
      .then((markets) => {
        this.markets = markets.data
        return this.markets
      })
    }

    this.getProductById = function (id) {
      return $http.get(`${baseUrl}/api/products/${id}`)
      .then((product) => {
        this.singleProduct = product.data
        this.singleProductId = product.data.id
        return this.singleProduct
      })
    }

    this.farmsMarketsJoin = function () {
      return $http.get(`${baseUrl}/api/farms_markets`)
      .then((farmsMarkets) => {
        this.farmsMarkets = farmsMarkets.data
        return this.farmsMarkets
      })
    }
  }

})()
