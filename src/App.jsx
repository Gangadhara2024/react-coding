import { useState, useEffect, useContext,} from "react";
import "./App.css";
import { Getmethod } from "./Getmethod";
import { Hookeffect } from "./Hookeffect";
import { Postmethod } from "./Postmethod";
import {Button} from './Button'
import { countContext } from "./Context";

function App() {

  // const stateCount = useContext(countContext);
  // console.log(stateCount);
  
  return (
    <>
       {/* <h2>count is {stateCount.count} </h2>
        <Button/>
        <Button/>
        <Button/>
        <Button/> */}

      {/* <Getmethod/> */}
      <Postmethod/>
      {/* <Hookeffect/> */}
    </>
  );
}

export default App;
