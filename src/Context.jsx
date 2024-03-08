import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext();

export const Context = (props)=>{
   
    const [count, setCount] = useState(4);

    return(
        <>
          <CounterContext.Provider value={{count, setCount, name: 'gangadhar'}}>
             {props.children}
          </CounterContext.Provider>
        
        </>
    );
}
  
