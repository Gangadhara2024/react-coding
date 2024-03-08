import React, { useEffect, useState } from 'react'

export const Hookeffect = () => {

    const [data, setData] = useState(0);

    // useEffect(() => {
    //    setTimeout(() => {
    //     setData((data) => data + 1);
    //    }, 1000);
    // });

    useEffect(() => {
        setTimeout(() => {
         setData((data) => data + 1);
        }, 1000);
     }, []);
    
  return (
    <div>
       <h4>I have rendered {data} times</h4>
    </div>
  )
}

