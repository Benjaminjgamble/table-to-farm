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
      let oneProduct;
      return $http.get(`${baseUrl}/api/products/${id}`)
      .then((product) => {
        oneProduct = product.data[0]
        this.singleProductId = product.data.id
        return $http.get(`${baseUrl}/api/comments/${id}`)
      }).then((comments) => {
        oneProduct.comments = comments.data
        this.singleProduct = oneProduct
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

    this.getAllProductsWithMarkets = function () {
      this.products.forEach((product) => {
        product.markets = []
        this.farmsMarkets.forEach(farmMarket => {
          if (farmMarket.farm_id === product.farm_id) {
            this.markets.forEach(market => {
              if (market.id === farmMarket.market_id) {
                product.markets.push(market)
              }
            })
          }
        })
      })
    }
  }

})()
