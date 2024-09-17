import React from 'react'
import Boton from './Boton'

const Cards = ({imagen,titulo,texto,link
}) => {
  return (
    <div loading="lazy" className="w-[21rem] font-calibri h-[22rem] flex-col overflow-hidden justify-start items-center rounded-[10px] inline-flex relative sombra bg-[#FCDED3]">
            <img className="w-full object-cover h-[10rem]" src={imagen} alt='imagen del evento' />
            <div className="mt-[1rem] mx-[1.8rem] flex-col justify-center items-center gap-1 inline-flex">
                <h4 className="self-stretch text-center text-[#272727] text-[1rem] font-bold">{titulo}</h4>
                <p className="self-stretch text-[#474747] text-base font-light">{texto}</p>
                <Boton enlace={link} texto='Quiero info'/>
            </div>
        </div>

  )
}

export default Cards