import React, { useState } from "react";
import axios from "axios";

export const Postmethod = () => {
  const [form, setForm] = useState({
    userId: 1,
    title: "",
    completed: false,
  });

  const URL = "https://jsonplaceholder.typicode.com/todos";

  const handleform = async(event) => {
     event.preventDefault();

     try{
      const response = await axios.post(URL, form);
      console.log(response.data);
     }
     catch(error){
      console.log(error);
     }
  }

  return (
      <>
      <form onSubmit={handleform}>
        <input type="text" onChange={event => setForm({...form, title: event.target.value})}/>
        <button type="submit">Submit</button>
      </form>
      </>
    
  );
};
