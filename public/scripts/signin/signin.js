(function(){

  angular.module('app')
  .component('signin', {
    controller: controller,
    templateUrl: './scripts/signin/signin.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){

    const vm = this
    vm.email
    vm.password
    vm.$onInit = $onInit
    vm.showUserSignUp = showUserSignUp
    vm.showPurveyorSignUp = showPurveyorSignUp
    vm.getAllFarms = getAllFarms
    vm.getAllUsers = getAllUsers


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

    function getAllUsers (email, password) {
      email = vm.email
      password = vm.password
      $http.get(`${baseUrl}/api/users`)
      .then((allUsers) => {
        console.log(allUsers);
        allUsers = allUsers.data
        let user = 'Try again!'
        allUsers.forEach((el) => {
          if(el.email === email && el.password === password) {
            user = el
            console.log(`Welcome ${el.first_name}!`);
            return user
          }
          return user
        })
      })
    }

    function getAllFarms () {

    }

  }

})()
