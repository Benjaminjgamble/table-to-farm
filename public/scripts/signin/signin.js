(function(){

  angular.module('app')
  .component('signin', {
    controller: controller,
    templateUrl: './scripts/signin/signin.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService', 'signinService']
  function controller (baseUrl, $http, $state, productsService, signinService){

    const vm = this
    vm.allFarms = productsService.farms
    vm.allMarkets
    vm.email
    vm.password
    vm.farmId
    vm.$onInit = $onInit
    vm.showUserSignUp = showUserSignUp
    vm.showPurveyorSignUp = showPurveyorSignUp
    vm.authorizeFarmer = authorizeFarmer
    vm.getAllUsers = getAllUsers
    vm.userSignUp = userSignUp
    vm.farmSignUp = farmSignUp
    vm.setTab = setTab
    vm.signIn = signIn

    function $onInit () {
      vm.tab = 1
      vm.showUser = true
      vm.showPurveyor
      vm.allMarkets = productsService.markets
    }

    function signIn () {
      if(!vm.signingInUser.email || !vm.signingInUser.password) {
        window.alert('that shit is bogus')
      } else if (vm.signingInUser.is_seller) {
        console.log('signingInUser', vm.signingInUser);
        signinService.checkUserAuth(vm.signingInUser)
        $state.go('farm')
      } else {
        signinService.checkUserAuth(vm.signingInUser)
        $state.go('main')
      }
    }

    function showUserSignUp () {
      if(vm.showUser) {
        vm.showUser = false
      } else {
        vm.showUser = true
      }
    }

    function setTab (num) {
      vm.tab = num
    }

    function userSignUp () {
      let newUser = {
        first_name: vm.first_name,
        last_name: vm.last_name,
        email: vm.user_email,
        password: vm.user_password,
        is_seller: false
      }
      $http.post(`/api/signup`, newUser)
      .then((signedUpUser) => {
        vm.signedUpUser = signedUpUser.data
        $state.go('main')
      })
    }



    function getAllUsers (email, password) {
      email = vm.email
      password = vm.password
      $http.get(`/api/users`)
      .then((allUsers) => {
        allUsers = allUsers.data
        allUsers.forEach((el) => {
          if(el.email === email && el.password === password) {
            user = el
            console.log(`Welcome ${el.first_name}!`);
            vm.user = el
            console.log(vm.user);
            $state.go('main')
          }
        })
      })
    }

    function authorizeFarmer (email, password) {
      email = vm.email
      password = vm.password
      farms = vm.allFarms
      farms.forEach((farm) => {
        if(farm.email === email && farm.password === password) {
          vm.farmId = farm.id
          vm.farm = farm
          $state.go('farm')
        }
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
      $http.post(`/api/farmsignup`, newFarm)
      .then((signedUpFarm) => {
        vm.signedUpFarm = signedUpFarm.data
        $state.go('farm')
      })
    }

  }

})()
