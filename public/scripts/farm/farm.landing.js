(function(){

  angular.module('app')
  .component('farm.landing', {
    controller: controller,
    templateUrl: './scripts/farm/farm.landing.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$scope', 'productsService']
  function controller (baseUrl, $http, $state, $scope, productsService){
    const vm = this
    vm.image_url = 'http://placehold.it/250/ffffff/000000'

    vm.$onInit = function () {
      vm.products = productsService.products
      // // productsService.getFarmsProductsJoin().then((farmsProducts) => {
      // //   console.log('farmsProductsJoin.then', farmsProducts);
      // //   vm.farm_id = farmsProducts[0].farmsId
      // // })

    }

    vm.getProductsByFarm = function () {
      let farmId = {
        id: vm.products.
      }
      $http.get(`${baseUrl}/api/farm/${id}`).then((result) => {
        console.log(result);
      }).catch((err) => {
        vm.farmProducts = result.data
        console.log(err);
      })
    }

    vm.postProduct = function () {
      let newProduct = {
        product_name: vm.productName,
        type: vm.type,
        in_season: vm.season,
        image: vm.image_url,
        description: vm.description,
        price: vm.price,
        farm_id: 1
      }

      $http.post(`${baseUrl}/api/products`, newProduct).then((returnedProduct) => {
        vm.product_id = returnedProduct.data[0].id
        console.log('this is the new product', returnedProduct);
      }).catch((err) => {
        console.log(err);
      })
    }

    vm.apiRequest = function (file) {
      const image = document.getElementById('image')
      const reader = new FileReader()
      reader.onload = (event) => {
        console.log(vm.image_url)
        $http.post(`${baseUrl}/api/cloudinary`, {file: reader.result}).then((response) => {
          console.log(response);
          let newImage = response.data.url
          vm.image_url = newImage
          $http.get(`https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=58b36d0709cc0552b000139d00d44d54babc25dd&url=${newImage}&version=2016-05-19`).then((result) => {
            console.log('watson result', result);
            let resArr = result.data.images[0].classifiers[0].classes
            vm.productName = resArr[0].class
            vm.type = resArr[1].class
            vm.description = resArr[0].type_hierarchy
          }).catch((err) => {
            console.log(err);
          })
        })
        // $scope.$apply(() => {
        //   vm.image_url = event.target.result
        // })
      }
      reader.readAsDataURL(file)

    }

    $scope.fileNameChanged = function (element) {
      console.log('!!!', element.files[0])
      vm.apiRequest(element.files[0])
    }
  }
})()
