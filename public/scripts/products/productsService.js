(function() {
  'use strict';

  angular.module('app')
  .service('productsService', productsService)

  productsService.$inject = ['API_BASE_URL','$http']

  function productsService (baseUrl, $http) {

     this.getAllProducts = () => {
       console.log(baseUrl);
      return $http.get(`/api/products`)
      .then((products) => {
        this.products = products.data
        return this.products
      })
    }

    this.getAllFarms = () => {
      return $http.get(`/api/farms`)
      .then((farms) => {
        this.farms = farms.data
        return this.farms
      })
    }

    this.getAllMarkets = () => {
      return $http.get(`/api/markets`)
      .then((markets) => {
        this.markets = markets.data
        return this.markets
      })
    }

    this.getProductById = (id) => {
      let oneProduct;
      return $http.get(`/api/products/${id}`)
      .then((product) => {
        oneProduct = product.data[0]
        this.singleProductId = product.data.id
        return $http.get(`/api/comments/${id}`)
      }).then((comments) => {
        oneProduct.comments = comments.data
        this.singleProduct = oneProduct
        return this.singleProduct
      })
    }

    this.farmsMarketsJoin = () => {
      return $http.get(`/api/farms_markets`)
      .then((farmsMarkets) => {
        this.farmsMarkets = farmsMarkets.data
        return this.farmsMarkets
      })
    }

    this.getAllProductsWithMarkets = () => {
      this.products.forEach((product) => {
        product.markets = []

        this.farmsMarkets.forEach(farmMarket => {
          if (farmMarket.farm_id === product.farm_id) {
            this.markets.forEach(market => {
              if (market.id === farmMarket.market_id) {
                product.markets.push(market)
                product.market_id = market.id
              }
            })
          }
        })
      })
    }
  }

})()
