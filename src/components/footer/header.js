import { useEffect, useState } from 'react';
import './index.scss';
import Link from 'next/link';
import { Modal} from 'react-bootstrap'; // Importe os componentes de modal e botão do Bootstrap

const Header = () => {
    // Estado para controlar se o dispositivo é móvel
    const [isMobile, setIsMobile] = useState(false);
    // Estado para controlar a exibição do modal
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Função para verificar se o dispositivo é móvel
        const checkIsMobile = () => {
            const mediaQuery = window.matchMedia('(max-width:1250px)');
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
                                    <Link href="/" className='navbar__custom'>Equipe</Link>
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
                            <Link href="/" className='navbar__custom'>Equipe</Link>
                            <Link href="/" className='navbar__custom'>Privacidade</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
