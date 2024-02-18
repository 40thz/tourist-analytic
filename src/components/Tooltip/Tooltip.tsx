import React from 'react'

const Tooltip = ({ text }: { text: string | any }) => {
	return (
		<div data-tooltip={text} className='tooltip'>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM8.244 9.0495H9.4815C9.6885 9.0495 9.8535 8.88 9.8805 8.6745C10.0155 7.6905 10.6905 6.9735 11.8935 6.9735C12.9225 6.9735 13.8645 7.488 13.8645 8.7255C13.8645 9.678 13.3035 10.116 12.417 10.782C11.4075 11.5155 10.608 12.372 10.665 13.7625L10.6695 14.088C10.6711 14.1864 10.7113 14.2803 10.7814 14.3493C10.8516 14.4183 10.9461 14.457 11.0445 14.457H12.261C12.3605 14.457 12.4558 14.4175 12.5262 14.3472C12.5965 14.2768 12.636 14.1815 12.636 14.082V13.9245C12.636 12.8475 13.0455 12.534 14.151 11.6955C15.0645 11.001 16.017 10.23 16.017 8.6115C16.017 6.345 14.103 5.25 12.0075 5.25C10.107 5.25 8.025 6.135 7.8825 8.679C7.88045 8.72744 7.88832 8.77579 7.90565 8.82107C7.92297 8.86636 7.94937 8.90762 7.98323 8.94232C8.01709 8.97703 8.05769 9.00444 8.10254 9.02287C8.14738 9.0413 8.19552 9.05036 8.244 9.0495ZM11.7315 18.714C12.6465 18.714 13.275 18.123 13.275 17.3235C13.275 16.4955 12.645 15.9135 11.7315 15.9135C10.8555 15.9135 10.218 16.4955 10.218 17.3235C10.218 18.123 10.8555 18.714 11.733 18.714H11.7315Z'
					fill='white'
				/>
			</svg>
		</div>
	)
}

export default Tooltip