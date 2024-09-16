import React from 'react'

const Boton = ({texto,enlace}) => {
  return (
    <button className="w-[8rem] h-[3rem] pl-[1rem] transition-all ease-in duration-700 hover:bg-[#81fff2]  text-[#474747] pr-[1rem] py-[0.5rem] bg-[#51cec1]   hover:text-black rounded-[1rem] justify-center items-center inline-flex">
                    <a href={enlace} className="text-center text-md font-bold font-['Calibri']">{texto}</a>
                </button>
                
  )
}

export default Boton