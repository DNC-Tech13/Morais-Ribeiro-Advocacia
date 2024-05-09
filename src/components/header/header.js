import React, { useEffect, useState, useMemo } from 'react';
import './index.scss';
import Link from 'next/link';
import ModalMenu from '../modal menu/modalMenu';

const Header = ({ isMobileProp, showModalProp, handleToggleModalProp, renderLinksProp }) => {
    const [isMobile, setIsMobile] = useState(isMobileProp);
    const [showModal, setShowModal] = useState(showModalProp);
    const [renderLinks, setRenderLinks] = useState(renderLinksProp);

    // Memoiza a função checkIsMobile para evitar demora de reload
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
                <img src='logo.svg' className='navbar__logo' alt='Logo' />
                
                <div className='navbar__container'>
                    {isMobile ? (
                        <>
                            <button onClick={handleToggleModal}>
                                <img src='mobileMenuIcon.svg' className='navbar__mobile-icon' alt='Mobile Icon' />
                            </button>
                            
                            {showModal && <ModalMenu handleToggleModal={handleToggleModal} />}
                        </>
                    ) : (
                        renderLinks && (
                            <>
                                <Link href="/" className='navbar__custom'>Home</Link>
                                <Link href="/" className='navbar__custom'>Sobre nós</Link>
                                <Link href="/missao-visao-valores" className='navbar__custom'>Missão e valores</Link>
                                <Link href="/missao-visao-valores" className='navbar__custom'>Visão</Link>
                                <Link href="/" className='navbar__custom'>Áreas de Atuação</Link>
                                <Link href="/publi" className='navbar__custom'>Publicações</Link>
                                <Link href="/" className='navbar__custom'>Equipe</Link>
                                <Link href="/" className='navbar__custom'>Privacidade</Link>
                            </>
                        )
                     )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
