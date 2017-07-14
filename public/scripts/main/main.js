(function(){

  angular.module('app')
  .component('main', {
    controller: controller,
    templateUrl: './scripts/main/main.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService']
  function controller (baseUrl, $http, $state, productsService){
    const vm = this
    vm.$onInit = $onInit
    vm.getSingleProduct = getSingleProduct

    function $onInit () {
      vm.sortBy

      productsService.getAllProducts()
      .then(() => {
        vm.products = productsService.products;
      }).catch((err) => {
        console.error(err);
      })

      productsService.getAllFarms()
      .then(() => {
        vm.farms = productsService.farms
      }).catch((err) => {
        console.error(err);
      })

      productsService.farmsMarketsJoin()
      .then(() => {
        vm.farmsMarkets = productsService.farmsMarkets
        console.log('farms markets join', vm.farmsMarkets);
      }).catch((err) => {
        console.error(err);
      })
    }

    productsService.getAllMarkets()
    .then(() => {
      vm.markets = productsService.markets
    }).catch((err) => {
      console.error(err);
    })

    function getSingleProduct (product) {
      let id = product.id
      productsService.getProductById(id)
      .then(() => {
        vm.singleProduct = productsService.singleProduct
        console.log('single product', vm.singleProduct);
        $state.go('showproduct', { id })
      })
    }

  }

})()
