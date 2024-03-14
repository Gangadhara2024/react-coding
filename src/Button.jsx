import { useContext } from "react";
import { countContext } from "./Context";

export const Button = () => {

  const btnContext = useContext(countContext);

  return (
    <div>
      <button onClick={() => btnContext.setCount(btnContext.count + 1)}>Increment</button>
      <button onClick={() => btnContext.setCount(btnContext.count - 1)}>decrement</button>
    </div>
  );
};
