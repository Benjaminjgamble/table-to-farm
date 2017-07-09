(function(){

  angular.module('app')
  .component('landing', {
    controller: controller,
    templateUrl: './scripts/landing.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$scope']
  function controller (baseUrl, $http, $state, $scope){
    const vm = this
    vm.image_url = 'http://placehold.it/250/ffffff/000000'

    vm.$onInit = function () {
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

    vm.apiRequest = function () {
      const image = document.getElementById('image')
      const reader = new FileReader()
      reader.onload = (event) => {
        console.log(vm.image_url)
        $http.post(`${baseUrl}/api/cloudinary`, {file: reader.result}).then((response) => {
          console.log(response);
        })
        $scope.$apply(() => {
          vm.image_url = event.target.result
        })
      }
      reader.readAsDataURL(image.files[0])

      // $http.get(`https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=58b36d0709cc0552b000139d00d44d54babc25dd&url=${image}&version=2016-05-19`).then((result) => {
      //   console.log(result);
      // }).catch((err) => {
      //   console.log(err);
      // })
    }
  }
})()
