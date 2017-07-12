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
    // vm.getSingleProduct = getSingleProduct

    function $onInit () {

    }

    // function getSingleProduct (product) {
    //   let id = product.id
    //   productsService.getProductById(id)
    //   .then(() => {
    //     vm.singleProduct = productsService.singleProduct
    //     console.log('product.js front end', vm.singleProduct);
    //   })
    // }

  }

})()
