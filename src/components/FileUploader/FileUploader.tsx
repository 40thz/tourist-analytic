import React, { InputHTMLAttributes, useRef } from 'react'
interface IFileUploader extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'upload' | 'download'
	src?: string
}
const FileUploader = (props: IFileUploader) => {
	const fileInputRef = useRef<any>(null)
	if (props.type === 'upload') {
		return (
			<div className='inputFileUpload'>
				<a href='#'>
					<button
						className='upload'
						onClick={() => fileInputRef.current.click()}>
						<svg width={20} viewBox='0 0 24.758 24.758'>
							<path
								d='M12.527,0.003c0.013,0,0.015,0,0.019,0c0.007,0,0.007,0,0.009,0c0,0,0,0,0.004,0l0,0
			c0.002,0,0.008,0,0.01,0c0.004,0,0.004,0,0.004,0s0,0,0.003,0c0.026-0.006,0.035-0.002,0.054-0.002
			c3.205,0,6.32,1.271,8.621,3.503l2.536-2.569c0.122-0.123,0.31-0.16,0.461-0.094c0.159,0.065,0.264,0.219,0.264,0.392v8.351
			c0,0.234-0.19,0.424-0.422,0.424h-8.246c-0.005,0-0.013,0-0.019,0c-0.236,0-0.424-0.189-0.424-0.424
			c0-0.159,0.085-0.296,0.212-0.367l2.499-2.533c-1.482-1.432-3.418-2.213-5.539-2.213c-4.332,0.022-7.858,3.572-7.858,7.97
			c0.034,4.328,3.58,7.849,7.979,7.849l-0.009,4.468h-0.06C5.844,24.756,0.29,19.24,0.247,12.378
			C0.247,5.609,5.75,0.062,12.527,0.003z'
							/>
						</svg>
					</button>
				</a>
				<input
					{...props}
					multiple={false}
					ref={fileInputRef}
					type='file'
					hidden
				/>
			</div>
		)
	}

	if (props.type === 'download') {
		return (
			<div className='inputFileUpload'>
				<a href={props.src}>
					<button className='download'>
						<svg width='20px' height='20px' viewBox='0 0 18 18'>
							<g fill='#fff' fill-rule='evenodd'>
								<path d='M17.85 3.15l-2.99-3A.507.507 0 0 0 14.5 0H1.4A1.417 1.417 0 0 0 0 1.43v15.14A1.417 1.417 0 0 0 1.4 18h15.2a1.417 1.417 0 0 0 1.4-1.43V3.5a.469.469 0 0 0-.15-.35zM16 16H2V5.9c.194.089.406.133.62.13h7.76A1.626 1.626 0 0 0 12 4.41V2h1.88L16 4.13V16z' />
								<circle cx='9' cy='11' r='3' />
							</g>
						</svg>
					</button>
				</a>
			</div>
		)
	}

	return null
}

export default FileUploader
