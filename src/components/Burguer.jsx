import React from 'react'

const Burguer = ({handleClick, clicked}) => {
  return (
    <div className='flex justify-end'>
    <div onClick={handleClick} /* De los props extrae la funcion handleClick para asignarla al onClick */
     className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}> {/* si clicked es true agrega la clase open, si no nada */}
    <span></span>
    <span></span>
    <span></span>
  </div>
     </div>
  )
}

export default Burguer