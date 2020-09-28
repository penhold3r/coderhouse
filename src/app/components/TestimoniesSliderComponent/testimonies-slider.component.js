function TestimoniesSliderController($scope, $rootScope, $element) {
	const ctrl = this
	$scope.testimonies = $rootScope.product.testimonies

	$scope.currPosition = 0

	$scope.prev = () => {
		if ($scope.currPosition === 0) {
			$scope.slider.style.left = `-${$scope.totalWidth - $scope.slider.offsetWidth}px`
			$scope.currPosition = -$scope.totalWidth + $scope.slider.offsetWidth
		} else {
			$scope.slider.style.left = `${$scope.currPosition + $scope.slider.offsetWidth}px`
			$scope.currPosition = $scope.currPosition + $scope.slider.offsetWidth
		}
	}

	$scope.next = () => {
		if ($scope.currPosition === -$scope.totalWidth + $scope.slider.offsetWidth) {
			$scope.slider.style.left = `0px`
			$scope.currPosition = 0
		} else {
			$scope.slider.style.left = `${$scope.currPosition - $scope.slider.offsetWidth}px`
			$scope.currPosition = $scope.currPosition - $scope.slider.offsetWidth
		}
	}

	ctrl.$postLink = function () {
		const slider = $element[0].querySelector('.slider-carrier')

		$scope.slider = slider
		$scope.totalWidth = slider.offsetWidth * $scope.testimonies.length
	}
}

const TestimoniesSliderComponent = {
	templateUrl: './testimonies-slider.template.html',
	controller: TestimoniesSliderController,
}

export default TestimoniesSliderComponent
