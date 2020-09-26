const ExpertsSliderController = async ($scope, $http) => {
	$scope.experts = [
		'Includes',
		'Routes',
		'HTML Webpack Plugin',
		'Sass support',
		'Custom Materialize colors',
		'Images loader',
		'Custom Web Fonts',
	]

	try {
		// this should come from db/api
		const { data } = await $http.get('data/product.json')
		console.log(data)
	} catch (error) {
		console.error('no product')
	}

	console.log(experts)
}

const ExpertsSliderComponent = {
	templateUrl: './experts-slider.template.html',
	controller: ExpertsSliderController,
}

export default ExpertsSliderComponent
