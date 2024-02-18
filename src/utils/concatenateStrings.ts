export const concatenateStrings = (array?: any) => {
	return array.map((item: { id: Array<number> }) => item.id).join(',')
}
