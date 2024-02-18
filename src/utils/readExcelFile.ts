import Notification from '@notification/index'
import { ChangeEvent } from 'react'
import { read, utils } from 'xlsx'

export const readExcelFile = async (e: ChangeEvent<HTMLInputElement>) => {
	const type = [
		'application/vnd.ms-excel',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	]

	if (!e.target.files) return
	const file = e.target.files[0]

	// const checkType = !type.includes(file?.type)

	// if (checkType) {
	// 	Notification.error('Невалидный формат файла')
	// 	return
	// }

	const data = await file.arrayBuffer()
	const workbook = read(data)
	const worksheet = workbook.Sheets['Сайт']
	const jsonData: any = utils.sheet_to_json(worksheet)

	return jsonData
}
