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
    vm.dropFilter = dropFilter;

    function $onInit () {
      vm.dropDown = []
      productsService.getAllProducts()
      .then(() => {
        vm.products = productsService.products;
      })
      .then(() => {
        vm.products.forEach((product) => {
            if (vm.dropDown.indexOf(product.type) === -1) {
                vm.dropDown.push(product.type)
            }
        })
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
      }).catch((err) => {
        console.error(err);
      })

    }

    function dropFilter() {
      vm.products.forEach((product) => {
          if (vm.dropDown.indexOf(product) === -1) {
              vm.dropDown.push(product)
          }
          console.log(vm.dropDown);
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
        $state.go('showproduct', { id })
      })
    }

  }

})()
