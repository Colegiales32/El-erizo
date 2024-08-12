import { useState } from 'react'
import Nav from './components/Nav'
import Introduccion from './components/Introduccion'
import Cursos from './components/Cursos'
import Nosotros from './components/Nosotros'
import Eltaller from './components/Eltaller'



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
      
      
    </div>
  )
}

export default App

