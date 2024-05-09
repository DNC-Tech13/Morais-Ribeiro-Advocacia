import React, { useEffect, useState, useMemo } from 'react';
import './index.scss';
import Link from 'next/link';
import ModalMenu from '../modal menu/modalMenu';

const Header = ({ isMobileProp, showModalProp, handleToggleModalProp, renderLinksProp }) => {
    const [isMobile, setIsMobile] = useState(isMobileProp);
    const [showModal, setShowModal] = useState(showModalProp);
    const [renderLinks, setRenderLinks] = useState(renderLinksProp);

    // Memoiza a função checkIsMobile para evitar demora de  reload
    const checkIsMobile = useMemo(() => () => {
        const mediaQuery = window.matchMedia('(max-width:1099px)');
        setIsMobile(mediaQuery.matches);
        setRenderLinks(true);
    }, []);

    useEffect(() => {
        checkIsMobile(); // Chamada inicial para definir o estado ao montar o componente

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <header>
            <nav className='navbar'>
                {/* Logo do Navbar */}
                <img src='/logo.svg' className='navbar__logo' />

                {/* Container para Links */}
                <div className='navbar__container'>
                    {isMobile ? (
                        <>
                            {/* Ícone para abrir o modal */}
                            <img
                                src='mobileMenuIcon.svg'
                                className='navbar__mobile-icon'
                                alt='Mobile Icon'
                                onClick={handleToggleModal} // Adiciona o evento de clique para abrir o modal
                            />

                            {/* Modal para dispositivos móveis */}
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
                                    <button className="close-button" onClick={handleToggleModal}>
                                        <img src='closeButton.svg'/>
                                    </button>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* Links dentro do modal */}
                                    <Link href="/" className='navbar__custom'>Home</Link>
                                    <Link href="/" className='navbar__custom'>Sobre nós</Link>
                                    <Link href="/" className='navbar__custom'>Missão e valores</Link>
                                    <Link href="/" className='navbar__custom'>Visão</Link>
                                    <Link href="/" className='navbar__custom'>Áreas de Atuação</Link>
                                    <Link href="/" className='navbar__custom'>Publicações</Link>
                                    <Link href="/cardEquipe/cardEquipe" className='navbar__custom'>Equipe</Link>
                                    <Link href="/" className='navbar__custom'>Privacidade</Link>
                                </Modal.Body>
                                <Modal.Footer>
                                    <h1>Contatos</h1>
                                    <div>
                                        <div className='navbar__footerMenu'><a href="https://wa.me/5512991604267?text="><img src='whatsappIcon.svg'/><h4>Telefone: (12) 99160-4267</h4></a></div>
                                        <div className='navbar__footerMenu'><img src='emailIcon.svg'/><h4>E-mail: moraisribeiroadvjur@gmail.com</h4></div>
                                    </div>                                    
                                </Modal.Footer>
                            </Modal>
                        </>
                    ) : (
                        // Links para desktop
                        <div className='navbar__link'>
                            <Link href="/" className='navbar__custom'>Home</Link>
                            <Link href="/" className='navbar__custom'>Sobre nós</Link>
                            <Link href="/" className='navbar__custom'>Missão e valores</Link>
                            <Link href="/" className='navbar__custom'>Visão</Link>
                            <Link href="/" className='navbar__custom'>Áreas de Atuação</Link>
                            <Link href="/" className='navbar__custom'>Publicações</Link>
                            <Link href="/cardEquipe/cardEquipe" className='navbar__custom'>Equipe</Link>
                            <Link href="/" className='navbar__custom'>Privacidade</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
