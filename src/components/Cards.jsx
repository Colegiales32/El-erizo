import React from 'react';
import Boton from './Boton';

const Cards = ({ imagen, titulo, texto, link }) => {
  return (
    <div
      loading="lazy"
      className="w-[21rem] font-calibri h-auto flex-col overflow-hidden justify-start items-center rounded-[10px] inline-flex relative sombra bg-[#FCDED3]"
    >
      <img
        className="w-full object-cover h-[10rem]"
        src={imagen}
        alt="imagen del evento de ceramica"
      />
      <div className="flex flex-col h-full mx-[1.8rem]">
        <h4 className="text-center text-oscuro text-[1rem] font-bold">{titulo}</h4>
        {/* Mantén el párrafo a 1rem de distancia del título */}
        <p className="text-claro mt-[0.5rem] text-base font-light">{texto}</p>
        {/* Esto empuja el botón al final del contenedor */}
        <div className="mx-auto my-[1rem]">
          <Boton enlace={link} texto="Quiero info" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
