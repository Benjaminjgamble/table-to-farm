(function(){

  angular.module('app')
  .component('signin', {
    controller: controller,
    templateUrl: './scripts/signin/signin.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){

    const vm = this
    vm.$onInit = $onInit
    vm.showUserSignUp = showUserSignUp
    vm.showPurveyorSignUp = showPurveyorSignUp


    function $onInit () {
      vm.showUser
      vm.showPurveyor
    }

    function showUserSignUp () {
      if(vm.showUser) {
        vm.showUser = false
      } else {
        vm.showUser = true
      }
    }

    function showPurveyorSignUp () {
      if(vm.showPurveyor) {
        vm.showPurveyor = false
      } else {
        vm.showPurveyor = true
      }
    }
  }

})()
