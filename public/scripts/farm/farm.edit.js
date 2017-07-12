(function(){

  angular.module('app')
  .component('farm.edit', {
    controller: controller,
    templateUrl: './scripts/farm/farm.edit.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$scope', 'productsService']
  function controller (baseUrl, $http, $state, $scope, productsService) {

    const vm = this
    vm.$onInit = $onInit
    vm.editProduct = editProduct

    function $onInit () {
      vm.singleProduct = productsService.singleProduct[0]
    }

    function editProduct () {
      let editedProduct = {
        id: vm.singleProduct.id,
        product_name: vm.productName,
        type: vm.type,
        in_season: vm.season,
        image: vm.image_url,
        description: vm.description,
        price: vm.price,
        farm_id: 1
      }

      $http.patch(`${baseUrl}/api/products/:id/edit`, editedProduct)
      .then((product) => {
        $state.go('farm')
      })
    }

  }

})()
