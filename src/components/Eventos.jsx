import React from 'react'
import { useEffect,useContext,useRef } from 'react';
import ErizoContext from '../context/erizoContext';
import Cards from './Cards'


const Eventos = () => {
  const { registerRefs } = useContext(ErizoContext);

  // Crea una referencia para los elementos que quieres animar
  const eventosRef = [useRef(null), useRef(null)];

  useEffect(() => {
    // Registra las referencias en el contexto
    eventosRef.forEach(ref => registerRefs(ref));
  }, [registerRefs]);
  return (
    <div loading="lazy"  className="mt-5 md:mt-8 mx-[1.2rem] md:mx-[7.2rem] 2xl:max-w-[75rem] 2xl:mx-auto">
        <h3 ref={eventosRef[0]} className='fade-in-up-scroll font-calibri font-bold text-oscuro text-[1.5rem] w-fit'>Nuestros Eventos</h3>
      <div loading="lazy" ref={eventosRef[1]} className='fade-in-up-scroll mt-5 md:mt-8 flex flex-col lg:flex-row justify-between mx-[1.2rem] items-center md:mx-auto max-w-[75rem] gap-4'>
        <Cards 
        imagen="/evento3.webp"
        texto="Evento de vino y ceramica en Nela Cafe, veni a disfrutar de un buen vino y llevate tu pieza"
        titulo="Cafe y ceramica"
        />
        <Cards 
        imagen="/evento2.webp"
        texto="Evento de vino y ceramica en Nela Cafe, veni a disfrutar de un buen vino y llevate tu pieza"
        titulo="Cafe y ceramica"
        />
        <Cards 
        imagen="/evento1.webp"
        texto="Evento de vino y ceramica en Nela Cafe, veni a disfrutar de un buen vino y llevate tu pieza"
        titulo="Cafe y ceramica"
        link='https://elerizoespaciocreativo.tiendup.com/c'
        />
      

      </div>
    </div>
  )
}

export default Eventos