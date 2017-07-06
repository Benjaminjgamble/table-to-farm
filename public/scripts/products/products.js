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
      console.log('Inside controller on init function');
    }

  }
})()
