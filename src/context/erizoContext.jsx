import React from 'react'
import { createContext, useState,useEffect } from "react";

const ErizoContext = createContext()

export const ErizoProvider = ({children}) => {
    const [clicked,setClicked] = useState(false)

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

  return (
    <ErizoContext.Provider value={{clicked,setClicked}} >
        {children}
    </ErizoContext.Provider>
  )
}

export default ErizoContext