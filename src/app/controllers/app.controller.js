async function appController($scope, $rootScope, $http) {
	$scope.lang = 'es'
	$scope.title = 'CoderHouse'

	$scope.paymentMethods = ['visa', 'mastercard', 'american-express', 'deposit']

	try {
		// this should come from db/api
		const { data } = await $http.get('data/product.json')

		$scope.description = data.description
		$rootScope.product = data
	} catch (error) {
		console.error('no product')
	}

	console.log('App works!')
}

const AppController = ['$scope', '$rootScope', '$http', appController]

export default AppController
