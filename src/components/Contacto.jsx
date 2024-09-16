import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Boton from './Boton';


const Contacto = () => {
    const [mensajeEnviado, setMensajeEnviado] = useState(false)
    const refForm = useRef();

    const handleEnviado = (estado)=> {
        setMensajeEnviado(estado)
        
        console.log(mensajeEnviado)
        
        setTimeout(() => {
            setMensajeEnviado(false)
        }, 3000);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por Default del Elemento
        const serviceId = "service_38c4hpn";
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



    const ref = useRef(null);

  const handleScroll = () => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Comprueba si el elemento es visible
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      element.classList.add('visible'); // Agrega la clase 'visible' para activar la animación
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Agrega el listener de scroll

    // Limpieza del listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div ref={ref} className='fade-in-up-scroll flex mt-5 md:mt-8 flex-col-reverse lg:flex-row mx-[1.2rem] md:mx-[14.2rem] lg:mx-[7.2rem]  xl:mx-auto rounded-[10px] bg-white sombra max-w-[65rem] lg:max-h-[35rem] overflow-hidden mb-[14rem]'>
        <div className='flex flex-col pt-[1rem]  justify-between bg-[#FCDED3] w-full lg:w-[45%] lg:min-w-[20rem] h-[30rem] lg:h-[35rem]'>
            <h3 className='text-[1.6rem] lg:text-[1.4rem] mx-auto text-oscuro'>Medios de contacto</h3>
            <div className='flex mx-auto gap-[1.5rem] py-[1rem] flex-col justify-between'>
                <div className='flex flex-row justify-start items-center gap-[1rem]'>
                    <img className='object-cover' src="/mail.webp" alt="Mail" />
                    <p className='text-base text-claro font-light'>elerizoespaciocreativo@gmail.com</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-[1rem]'>
                    <img src="/instagram.webp" alt="Instagram" />
                    <p className='text-base text-claro font-light'>@elerizoespaciocreativo</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-[1rem]'>
                    <img src="/wp.webp" alt="WhatsApp" />
                    <p className='text-base text-claro font-light'>11 6234 6903</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-[1rem]'>
                    <img src="/ubicacion.webp" alt="Ubicacion" />
                    <p className='text-base text-claro font-light'>Cabrera 5356, Palermo Hollywood.</p>
                </div>
               
            </div>
            <div className='h-[16rem] overflow-hidden'>
                <img className='object-cover w-full h-full' src="/contacto.webp" alt="" />
            </div>
            
        </div>
        <div className='bg-[#ECb469] flex flex-col w-full '>
            <div className='flex flex-col mx-[2.1rem] lg:mx-[5rem] justify-around h-[35rem] lg:gap-[2rem] pt-[1.4rem]'>
                <p className='text-base lg:text-lg text-center text-oscuro leading-9 font-light '>Dejanos  tu consulta junto con tus datos de contacto y cuanto antes vamos a comunicarnos con vos para responderte todas tus dudas.</p>
                <form action=""  ref={refForm} onSubmit={handleSubmit} className=' flex flex-col text-claro gap-2 md:gap-[1rem] '>        
                        <input type="text " className='rounded-md  outline-none focus:ring-2 ring-celeste ring-inset focus:ring-offset-1 transition-all ease-in duration-500 text-claro  h-[2.2rem] xl:h-[3rem] px-[1rem] text-sm lg:text-lg bg-rosa-claro'  placeholder='Tu Nombre' name='nombre' required />            
                        <input type="email" className='rounded-md outline-none focus:ring-2 ring-celeste ring-inset focus:ring-offset-1 transition-all ease-in duration-500 text-claro  h-[2.2rem] xl:h-[3rem]  px-[1rem] text-sm lg:text-lg bg-rosa-claro'  placeholder='Email' name='email' required />               
                        <input type="tel" required className='rounded-md outline-none focus:ring-2 ring-celeste ring-inset focus:ring-offset-1 transition-all ease-in duration-500 text-claro  h-[2.2rem] xl:h-[3rem]  px-[1rem] text-sm lg:text-lg bg-rosa-claro'   placeholder='Telefono' name='telefono'/>                     
                       <textarea name="mensaje" id="" placeholder='Dejanos tu mensaje' className='rounded-md outline-none focus:ring-2 ring-celeste ring-inset focus:ring-offset-1 transition-all ease-in duration-500 text-claro  h-[8rem] p-[1rem] text-sm lg:text-lg bg-rosa-claro' required />
                       
                       <div className={`${mensajeEnviado===true ? 'h-11' : 'h-0'} flex justify-center rounded-lg items-center transition-all duration-200 bg-green-600`}>
                    <p className={`${mensajeEnviado === true ? 'opacity-1' : 'opacity-0'} text-center my-auto text-lg  font-path font-bold`}>Mensaje enviado</p>
                </div>

                <div className='w-full text-center lg:text-right pb-[1rem]'>
                <Boton texto='Enviar'/>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacto