(function(){

  angular.module('app')
  .component('markets.index', {
    controller: controller,
    templateUrl: './scripts/main/markets.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService']
  function controller (baseUrl, $http, $state, productsService){
    const vm = this
    vm.$onInit = $onInit

    function $onInit () {
      vm.farms = productsService.farms
      vm.farmsMarkets = productsService.farmsMarkets
      vm.markets = productsService.markets
      console.log(vm.markets);
    }

  }

})()
