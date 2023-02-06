import React from 'react'
import { createContext, useState } from "react";

export const Display = createContext("")

const Context = ({children}) => {

    const[singleImage, setSingleImage] = useState([])
    const[description, setDescription] = useState([])
    

  return (
    <Display.Provider value={{singleImage, setSingleImage, description, setDescription}}>
        {children}
    </Display.Provider>
  )
}

export default Context