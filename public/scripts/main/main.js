(function(){
  console.log('main.js is connected')

  angular.module('app')
  .component('main', {
    controller: controller,
    templateUrl: './scripts/main/main.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService']
  function controller (baseUrl, $http, $state, productsService){
    const vm = this

    vm.$onInit = function () {
      productsService.getAllProducts().then(() => {
        vm.products = productsService.products;

      }).catch((err) => {
        console.log(err);
      })
      console.log(vm.products);

      
    }


  }
})()
