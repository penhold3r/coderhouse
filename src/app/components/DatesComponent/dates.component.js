function DatesController($scope, $rootScope, $element) {
	const ctrl = this
	$scope.dates = $rootScope.product.dates

	ctrl.$postLink = function () {
		$scope.triggerClick = $event => {
			const collapsibles = document.querySelectorAll('.accordion__section .dates')
			const toOpen = $event.currentTarget.nextElementSibling

			collapsibles.forEach(el => el.classList.remove('open'))
			toOpen.classList.add('open')
		}
	}
}

const DatesComponent = {
	templateUrl: './dates.template.html',
	controller: DatesController,
}

export default DatesComponent
