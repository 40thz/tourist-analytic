const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@service': path.resolve(__dirname, 'src/services/'),
			'@images': path.resolve(__dirname, 'src/assets/images/'),
			'@redux': path.resolve(__dirname, 'src/store/'),
			'@hooks': path.resolve(__dirname, 'src/hooks/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@notification': path.resolve(__dirname, 'src/notification/'),
			'@routing': path.resolve(__dirname, 'src/routing/'),
			'@server': path.resolve(__dirname, '../server/'),
		},
	},
}
