(function(){
  console.log('in signin.js')

  angular.module('app')
  .component('signin', {
    controller: controller,
    templateUrl: './scripts/signin/signin.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this

    vm.$onInit = function () {
      vm.showUser
      vm.showPurveyor
    }

    vm.showUserSignUp = function () {
         if(vm.showUser) {
           vm.showUser = false
         } else {
           vm.showUser = true
         }
      }

      vm.showPurveyorSignUp = function () {
           if(vm.showPurveyor) {
             vm.showPurveyor = false
           } else {
             vm.showPurveyor = true
           }
        }


  }
})()
