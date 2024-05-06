import { useRouter } from 'next/router'
import React from 'react'
import './button.scss'

const ButtonCustomLink = (props) => {  
  return (  
    <div className="buttonCustom_wrapper" style={{justifyContent:props.position==='left'&&'flex-start' || props.position === 'right'&&'flex-end' ||props.position === 'center'&&'center' }}> 
    <button onClick={() => console.log('abrir modal')} className={`buttonCustom ${props.variant==='dark'?'dark':'light'}`}>
      {props.children}
    </button>
    </div>
  )
}

export default ButtonCustomLink