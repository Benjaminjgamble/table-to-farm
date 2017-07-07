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

    vm.watsonRequest = function () {
      let imageUrl = vm.image

      $http.get(`https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=58b36d0709cc0552b000139d00d44d54babc25dd&url=${imageUrl}&version=2016-05-19`).then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
})()
