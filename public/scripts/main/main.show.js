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
    vm.addComment = addComment
    vm.productsProducer = []

    function $onInit () {
      vm.singleProduct = productsService.singleProduct
      vm.singleProduct.comments.forEach((comment) => {
        comment.created_at = moment(comment.created_at).format('dddd MMMM LT')
        console.log(comment.created_at);
      })
      console.log(vm.singleProduct);
      vm.farms = productsService.farms
      vm.farmsMarkets = productsService.farmsMarkets
      vm.markets = productsService.markets

      vm.farmsMarkets.forEach((el) => {
        if (el.farm_id === vm.singleProduct.farm_id) {
          vm.productsProducer.push(el)
        }
      })
    }

    function addComment () {
      let commentToAdd = {
        comment: vm.newComment,
        user_id: 2,
        product_id: vm.singleProduct.id
      }
      return $http.post(`${baseUrl}/api/comments`, commentToAdd)
      .then((theComment) => {
        return productsService.getProductById(vm.singleProduct.id)
      }).then((response) => {
        console.log(response);
        vm.singleProduct.comments = response.comments
      })
    }

  }

})()
