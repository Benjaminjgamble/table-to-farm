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
    vm.getSingleProduct = getSingleProduct

    function $onInit () {
      vm.products = productsService.products
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
