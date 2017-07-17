(function(){

  angular.module('app')
  .component('farm.bio', {
    controller: controller,
    templateUrl: './scripts/main/farm.bio.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService']
  function controller (baseUrl, $http, $state, productsService){
    const vm = this
    vm.$onInit = $onInit

    function $onInit () {
      vm.farms = productsService.farms
      vm.farmsMarkets = productsService.farmsMarkets
      vm.markets = productsService.markets
    }

  }

})()
