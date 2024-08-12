import { useState } from 'react'
import Nav from './components/Nav'
import Introduccion from './components/Introduccion'
import Cursos from './components/Cursos'
import Nosotros from './components/Nosotros'
import Eltaller from './components/Eltaller'
import Horneado from './components/Horneado'



function App() {
 

  return (
    <div className="h-auto bg-[#FFF3ED] font-calibri pb-10 md:bg-[url('/public/fondo.png')] bg-[url('/public/fondo-mobile.png')] bg-cover bg-repeat-y selection:bg-rosa-claro">
      <Nav/>
      <Introduccion/>
      <h2 className='font-calibri font-bold text-[1.5rem] m-auto text-center w-fit'>Nuestros Cursos</h2>
      <Cursos/>
      <h2 className='font-calibri font-bold text-[1.5rem] m-auto text-center w-fit'>Nosotros</h2>
      <Nosotros/>
      <Eltaller/>
      <h2 className='font-calibri font-bold text-[1.5rem] m-auto text-center w-fit'>Otras Opciones</h2>
      <p className='text-sm md:text-xl font-light leading-7 md:leading-9 mx-[1.2rem] text-center md:mx-[7.2rem]'>En el erizo no solo damos clases si no que tambien brindamos otros servicios y armamos eventos pensados para que disfrutes y aprendas:</p>
      <Horneado/>
      
    </div>
  )
}

export default App

