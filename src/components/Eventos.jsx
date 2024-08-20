import React from 'react'
import Cards from './Cards'

const Eventos = () => {
  return (
    <div className="mt-5 md:mt-8 mx-[1.2rem] md:mx-[7.2rem] 2xl:max-w-[75rem] 2xl:mx-auto">
        <h3 className='font-calibri font-bold text-oscuro text-[1.6rem] w-fit'>Nuestros Eventos</h3>
      <div className='mt-5 md:mt-8 flex flex-col lg:flex-row justify-between mx-[1.2rem] items-center md:mx-auto max-w-[75rem] gap-y-4'>
        <Cards 
        imagen="/evento3.jpg"
        texto="Evento de vino y ceramica en Nela Cafe, veni a disfrutar de un buen vino y llevate tu pieza"
        titulo="Cafe y ceramica"
        />
        <Cards 
        imagen="/evento2.jpg"
        texto="Evento de vino y ceramica en Nela Cafe, veni a disfrutar de un buen vino y llevate tu pieza"
        titulo="Cafe y ceramica"
        />
        <Cards 
        imagen="/evento1.jpg"
        texto="Evento de vino y ceramica en Nela Cafe, veni a disfrutar de un buen vino y llevate tu pieza"
        titulo="Cafe y ceramica"
        />
      

      </div>
    </div>
  )
}

export default Eventos