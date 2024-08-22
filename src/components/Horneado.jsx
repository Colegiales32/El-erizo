import React from 'react'
import Boton from './Boton'

const Horneado = () => {
  return (
    <div className="h-auto selection:bg-celeste mt-5 mb-16 md:mb-24 md:mt-8 md:h-min-[14rem] lg:h-[14rem] font-calibri p-[1rem] bg-[#FCDED3] rounded-[10px] mx-[1.2rem] md:mx-[6rem] lg:w-[46rem] lg:mx-auto flex flex-col-reverse md:flex-row-reverse gap-5 justify-between items-center sombra">

        <div className="w-full h-full md:max-w-[14rem] md:min-w-[14rem]  overflow-hidden rounded-[10px]">
            <img className=' aspect-square w-full object-cover' src="/horneado.webp" alt="imagen del curso" />
        </div>
    <div className="flex flex-col justify-between lg:h-[12rem] items-start">
        <h2 className="self-stretch h-[1.875rem] text-[#272727] text-[1.375rem] font-medium break-words">Servicio de Horneado</h2>
        <p className="self-stretch text-[#474747] text-[0.875rem] font-light leading-[1.625rem] break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus nunc vel fringilla placerat. Nam sit amet metus mi. Vivamus in ligula et lacus varius sagittis. Suspendisse sem odio, pretium at magna sodales, consectetur malesuada eros.
        </p>
        <div className="mx-auto md:ml-0 flex justify-center items-center md:items-start mt-[1rem]">
            <Boton texto='Conocer mas'/>
        </div>
    </div>
</div>
  )
}

export default Horneado