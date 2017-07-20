(function(){

  angular.module('app')
  .component('main.show', {
    controller: controller,
    templateUrl: './scripts/main/main.show.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService', 'signinService']
  function controller (baseUrl, $http, $state, productsService, signinService){
    const vm = this
    vm.$onInit = $onInit
    vm.addComment = addComment
    vm.productsProducer = []

    function $onInit () {
      vm.singleProduct = productsService.singleProduct
      vm.singleProduct.comments.forEach((comment) => {
        comment.commentCreated = moment(comment.commentCreated).format('dddd MMMM LT')
      })
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
      if(!signinService.loggedInUser) {
        window.alert('Cannot comment until logged in!')
        $state.go('signin')
        return
      }
      let commentToAdd = {
        comment: vm.newComment,
        user_id: signinService.loggedInUser.id,
        product_id: vm.singleProduct.id
      }
      delete vm.newComment
      return $http.post(`/api/comments`, commentToAdd)
      .then((theComment) => {
        return productsService.getProductById(vm.singleProduct.id)
      }).then((response) => {
        vm.singleProduct = response
            response.comments.forEach((comment) => {
            comment.commentCreated = moment(comment.commentCreated).format('dddd MMMM LT')
          })
      })
    }

  }

})()
