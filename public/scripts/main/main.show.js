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

    function $onInit () {
      vm.singleProduct = productsService.singleProduct[0]
      vm.farms = productsService.farms
      vm.farmsMarkets = productsService.farmsMarkets
      vm.markets = productsService.markets
      vm.farm

      vm.farms.forEach((el) => {
        if (el.id === vm.singleProduct.farm_id) {
          vm.farm = el
        }
      })

      
    }

  }

})()
