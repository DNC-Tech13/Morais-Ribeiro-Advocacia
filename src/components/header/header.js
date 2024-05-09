import React, { useEffect, useState, useMemo } from 'react';
import './index.scss';
import Link from 'next/link';
import ModalMenu from '../modalMenu/modalMenu';
import { rotasApp } from '@/lib/rotasApp/rotasApp';
import { getPath } from '@/lib/getPath';
import { getScreenSize } from '@/lib/getScreensize';

const Header = ({ isMobileProp, showModalProp, handleToggleModalProp, renderLinksProp }) => {
    const [isMobile, setIsMobile] = useState(isMobileProp);
    const [showModal, setShowModal] = useState(showModalProp);
    const [renderLinks, setRenderLinks] = useState(renderLinksProp);
    const [path, setPath] = useState('');    
    const { anchor, pathname } = getPath();



    useEffect(() => {
        const { width } = getScreenSize();
        setIsMobile(width < 1100);
        setRenderLinks(width >= 1100)
        window.addEventListener("resize", () => {
        const { width } = getScreenSize();
        setIsMobile(width < 1100);
        setRenderLinks(width >= 1100)
    });
    return () => {
      window.removeEventListener("resize", () => {});
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