function ExpertsSliderController($scope, $rootScope, $element) {
	const ctrl = this
	$scope.experts = $rootScope.product.experts

	ctrl.$postLink = function () {
		// TO DO
	}
}

const ExpertsSliderComponent = {
	templateUrl: './experts-slider.template.html',
	controller: ExpertsSliderController,
}

export default ExpertsSliderComponent
