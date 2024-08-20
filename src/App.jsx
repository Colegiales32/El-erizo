import { useState } from 'react'
import Nav from './components/Nav'
import Introduccion from './components/Introduccion'
import Cursos from './components/Cursos'
import Nosotros from './components/Nosotros'
import Eltaller from './components/Eltaller'
import Horneado from './components/Horneado'
import Eventos from './components/Eventos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'



function App() {
 

  return (
    <div className="h-auto min-h-lvh bg-[#FFF3ED] font-calibri pb-10 md:bg-[url('/public/fondo.png')] bg-[url('/public/fondo-mobile.png')] bg-cover bg-repeat-y selection:bg-rosa-claro">
      <Nav/>
      <Introduccion/>
      <h2  id='cursos' className='font-calibri font-bold text-oscuro text-[1.5rem] m-auto text-center w-fit'>Nuestros Cursos</h2>
      <Cursos/>
      <h2 id='nosotros' className='font-calibri text-oscuro font-bold text-[1.5rem] m-auto text-center w-fit'>Nosotros</h2>
      <Nosotros/>
      <Eltaller/>
      <h2 id='opciones' className='font-calibri font-bold text-oscuro text-[1.5rem] m-auto text-center w-fit'>Otras Opciones</h2>
      <p className='text-sm md:text-xl text-claro mt-5 md:mt-8 font-light leading-7 md:leading-9 mx-[1.2rem] text-center md:mx-[7.2rem]'>En el erizo no solo damos clases si no que tambien brindamos otros servicios y armamos eventos pensados para que disfrutes y aprendas:</p>
      <Horneado/>
      <Eventos/>
      <h2 id='contacto' className='font-calibri font-bold text-oscuro text-[1.5rem] mt-5 md:mt-8 mx-auto text-center w-fit'>Contactanos</h2>
      <Contacto/>


      <Footer/>
      
    </div>
  )
}

export default App

