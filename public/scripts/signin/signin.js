(function(){

  angular.module('app')
  .component('signin', {
    controller: controller,
    templateUrl: './scripts/signin/signin.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService']
  function controller (baseUrl, $http, $state, productsService){

    const vm = this
    vm.allMarkets
    vm.email
    vm.password
    vm.$onInit = $onInit
    vm.showUserSignUp = showUserSignUp
    vm.showPurveyorSignUp = showPurveyorSignUp
    vm.getAllFarms = getAllFarms
    vm.getAllUsers = getAllUsers
    vm.userSignUp = userSignUp
    vm.farmSignUp = farmSignUp


    function $onInit () {
      vm.showUser
      vm.showPurveyor
      vm.allMarkets = productsService.markets
    }

    function showUserSignUp () {
      if(vm.showUser) {
        vm.showUser = false
      } else {
        vm.showUser = true
      }
    }

    function userSignUp () {
      let newUser = {
        first_name: vm.first_name,
        last_name: vm.last_name,
        email: vm.user_email,
        password: vm.user_password,
        is_seller: false
      }
      $http.post(`${baseUrl}/api/signup`, newUser)
      .then((signedUpUser) => {
        vm.signedUpUser = signedUpUser.data
      })
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

    function showPurveyorSignUp () {
      if(vm.showPurveyor) {
        vm.showPurveyor = false
      } else {
        vm.showPurveyor = true
      }
    }

    function farmSignUp () {
      let newFarm = {
        farm_name: vm.farm_name,
        type: vm.type,
        password: vm.farm_password,
        website: vm.website,
        email: vm.farm_email,
        location: vm.location,
        is_seller: true,
        atMarkets: vm.allMarkets.filter((el) => {
          return el.checked
        }).map((el) => {
          return el.id
        })
      }
      $http.post(`${baseUrl}/api/farmsignup`, newFarm)
      .then((signedUpFarm) => {
        vm.signedUpFarm = signedUpFarm.data
        console.log('signed up farm', signedUpFarm);
      })
    }


    function getAllFarms () {

    }

  }

})()
