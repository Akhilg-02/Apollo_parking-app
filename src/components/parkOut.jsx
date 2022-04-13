import { useState ,useEffect } from "react"


import "./Css/detail.css";

export const Parkout = () =>{
    const [state, setState] = useState([0]);

    
    const getData = () => {
        fetch(`http://localhost:3000/data`)
          .then((d) => d.json())
          .then((res) => {
            let data = res;
            setState(data);
            console.log(data);
          })
          .catch((err) => {
            console.log("error:", err);
          });
      };
    
      useEffect(() => {
        getData();
      }, []);

      const { name, rupees,time,vechile} = state[0]
    return(
        <>
        
        
        <div className="detail">
            <h2>Users Details</h2>
            <br />
            <h3>Name: {name}</h3>
            <h3>Vechile: {vechile}</h3>
            <h3>Time: {time}</h3>
            <h3>Rupees: Rs.{rupees}</h3>


        </div>
        
       
        
            

        
        </>
    )
}