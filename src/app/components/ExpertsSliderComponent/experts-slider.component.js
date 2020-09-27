const ExpertsSliderController = ($scope, $rootScope) => {
	$scope.experts = $rootScope.product.experts
	//$scope.$digest()

	console.log('experts', $scope.experts)
}

const ExpertsSliderComponent = {
	templateUrl: './experts-slider.template.html',
	controller: ExpertsSliderController,
}

export default ExpertsSliderComponent
