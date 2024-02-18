export const toPercent = (num: number) => {
	const percent = Number(num * 100).toFixed(1)
	return parseInt(percent)
}
