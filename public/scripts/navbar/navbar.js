(function(){

  angular.module('app')
  .component('navbar', {
    controller: controller,
    templateUrl: './scripts/navbar/navbar.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService', 'signinService']
  function controller (baseUrl, $http, $state, productsService, signinService){
    const vm = this
    vm.$onInit = $onInit
    vm.userOrFarmer = userOrFarmer

    function $onInit () {
      vm.toggle = true
    }

    function userOrFarmer () {
      if(signinService.loggedInUser != undefined) {
        if(signinService.loggedInUser.is_seller) {
          console.log(vm.toggle);
          $state.go('farm')
        } else {
          $state.go('main')
        }
      } else {
        $state.go('main')
      }
    }

  }
})()
