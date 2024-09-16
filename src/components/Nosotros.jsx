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
      <div ref={nosotrosRef[1]} className="fade-in-up-scroll my-auto lg:max-w-xl text-sm md:text-xl leading-7 md:leading-9 text-claro font-light">
        <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada massa id commodo elementum. Morbi interdum nec orci non pretium. Maecenas pellentesque sapien eu lacus faucibus accumsan. In eu porttitor metus, bibendum cursus felis. Nulla vel fermentum metus. Mauris ut turpis sit amet massa volutpat faucibus quis eu leo. Integer id augue aliquet, posuere massa vel, sodales nulla.</p>
      </div>
    </div>
  );
};

export default Nosotros;
