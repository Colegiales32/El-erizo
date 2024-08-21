import React from 'react'
import Boton from './Boton'

const Cards = ({imagen,titulo,texto
}) => {
  return (
    <div class="w-[21rem] h-[22rem] flex-col overflow-hidden justify-start items-center rounded-[10px] inline-flex relative sombra bg-[#FCDED3]">
            <img class="w-full object-cover h-[10rem]" src={imagen} />
            <div class="mt-[1rem] mx-[1.8rem] flex-col justify-center items-center gap-1 inline-flex">
                <h4 class="self-stretch text-center text-[#272727] text-[1rem] font-bold font-['Calibri']">{titulo}</h4>
                <p class="self-stretch text-[#474747] text-base font-light font-['Calibri']">{texto}</p>
                <Boton texto='Conocer mas'/>
            </div>
        </div>

  )
}

export default Cards