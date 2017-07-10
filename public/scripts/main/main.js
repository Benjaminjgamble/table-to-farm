(function(){
  console.log('main.js is connected')

  angular.module('app')
  .component('main', {
    controller: controller,
    templateUrl: './scripts/main/main.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this

    vm.$onInit = function () {
      console.log('Inside controller on init function');
      $http.get(`${baseUrl}/api/main`).then((signin) => {
        console.log(signin.data);
        vm.signin = signin.data
      }).catch((err) => {
        console.log(err);
      })
    }

  }
})()
