import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Modal} from 'react-bootstrap'; 
import './index.scss';
import { rotasApp } from '@/lib/rotasApp/rotasApp';

const ModalMenu = ({ showModal, handleToggleModal }) => {
    
    const [path, setPath] = useState('');
    useEffect(() => {
        const pathname = window.location.pathname;
        const anchor = window.location.hash;
        console.log(anchor)
        if(anchor){
        setPath(pathname + anchor);
        } else {
            setPath(pathname);
        }

    },[])

    const handleRedirect = () => {
        handleToggleModal(false)
    }
  return (
    <Modal 
    show={showModal} 
    onHide={handleToggleModal} 
    centered
    dialogClassName='modal-fullscreen'
    size="fullscreen"
    className={`fade ${showModal ? 'show' : ''}`}
>
    <Modal.Header closeButton>
        <Modal.Title><img src='logo.svg' className='navbar__logo' /></Modal.Title>       
    </Modal.Header>
    <Modal.Body>
        {rotasApp.map((rota, index) => (<Link key={index} href={rota.path} className={`navbar__custom ${path === rota.path && 'active'}`} onClick={() => handleRedirect()}>{rota.label}</Link>))}        
    </Modal.Body>
    <Modal.Footer>
        <h1>Contatos</h1>
            <a href="https://wa.me/5512991604267?text="><img src='whatsappIcon.svg'/><h4>Telefone: (12) 99160-4267</h4></a>
            <a href='mailto:moraisribeiroadvjur@gmail.com'>
            <img src='emailIcon.svg'/><h4>E-mail: moraisribeiroadvjur@gmail.com</h4>
            </a>
    </Modal.Footer>
</Modal>
  )
}

export default ModalMenu