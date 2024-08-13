import React from 'react'

const Cards = ({imagen,titulo,texto
}) => {
  return (
    <div class="w-[21rem] h-[22rem] flex-col overflow-hidden justify-start items-center rounded-[10px] inline-flex relative sombra bg-[#FCDED3]">
            <img class="w-full object-cover h-[10rem]" src={imagen} />
            <div class="mt-[1rem] mx-[1.8rem] flex-col justify-center items-center gap-1 inline-flex">
                <h4 class="self-stretch text-center text-[#272727] text-[1rem] font-bold font-['Calibri']">{titulo}</h4>
                <p class="self-stretch text-[#474747] text-base font-light font-['Calibri']">{texto}</p>
                <button class="w-[8rem] h-[3rem] pl-[1rem] pr-[1rem] py-[0.5rem] bg-[#51cec1] rounded-[1rem] justify-center items-center inline-flex">
                    <a class="text-center text-[#272727] text-base font-normal font-['Calibri']">Conocer más</a>
                </button>
            </div>
        </div>

  )
}

export default Cards