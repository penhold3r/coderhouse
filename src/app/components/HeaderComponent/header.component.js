import logo from '../../../images/coderhouse-logo.svg'

const HeaderController = $scope => {
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
}

const HeaderComponent = {
	templateUrl: './header.template.html',
	controller: HeaderController,
}

export default HeaderComponent
