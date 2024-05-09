import React, { useEffect, useState, useMemo } from 'react';
import './index.scss';
import Link from 'next/link';
import ModalMenu from '../modalMenu/modalMenu';
import { rotasApp } from '@/lib/rotasApp/rotasApp';

const Header = ({ isMobileProp, showModalProp, handleToggleModalProp, renderLinksProp }) => {
    const [isMobile, setIsMobile] = useState(isMobileProp);
    const [showModal, setShowModal] = useState(showModalProp);
    const [renderLinks, setRenderLinks] = useState(renderLinksProp);
    const [path, setPath] = useState('');
    const pathname = window.location.pathname;
    const anchor = window.location.hash;

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

    useEffect(() => {        
        if(anchor){
        setPath(pathname + anchor);
        } else {
            setPath(pathname);
        }
    },[anchor, pathname])


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
                            {!showModal ? <button onClick={handleToggleModal}>
                                <img src='mobileMenuIcon.svg' className='navbar__mobile-icon' alt='Mobile Icon' />
                            </button> : 
                            <button className="close-button" onClick={handleToggleModal}>
                                <img src='closeButton.svg'/>
                            </button>
                            }
                            
                            {showModal && <ModalMenu handleToggleModal={handleToggleModal} showModal={showModal}  />}
                        </>
                    ) : (
                        renderLinks && (
                            <>
                            {rotasApp.map((rota, index) => (<Link key={index} href={rota.path} className={`navbar__custom ${path === rota.path && 'active'}`}>{rota.label}</Link>))}                                
                            </>
                        )
                     )}
                </div>
            </nav>
        </header>
    );
}

export default Header;