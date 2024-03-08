import React, {useContext} from 'react'
import {CounterContext} from './Context'

export const Button = ( ) => {

  const btnstate = useContext(CounterContext);

  return (
    <div>
        <button onClick={() => btnstate.setCount(btnstate.count + 1)}>Increment</button>
        <button onClick={() => btnstate.setCount(btnstate.count - 1)}>Increment</button>
        
    </div>
  )
}
