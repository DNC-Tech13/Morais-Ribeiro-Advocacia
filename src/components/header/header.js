import { useEffect, useState } from 'react';
import './index.scss';
import Link from 'next/link';
import ModalMenu from '../modal menu/modalMenu';
// Importe os componentes de modal e botão do Bootstrap

const Header = () => {
    // Estado para controlar se o dispositivo é móvel
    const [isMobile, setIsMobile] = useState(false);
    // Estado para controlar a exibição do modal
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Função para verificar se o dispositivo é móvel
        const checkIsMobile = () => {
            const mediaQuery = window.matchMedia('(max-width:1099px)');
            setIsMobile(mediaQuery.matches);
        };

        // Verifica se o dispositivo é móvel ao montar o componente
        checkIsMobile();

        // Adiciona um listener de resize para atualizar o estado se a janela for redimensionada
        window.addEventListener('resize', checkIsMobile);

        // Remove o listener de resize ao desmontar o componente para evitar vazamentos de memória
        return () => {

            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    // Função para alternar a exibição do modal
    const handleToggleModal = () => {
        setShowModal(!showModal); // Inverte o estado do modal ao clicar no ícone
    };

    return (
        <header>
            <nav className='navbar'>
                {/* Logo do Navbar */}
                    <img src='logo.svg' className='navbar__logo' />
                
                

                {/* Container para Links */}
                <div className='navbar__container'>
                    {/* Renderização condicional baseada no dispositivo */}
                    {isMobile ? (
                        <>
                            {/* Ícone para abrir o modal */}
                            <button onClick={handleToggleModal}>
                                <img src='mobileMenuIcon.svg' className='navbar__mobile-icon' alt='Mobile Icon' />
                            </button>
                            
                            <ModalMenu showModal={showModal} handleToggleModal={handleToggleModal} />
                        </>
                    ) : (
                        // Links para desktop
                        
                        <>
                            <Link href="/" className='navbar__custom'>Home</Link>
                            <Link href="/" className='navbar__custom'>Sobre nós</Link>
                            <Link href="/missao-visao-valores" className='navbar__custom'>Missão e valores</Link>
                            <Link href="/missao-visao-valores" className='navbar__custom'>Visão</Link>
                            <Link href="/" className='navbar__custom'>Áreas de Atuação</Link>
                            <Link href="/" className='navbar__custom'>Publicações</Link>
                            <Link href="/" className='navbar__custom'>Equipe</Link>
                            <Link href="/" className='navbar__custom'>Privacidade</Link>
                        </>
                     )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
