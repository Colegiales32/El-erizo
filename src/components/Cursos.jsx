import React, { useContext, useRef,useEffect } from 'react'
import Boton from './Boton'
import ErizoContext from '../context/erizoContext';

const Cursos = () => {
    const { registerRefs } = useContext(ErizoContext);

    // Crea una referencia para el único elemento que quieres animar
    const cursosRef = useRef(null);
  
    useEffect(() => {
      // Registra la referencia del componente en el contexto
      registerRefs('cursos', cursosRef);
    }, [registerRefs]);

  return (
    <div ref={cursosRef} className="fade-in-up-3 fade-in-up-scroll delay-3 h-auto selection:bg-celeste mt-5 mb-16 md:mb-24 md:mt-8 md:h-min-[14rem] lg:h-[16rem] font-calibri p-[1rem] bg-[#FCDED3] rounded-[10px] mx-[1.2rem] md:mx-[6rem] lg:w-[46rem] lg:mx-auto flex flex-col md:flex-row gap-5 justify-between items-center sombra">
        <div className="w-full h-full md:max-w-[14rem] md:min-w-[14rem]  overflow-hidden rounded-[10px]">
            <img className=' aspect-square w-full object-cover' src="/imagen-curso.webp" alt="imagen del curso" />
        </div>
    <div className="flex flex-col items-start justify-between md:max-h-[14rem] md:min-h-[14rem]">
        <h2 className="self-stretch h-[1.875rem] text-oscuro text-[1.375rem] mt-0 font-bold break-words">Alfareria</h2>
        <p className="self-stretch text-claro text-[0.875rem] leading-[1.625rem] break-words">
        El taller tiene una modalidad libre, no hay niveles, cada alumno va a su ritmo. En cada curso hay alumnos principiantes, intermedios y avanzados. Nuestros profes te guiarán durante todo el proceso de torneado, retorneado, horneado, y decoración que más te guste. Animate a traer tus propias ideas sobre lo que queres crear. 

        </p>
        <div className="mx-auto md:mr-0 h-[3rem] flex justify-center items-center md:items-start">
            <Boton texto='Conocer mas' link='https://elerizoespaciocreativo.tiendup.com/c'/>
        </div>
    </div>
</div>

  )
}

export default Cursos