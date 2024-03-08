import { useState, useEffect, useContext } from "react";
import "./App.css";
import { Getmethod } from "./Getmethod";
import { Hookeffect } from "./Hookeffect";
import { Postmethod } from "./Postmethod";
import { Button } from "./Button";
import {CounterContext} from './Context' 

function App() {

      const countstate = useContext(CounterContext);

      console.log(countstate);

  return (
    <>
       <h2>count is {countstate.count}</h2>
       <Button/>
       <Button/>
       <Button/>
       <Button/>

      {/* <Getmethod/> */}
      {/* <Postmethod/> */}
      {/* <Hookeffect/> */}
    </>
  );
}

export default App;
