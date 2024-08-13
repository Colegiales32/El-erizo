import React from 'react'

const Contacto = () => {
  return (
    <div className='flex mt-5 md:mt-8 flex-col lg:flex-row mx-[1.2rem] md:mx-[7.2rem] xl:mx-auto rounded-[10px] bg-white sombra max-w-[75rem] overflow-hidden'>
        <div className='flex flex-col pt-[2.4rem] justify-between bg-[#FCDED3] w-full lg:w-[45%] h-[40rem]'>
            <h3 className='text-[1.6rem] mx-auto text-oscuro'>Medios de contacto</h3>
            <div className='flex mx-auto gap-[1.44rem] flex-col justify-between'>
                <div className='flex flex-row justify-start gap-[1rem]'>
                    <img className='' src="./public//mail.png" alt="Mail" />
                    <p className='text-lg text-claro font-light'>elerizoespaciocreativo@gmail.com</p>
                </div>
                <div className='flex flex-row justify-start gap-[1rem]'>
                    <img src="./public/instagram.png" alt="Instagram" />
                    <p className='text-lg text-claro font-light'>@elerizoespaciocreatiivo</p>
                </div>
                <div className='flex flex-row justify-start gap-[1rem]'>
                    <img src="./public/wp.png" alt="WhatsApp" />
                    <p className='text-lg text-claro font-light'>XX-XXXX-XXXX</p>
                </div>
                <div className='flex flex-row justify-start gap-[1rem]'>
                    <img src="./public/ubicacion.png" alt="Ubicacion" />
                    <p className='text-lg text-claro font-light'>Cabrera 5356, Palermo Hollywood.</p>
                </div>
               
            </div>
            <div className='h-[16rem] overflow-hidden'>
                <img className='object-cover w-full h-full' src="/contacto.jpg" alt="" />
            </div>
            
            
        </div>
        <div className='bg-[#ECb469] flex flex-col w-full '>
            <div className='flex flex-col pt-[2.4rem]'>
                <p className='text-lg text-center text-oscuro leading-9 font-light '>Dejanos  tu consulta junto con tus datos de contacto y cuanto antes vamos a comunicarnos con vos para responderte todas tus dudas.</p>
                <form action="">

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacto