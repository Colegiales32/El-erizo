import React from 'react'

const Boton = ({texto}) => {
  return (
    <button class="w-[8rem] h-[3rem] pl-[1rem] transition-all ease-in duration-300 hover:bg-[#81fff2]  text-[#474747] pr-[1rem] py-[0.5rem] bg-[#51cec1]   hover:text-black rounded-[1rem] justify-center items-center inline-flex">
                    <a class="text-center text-md font-bold font-['Calibri']">{texto}</a>
                </button>
  )
}

export default Boton