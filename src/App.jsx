import { useState,useContext,useRef,useEffect } from 'react'
import Nav from './components/Nav'
import Introduccion from './components/Introduccion'
import Cursos from './components/Cursos'
import Nosotros from './components/Nosotros'
import Eltaller from './components/Eltaller'
import Horneado from './components/Horneado'
import Eventos from './components/Eventos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import ErizoContext from './context/erizoContext'



function App() {
  const {clicked,setClicked} = useContext(ErizoContext)
  const { registerRefs } = useContext(ErizoContext);
  const appRef = [useRef(null),useRef(null),useRef(null),useRef(null)];

  useEffect(() => {
    // Registra las referencias en el contexto
    appRef.forEach(ref => registerRefs(ref));
  }, [registerRefs]);
  

  return (
    <div className={`h-auto min-h-lvh ${clicked ? 'overflow-none' : ''} bg-[#FFF3ED] font-calibri pb-10 md:bg-[url('/fondo.webp')] bg-[url('/fondo-mobile.webp')] bg-cover bg-repeat-y selection:bg-rosa-claro`}>
      <Nav/>
      <section id='inicio'>
      <Introduccion/>
      </section>
      <section  id='cursos'>
      <h2 className='fade-in-up-2 font-calibri font-bold text-oscuro text-[1.5rem] m-auto text-center w-fit'>Nuestros Cursos</h2>
      <Cursos/>
      </section>   
      <section loading="lazy" id='nosotros'>
      <h2 ref={appRef[3]} className='fade-in-up-scroll font-calibri text-oscuro font-bold text-[1.5rem] m-auto text-center w-fit'>Nosotros</h2>
      <Nosotros/>
      </section>
      <Eltaller/>
      <section loading="lazy" id='opciones'>
      <h2 ref={appRef[0]} className='fade-in-up-scroll font-calibri font-bold text-oscuro text-[1.5rem] m-auto text-center w-fit'>Otras Opciones</h2>
      <p  ref={appRef[1]} className='fade-in-up-scroll text-sm md:text-xl text-claro mt-5 md:mt-8 font-light leading-7 md:leading-9 mx-[1.2rem] text-center md:mx-[7.2rem]'>En el erizo no solo damos clases si no que tambien brindamos otros servicios y armamos eventos pensados para que disfrutes y aprendas:</p>
      <Horneado/>
      <Eventos/>
      </section>
      <section loading="lazy" id='contacto'>
      <h2 ref={appRef[2]} className='fade-in-up-scroll font-calibri font-bold text-oscuro text-[1.5rem] mt-5 md:mt-8 mx-auto text-center w-fit'>Contactanos</h2>
      <Contacto/>
      </section>


      <Footer/>
      
    </div>
  )
}

export default App

