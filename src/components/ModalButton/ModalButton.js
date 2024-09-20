import React,{useState} from 'react'
import './ModalButton.css'
import Modal from './Modal';

const ModalButton = () => {

	const [isModalOpen, setIsModalOpen] = useState();


	const handleOpen = () =>{
		setIsModalOpen(true);
	};
	const handleClose =() =>{
		setIsModalOpen(false);
	}
  return (
	<div>
	 <button className="open-modal-btn" onClick={handleOpen}>
        Open Modal
      </button>
      {isModalOpen && <Modal handleClose={handleClose} />}
 
	</div>
  )
}

export default ModalButton