(function(){

  angular.module('app')
  .component('main', {
    controller: controller,
    templateUrl: './scripts/main/main.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'productsService']
  function controller (baseUrl, $http, $state, productsService){
    const vm = this
    vm.$onInit = $onInit
    vm.getSingleProduct = getSingleProduct
    vm.dropFilter = dropFilter

    function $onInit () {
      vm.dropDown = []

      productsService.getAllProducts()
      .then(() => {
        vm.products = productsService.products
      })
      .then(() => {
        vm.products.forEach((product) => {
          if (vm.dropDown.indexOf(product.type) === -1) {
            vm.dropDown.push(product.type)
          }
        })

        return  productsService.getAllFarms()
      })
      .then(() => {
        vm.farms = productsService.farms

        return productsService.farmsMarketsJoin().then(() => {
          vm.farmsMarkets = productsService.farmsMarkets
        })
      }).then(() => {
        return productsService.getAllMarkets().then(() => {
          productsService.getAllProductsWithMarkets()

          vm.markets = productsService.products
          .map(product => product.markets) // get all the markets from products
          .reduce((a,b) => a.concat(b)) // flatten the array into all markets
          .reduce((acc, market) => { // unique markets
            const match = acc.filter(m => m.id === market.id)[0]

            if (!match) acc.push(market)
            return acc
          }, [])
        })
      }).catch((err) => {
        console.error(err)
      })

    }

    function dropFilter() {
      vm.products.forEach((product) => {
        if (vm.dropDown.indexOf(product) === -1) {
          vm.dropDown.push(product)
        }
      })
    }

    function getSingleProduct (product) {
      let id = product.id
      productsService.getProductById(id)
      .then(() => {
        vm.singleProduct = productsService.singleProduct
        $state.go('showproduct', { id })
      })
    }

  }
})()
