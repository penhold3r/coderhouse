import logo from '../../../images/coderhouse-logo.svg'

function HeaderController($scope) {
	$scope.brand = logo

	$scope.links = [
		{
			text: 'Cursos on line',
			url: '#',
		},
		{
			text: 'Comunidad',
			url: '#',
		},
		{
			text: 'Porque coder?',
			url: '#',
		},
	]

	$scope.closeBanner = $event => {
		const banner = $event.currentTarget.closest('.promo-banner')
		banner.classList.add('closed')
	}
}

const HeaderComponent = {
	templateUrl: './header.template.html',
	controller: HeaderController,
}

export default HeaderComponent
