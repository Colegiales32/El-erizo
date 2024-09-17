import React, { useRef, useContext, useEffect } from 'react';
import ErizoContext from '../context/erizoContext';

const Nosotros = () => {
  const { registerRefs } = useContext(ErizoContext);

  // Crea una referencia para los elementos que quieres animar
  const nosotrosRef = [useRef(null), useRef(null)];

  useEffect(() => {
    // Registra las referencias en el contexto
    nosotrosRef.forEach(ref => registerRefs(ref));
  }, [registerRefs]);

  return (
    <div className="flex mt-5 md:mt-8 flex-col-reverse lg:flex-row mx-[1.2rem] md:mx-[7.2rem] xl:mx-auto gap-[2rem] max-w-[75rem]">
      <div ref={nosotrosRef[0]} className="fade-in-up-scroll w-full sombra h-full lg:max-w-[36rem] lg:min-w-[25rem] overflow-hidden rounded-[10px]">
        <img className="aspect-square lg:aspect-video w-full h-[20rem] object-cover" src="/nosotros.webp" alt="imagen de nosotros" />
      </div>
      <div ref={nosotrosRef[1]} className="fade-in-up-scroll my-auto lg:max-w-xl text-sm md:text-xl leading-7 md:leading-9 text-claro">
        <p className="w-full">Desde 2015 que ofrecemos un espacio donde puedan venir a ejercitar ese lado creativo que todos tenemos, en un principio tuvimos diversidad de cursos relacionados a distintos tipos de manualidades, pero desde ya hace unos años que la ceramica copo cada centímetro del taller... Nuestro objetivo es que puedan descontectarse de la rutina, relajarse y aprender este hermoso oficio.</p>
      </div>
    </div>
  );
};

export default Nosotros;
