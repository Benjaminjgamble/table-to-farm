(function(){

  angular.module('app')
  .component('main.show', {
    controller: controller,
    templateUrl: './scripts/main/main.show.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService']
  function controller (baseUrl, $http, $state, productsService){
    const vm = this
    vm.$onInit = $onInit
    vm.productsProducer = []

    function $onInit () {
      vm.singleProduct = productsService.singleProduct
      console.log(vm.singleProduct);
      vm.farms = productsService.farms
      vm.farmsMarkets = productsService.farmsMarkets
      vm.markets = productsService.markets

      vm.farmsMarkets.forEach((el) => {
        if (el.farm_id === vm.singleProduct.farm_id) {
          vm.productsProducer.push(el)
        }
      })

    }

  }

})()
