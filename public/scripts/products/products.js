(function(){

  angular.module('app')
  .component('products', {
    controller: controller,
    templateUrl: './scripts/products/products.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService']
  function controller (baseUrl, $http, $state, productsService){
    const vm = this
    vm.$onInit = $onInit

    function $onInit () {
      vm.products = productsService.products
    }
  }

})()
