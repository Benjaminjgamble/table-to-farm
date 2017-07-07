(function(){
  console.log('products.js is connected')

  angular.module('app')
  .component('products', {
    controller: controller,
    templateUrl: './scripts/products/products.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this

    vm.$onInit = function () {
      console.log('Inside controller on init function');
      $http.get(`${baseUrl}/api/products`).then((products) => {
        console.log(products.data);
        vm.products = products.data
      }).catch((err) => {
        console.log(err);
      })
    }

  }
})()
