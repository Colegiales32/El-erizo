import React, { createContext, useState, useEffect, useRef } from 'react';

const ErizoContext = createContext();

export const ErizoProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const refs = useRef([]); // Usar un array para almacenar referencias
  const animatedElements = useRef(new Set());

  const handleScroll = () => {
    refs.current.forEach(ref => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Comprueba si el elemento es visible en la ventana
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Solo agrega la clase si el elemento no ha sido animado
        if (!animatedElements.current.has(element)) {
          element.classList.add('visible'); // Agrega la clase 'visible' para activar la animación
          animatedElements.current.add(element); // Marca el elemento como animado
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Agrega el listener de scroll

    return () => window.removeEventListener('scroll', handleScroll); // Limpieza del listener
  }, []);

  useEffect(() => {
    if (clicked) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    }
  }, [clicked]);

  // Define registerRefs como una función que agrega la referencia al array
  const registerRefs = (ref) => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.push(ref);
    }
  };

  return (
    <ErizoContext.Provider value={{ clicked, setClicked, registerRefs }}>
      {children}
    </ErizoContext.Provider>
  );
};

export default ErizoContext;
