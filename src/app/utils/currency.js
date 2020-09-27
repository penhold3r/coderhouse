const replaceSeparators = $delegate => {
	$delegate.NUMBER_FORMATS.DECIMAL_SEP = ','
	$delegate.NUMBER_FORMATS.GROUP_SEP = '.'
	return $delegate
}

const currencyDecorator = $provide =>
	$provide.decorator('$locale', ['$delegate', replaceSeparators])

const currencyConfig = ['$provide', currencyDecorator]

export default currencyConfig
