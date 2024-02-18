export const total = (arr: number[]) => {
	const initialValue = 0
	const sum = arr?.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		initialValue
	)

	return sum
}
