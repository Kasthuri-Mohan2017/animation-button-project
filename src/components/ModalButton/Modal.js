import React from 'react';
import './Modal.css';
const Modal = ({handleClose}) => {
  return (
	<div className="modal-backdrop">
	<div className="modal-content">
	  <span className="close-button" onClick={handleClose}>
		&times;
	  </span>
	  <h2>Modal Header</h2>
	  <p>This is an advanced modal.</p>
	</div>
  </div>
  )
}

export default Modal