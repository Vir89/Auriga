import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import H3 from '../atoms/H3'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import Span from '../atoms/Span';
import Modal from 'react-modal';
import '../../App.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 10000ms ease-in-out',
      maxWidth: '80%',
      
    },
    
  };

  Modal.setAppElement('#root');

const icons={
    ko: <Span danger><RiCheckboxBlankCircleFill/></Span>,
    ok:<Span success><RiCheckboxBlankCircleFill/></Span>,
    warning:<Span warning><RiCheckboxBlankCircleFill/></Span>
   
}
 
export const CarStatus = (props) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
      }
    
    
    function closeModal() {
        setIsOpen(false);
      }



    return (
        <DivAlert >
            
            <H3 onClick={openModal}>{props.name}</H3>
           
            {icons[props.status]} 

            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <h2>{props.name}</h2>
            
                <p>Descripción</p>
        
            </Modal>

        </DivAlert>
    )
}
