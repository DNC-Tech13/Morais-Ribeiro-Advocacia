import React from 'react'
import Link from 'next/link';
import { Modal} from 'react-bootstrap'; 
import './index.scss';

const ModalMenu = ({ showModal, handleToggleModal }) => {
    console.log(showModal)
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
        <Link href="/" className='navbar__custom'>Home</Link>
        <Link href="/" className='navbar__custom'>Sobre nós</Link>
        <Link href="missao-visao-valores" className='navbar__custom'>Missão e valores</Link>
        <Link href="/missao-visao-valores" className='navbar__custom'>Visão</Link>
        <Link href="/" className='navbar__custom'>Áreas de Atuação</Link>
        <Link href="/" className='navbar__custom'>Publicações</Link>
        <Link href="/" className='navbar__custom'>Equipe</Link>
        <Link href="/" className='navbar__custom'>Privacidade</Link>
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