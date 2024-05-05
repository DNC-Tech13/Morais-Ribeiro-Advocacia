import Whatsapp from "../../imagens/whatsapp.svg";
import React from 'react'
import './whatsapp.scss'
import Image from "next/image";

const WhatsappButton = () => {
  return (
    <div className='imgWhatsapp'>
        <a href="https://wa.me/5512991604267?text=Quero+conhecer+mais+das+as+%C3%A1reas+de+atua%C3%A7%C3%A3o.">
          <Image src={Whatsapp} />
        </a>
      </div>
  )
}

export default WhatsappButton