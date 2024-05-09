import React from 'react'

const AutorCard = ({nome, foto, linkMaisInfo}) => {
  return (
    <div>
      <img src={foto} alt={nome}/>
      <h3>{nome}</h3>
      <a href={linkMaisInfo}></a>
    </div>
  )
}



export default AutorCard