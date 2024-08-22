import { useState,useContext } from 'react'
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


  return (
    <div className={`h-auto min-h-lvh ${clicked ? 'overflow-none' : ''} bg-[#FFF3ED] font-calibri pb-10 md:bg-[url('/fondo.webp')] bg-[url('/fondo-mobile.webp')] bg-cover bg-repeat-y selection:bg-rosa-claro`}>
      <Nav/>
      <section id='inicio'>
      <Introduccion/>
      </section>
      <section id='cursos'>
      <h2 className='font-calibri font-bold text-oscuro text-[1.5rem] m-auto text-center w-fit'>Nuestros Cursos</h2>
      <Cursos/>
      </section>
      <section id='nosotros'>
      <h2 className='font-calibri text-oscuro font-bold text-[1.5rem] m-auto text-center w-fit'>Nosotros</h2>
      <Nosotros/>
      </section>
      <Eltaller/>
      <section id='opciones'>
      <h2 className='font-calibri font-bold text-oscuro text-[1.5rem] m-auto text-center w-fit'>Otras Opciones</h2>
      <p className='text-sm md:text-xl text-claro mt-5 md:mt-8 font-light leading-7 md:leading-9 mx-[1.2rem] text-center md:mx-[7.2rem]'>En el erizo no solo damos clases si no que tambien brindamos otros servicios y armamos eventos pensados para que disfrutes y aprendas:</p>
      <Horneado/>
      <Eventos/>
      </section>
      <section  id='contacto'>
      <h2 className='font-calibri font-bold text-oscuro text-[1.5rem] mt-5 md:mt-8 mx-auto text-center w-fit'>Contactanos</h2>
      <Contacto/>
      </section>


      <Footer/>
      
    </div>
  )
}

export default App

