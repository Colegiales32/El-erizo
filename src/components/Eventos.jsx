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
        texto="Tenemos un formato de experiencia ceramica de un solo encuentro donde los participantes van a aprender a hacer piezas en forma manual guiados por un ceramista. Nos encargamos de llevar todos los materiales y herramientas para que lo puedan llevar a cabo , luego retiramos las piezas par aque puedan ser hornadas y esmaltadas en el taller. Este formato es ideal para empresas , despedidas o cumpleaños."
        titulo="Eventos privados"
        />
        <Cards 
        imagen="/evento2.webp"
        texto="Veni a aprender de ceramica y vino todo en un mismo encuentro. De la mano de Nela cafe ofrecemos la posibilidad de aprender a hacer una pieza de ceramica y disfrutar de una cata de vinos guiada por una sommelier y un tapeo delicioso pensado especialmente para este evento. Consultanos proximas fechas."
        titulo="Vino y ceramica"
        />
        <Cards 
        imagen="/evento1.webp"
        texto=" Si queres compartir un momento creativo , acompañado de cafe de especialidad y excelente pasteleria, en Nela cafe (Salvador 5847) encontraran nuestras piezas listas para ser intervenidas con acuarelas especiales para ceramica. Podes reservar en el momento que quieras para decorar una pieza ceramica y disfrutar de un desayuno o merienda en el cafe. Luego nos encargaremos de esmaltar y hornear la pieza pintada. La podrán retirar a partir de los 7 dias posteriores a la reserva. Consultanos para reservar ."
        titulo="Cafe y ceramica"
        link='https://elerizoespaciocreativo.tiendup.com/c'
        />
      

      </div>
    </div>
  )
}

export default Eventos