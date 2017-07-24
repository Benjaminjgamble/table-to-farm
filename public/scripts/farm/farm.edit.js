(function(){

  angular.module('app')
  .component('farm.edit', {
    controller: controller,
    templateUrl: './scripts/farm/farm.edit.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$scope', 'productsService', 'signinService']
  function controller (baseUrl, $http, $state, $scope, productsService, signinService) {

    const vm = this
    vm.$onInit = $onInit
    vm.editProduct = editProduct
    vm.loggedInUser = signinService.loggedInUser
    console.log('logged in user:', vm.loggedInUser);

    function $onInit () {
      vm.singleProduct = productsService.singleProduct
      vm.comments = productsService.singleProduct.comments
    }

    function editProduct () {
      let editedProduct = {
        id: vm.singleProduct.id,
        product_name: vm.singleProduct.product_name,
        type: vm.singleProduct.type,
        in_season: vm.singleProduct.in_season,
        image: vm.singleProduct.image,
        description: vm.singleProduct.description,
        price: vm.singleProduct.price,
        farm_id: vm.loggedInUser.id
      }

      $http.patch(`/api/products/:id/edit`, editedProduct)
      .then((product) => {
        $state.go('farm')
      })
    }

  }

})()
