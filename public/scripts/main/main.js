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
      productsService.getAllProducts()
      .then(() => {
        vm.products = productsService.products;
      }).catch((err) => {
        console.log(err);
      })
    }

    function getSingleProduct (product) {
      let id = product.id
      productsService.getProductById(id)
      .then(() => {
        vm.singleProduct = productsService.singleProduct
        console.log('product.js front end', vm.singleProduct);
      })
    }

  }

})()
