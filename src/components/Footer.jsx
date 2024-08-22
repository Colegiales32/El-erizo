import React from 'react'

const Footer = () => {
  return (
    <div className='bg-rosa-claro w-full h-[11rem] lg:h-[8rem] absolute bottom-0'>
        <div className=' hidden mx-[8rem] h-full items-center my-auto lg:flex flex-row justify-between'>
            <div className='w-[11rem]'>
                <img className='w-16 ml-0' src="/logofondo.jpg" alt="" />

            </div>
            <div className='flex flex-row gap-[1.75rem]'>
                <a href="">
                <img className='w-[2rem]' src="/instagram.png" alt="Instagram" />
                </a>
                <a href="">
                <img className='w-[2rem]' src="/wp.png" alt="WhatsApp" />
                </a>
            </div>
            <div className='flex flex-col w-[11rem] text-sm text-claro'>
                <p className=''>Copyright 2024 . Todos los derechos reservados.</p>
                <p>Desarrollado por Lautaro La Rosa</p>

            </div>
        </div>

        <div className='lg:hidden flex flex-col justify-between h-full py-[1.75rem]'>
        
                <div className='flex flex-row justify-between items-center mx-auto w-[11rem]'>
                    <img className='w-[2rem] h-[2rem]' src="/wp.webp" alt="WhatsApp" />
                    <img className='w-[3rem]' src="/logofondo.webp" alt="Logo taller" />
                    <img className='w-[2rem] h-[2rem]' src="/instagram.webp" alt="" />
                </div>
                <div className='flex flex-col text-center text-sm text-claro'>
                    <p>Copyright 2024 . Todos los derechos reservados.</p>
                    <p>Desarrollado y diseñado por Lautaro La Rosa</p>
                </div>
        </div>
    </div>
  )
}

export default Footer