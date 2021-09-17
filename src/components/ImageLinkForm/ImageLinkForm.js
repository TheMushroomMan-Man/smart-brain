import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className=''>
			<p className='f3 white'>
				{'This Magic Brain Will Detect Faces In Your Pictures. Give It A Try!'}
			</p>
			<div className='center'>
				<div className='form pa4 br4 shadow-5'>
					<input className='f5 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white mt3'
						onClick={onButtonSubmit}
						>Detect!</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;