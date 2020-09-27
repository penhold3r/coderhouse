const PricingDetailsController = ($scope, $rootScope) => {
	$scope.pricing = $rootScope.product.pricing
	$scope.requirements = []
	$scope.benefits = []
	$scope.flags = {}

	$scope.pricing.map(({ requirements, benefits, currency }, i) => {
		$scope.requirements = [...new Set([...$scope.requirements, ...requirements])]
		$scope.benefits = [...new Set([...$scope.benefits, ...benefits])]
		$scope.flags = {
			...$scope.flags,
			[currency]: require(`../../../images/flag-${currency}.png`),
		}
	})

	console.log('pricing', $scope.pricing)
	console.log('flags', $scope.flags)
}

const PricingDetailsComponent = {
	templateUrl: './pricing-details.template.html',
	transclude: true,
	controller: PricingDetailsController,
}

export default PricingDetailsComponent
