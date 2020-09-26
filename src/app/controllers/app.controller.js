const AppController = [
	'$scope',
	'$http',
	async ($scope, $http) => {
		$scope.lang = 'es'
		$scope.title = 'CoderHouse'

		try {
			// this should come from db/api
			const { data } = await $http.get('data/product.json')

			$scope.description = data.description
			$scope.product = data
		} catch (error) {
			console.error('no product')
		}

		console.log('App works!')
	},
]

export default AppController
