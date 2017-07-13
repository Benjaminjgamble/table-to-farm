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

    function $onInit () {

    }

  }

})()
