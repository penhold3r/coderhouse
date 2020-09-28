function PricingDetailsController($scope, $rootScope) {
	$scope.pricing = $rootScope.product.pricing
	$scope.requirements = []
	$scope.benefits = []
	$scope.flags = {}

	$scope.pricing.map(({ requirements, benefits, currency }) => {
		$scope.requirements = [...new Set([...$scope.requirements, ...requirements])]
		$scope.benefits = [...new Set([...$scope.benefits, ...benefits])]
		$scope.flags = {
			...$scope.flags,
			[currency]: require(`../../../images/flag-${currency}.png`),
		}
	})
}

const PricingDetailsComponent = {
	templateUrl: './pricing-details.template.html',
	transclude: true,
	controller: PricingDetailsController,
}

export default PricingDetailsComponent
