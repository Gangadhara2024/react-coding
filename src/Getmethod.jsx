import React, { useEffect, useState } from "react";
import axios from "axios";

export const Getmethod = () => {
  const [gets, setGets] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setGets(response.data);

      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Get details</h2>
      {gets && 
        (<ul>
           {gets.map(item => <li key={item.id} > {item.title} </li>)}
        </ul>)}
    </div>
  );
};
