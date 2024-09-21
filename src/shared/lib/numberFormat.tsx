const compactNumberFormatter = new Intl.NumberFormat('ko', {
	notation: 'compact',
})

const defaultNumberFormatter = new Intl.NumberFormat('ko', {
	maximumFractionDigits: 0,
})

function compactNumber(number: number): string {
	if (number < 1000000) {
		return defaultNumberFormatter.format(number)
	}

	return compactNumberFormatter.format(number)
}

export default compactNumber
