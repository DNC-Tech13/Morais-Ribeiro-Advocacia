import { useRouter } from 'next/router'
import React, { useState } from 'react'
import './button.scss'
import FormModal from './component/formModal';

const ButtonCustomForm = (props) => {
  const [show, setShow] = useState(false);
  const onOpen = () => {
    setShow(true);
  }
  const onClose = () => {
    setShow(false);
  }
  return (  
    <div className="buttonCustom_wrapper" style={{justifyContent:props.position==='left'&&'flex-start' || props.position === 'right'&&'flex-end' ||props.position === 'center'&&'center',  }}> 
      <button onClick={() => onOpen()} className={`buttonCustom ${props.variant==='dark'?'dark':'light'}`}>
      {props.children}
    </button>
    <FormModal onOpen={onOpen} onClose={onClose} show={show} />
    </div>
  )
}

export default ButtonCustomForm