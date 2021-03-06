(function(){

  angular.module('app')
  .component('farm.landing', {
    controller: controller,
    templateUrl: './scripts/farm/farm.landing.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$scope', 'productsService', 'signinService']
  function controller (baseUrl, $http, $state, $scope, productsService, signinService) {

    const vm = this
    vm.image_url = 'http://ajaxuploader.com/images/drag-drop-file-upload.png'
    vm.$onInit = $onInit
    vm.getProductsByFarm = getProductsByFarm
    vm.postProduct = postProduct
    vm.apiRequest = apiRequest
    vm.getSingleProduct = getSingleProduct
    vm.deleteProduct = deleteProduct
    vm.loggedInUser = signinService.loggedInUser
    vm.fileUploadImage = fileUploadImage

    function $onInit () {
      vm.products = productsService.products
      vm.getProductsByFarm()
    }

    function getSingleProduct (product) {
      let id = product.id
      productsService.getProductById(id)
      .then(() => {
        vm.singleProduct = productsService.singleProduct
        $state.go('editproduct', { id })
      })
    }

    function fileUploadImage () {
      angular.element('#image').click()
    }

    function deleteProduct (product) {
      let id = product.id
      productsService.getProductById(id)
      .then(() => {
        productToDelete = productsService.singleProduct.id
        return $http.delete(`/api/products/${productToDelete}`)
      }).then(() => {
        console.log(`Product number ${id} has been removed`);
        return vm.getProductsByFarm()
      }).then((data) => {
        vm.farmProducts = data
      })
    }

    function getProductsByFarm () {
      $http.get(`/api/farm/${vm.loggedInUser.id}`)
      .then((result) => {
        vm.farmProducts = result.data
      }).catch((err) => {
        console.log(err);
      })
    }

    function postProduct () {
      let newProduct = {
        product_name: vm.productName,
        type: vm.type,
        in_season: vm.season,
        image: vm.image_url,
        description: vm.description,
        price: vm.price,
        farm_id: vm.loggedInUser.id
      }

      $http.post(`/api/products`, newProduct)
      .then((returnedProduct) => {
        vm.product_id = returnedProduct.data[0].id
        vm.getProductsByFarm()
        vm.image_url = 'http://ajaxuploader.com/images/drag-drop-file-upload.png'
      }).catch((err) => {
        console.log(err);
      })
    }

    function apiRequest (file) {
      const image = document.getElementById('image')
      const reader = new FileReader()

      reader.onload = (event) => {
        $http.post(`/api/cloudinary`, {file: reader.result})
        .then((response) => {
          let newImage = response.data.url
          vm.image_url = newImage

          $http.get(`https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=58b36d0709cc0552b000139d00d44d54babc25dd&url=${newImage}&version=2016-05-19`)
          .then((result) => {
            let resArr = result.data.images[0].classifiers[0].classes
            vm.productName = resArr[0].class
            vm.type = resArr[1].class
            vm.description = resArr[0].type_hierarchy
            vm.description = vm.description.replace(/\W/g, ' ')

          }).catch((err) => {
            console.log(err);
          })
        })
      }
      reader.readAsDataURL(file)
    }

    $scope.fileNameChanged = function (element) {
      vm.apiRequest(element.files[0])
    }
  }

})()
