import React, { createContext } from 'react'
import { useState } from 'react';

export const countContext = createContext();

export const Context = (props) => {

    const [count, setCount] = useState(1);
     
  return (
    <div>
         <countContext.Provider value={{count, name: 'hello', setCount}}>
          {props.children}
         </countContext.Provider>
    </div>
  )
}


