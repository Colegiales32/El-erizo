import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contacto = () => {
    const [mensajeEnviado, setMensajeEnviado] = useState(false)
    const refForm = useRef();

    const handleEnviado = (estado)=> {
        setMensajeEnviado(estado)
        
        console.log(mensajeEnviado)
        
        setTimeout(() => {
            setMensajeEnviado(false)
        }, 4000);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por Default del Elemento
        const serviceId = "service_p51ujsg";
        const templateId= "template_0izxsir";
        
        const apikey = "4zJBLlGcN_nk6gRGs";
    
        emailjs.sendForm(serviceId,templateId,refForm.current,apikey)
        .then(()=>{ 
            handleEnviado(true)
            refForm.current.reset();;
        })
        .catch (()=> {
            handleEnviado(false);
            
        })
    }


  return (
    <div className='flex mt-5 md:mt-8 flex-col-reverse lg:flex-row mx-[1.2rem] md:mx-[7.2rem] xl:mx-auto rounded-[10px] bg-white sombra max-w-[75rem] overflow-hidden mb-[14rem]'>
        <div className='flex flex-col pt-[2.4rem]  justify-between bg-[#FCDED3] w-full lg:w-[45%] h-[43rem]'>
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
            <div className='flex flex-col mx-[2.1rem] lg:mx-[5rem] gap-[2.5rem] pt-[2.4rem]'>
                <p className='text-lg text-center text-oscuro leading-9 font-light '>Dejanos  tu consulta junto con tus datos de contacto y cuanto antes vamos a comunicarnos con vos para responderte todas tus dudas.</p>
                <form action=""  ref={refForm} onSubmit={handleSubmit} className=' flex flex-col text-claro  gap-[1.25rem] '>        
                        <input type="text " className='rounded-md h-[2.2rem] lg:h-[3.5rem] px-[1rem] text-sm lg:text-lg bg-rosa-claro'  placeholder='Tu Nombre' name='nombre' required />            
                        <input type="email" className='rounded-md h-[2.2rem] lg:h-[3.5rem] px-[1rem] text-sm lg:text-lg bg-rosa-claro'  placeholder='Email' name='email' required />               
                        <input type="number" required className='rounded-md h-[2.2rem] lg:h-[3.5rem] px-[1rem] text-sm lg:text-lg bg-rosa-claro'   placeholder='Telefono' name='telefono'/>                     
                       <textarea name="mensaje" id="" placeholder='Dejanos tu mensaje' className='rounded-md h-[8rem] lg:h-[10rem] p-[1rem] text-sm lg:text-lg bg-rosa-claro' required />

                </form>
                <div className='w-full text-center lg:text-right pb-[1rem]'>
                <button onClick={handleEnviado} class="w-[8rem] h-[3rem] pl-[1rem] pr-[1rem] py-[0.5rem] bg-[#51cec1] rounded-[1rem] justify-center items-center inline-flex lg:ml-0">
                    <a class="text-center text-[#272727] text-base font-bold font-['Calibri']">Enviar</a>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacto