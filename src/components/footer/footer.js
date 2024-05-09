import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <img src='logo.svg' className='footer__logo' />
          <div className='footer__endereco'>
            <h1>Endereço</h1>
            <div><h4>R. Antônio Aleixo da Silva | nº 1880 | Jardim Satélite <br />
              São José dos Campos - SP, 12231-650 </h4>
              <p>© 2024 Morais & Ribeiro</p>
            </div>
          </div>
          <div className='rectangle'></div>
          <div className='footer__contato'>
            <h1>Contatos</h1>
            <div className='footer__telefone'><a href="https://wa.me/5512991604267?text="><h4><img src='whatsappIcon.svg'/>Telefone: (12) 99160-4267</h4></a></div>
            <div>
              <h4><img src='emailIcon.svg' className='footer__email' />E-mail: moraisribeiroadvjur@gmail.com</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
