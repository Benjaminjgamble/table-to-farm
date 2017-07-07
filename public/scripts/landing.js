(function(){
  console.log('landing.js is connected')

  angular.module('app')
  .component('landing', {
    controller: controller,
    templateUrl: './scripts/landing.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this

    vm.$onInit = function () {
      console.log('Inside landing controller on init function');
    }

    vm.postProduct = function () {
      let newProduct = {
        product_name: vm.productName,
        type: vm.type,
        in_season: vm.season,
        image: vm.productImage,
        description: vm.description,
        price: vm.price
      }
      $http.post(`${baseUrl}/api/products`, newProduct).then((product) => {
        $state.go('products')
        console.log('this is the new product', product.data);
      }).catch((err) => {
        console.log(err);
      })
    }

  }
})()
