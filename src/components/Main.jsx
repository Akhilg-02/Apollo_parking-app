import { useState } from "react";
import { Link } from "react-router-dom";

import "./Css/home.css";

export const Home = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async(e) =>{
        e.preventDefault()

        try {
            let res = await fetch("http://localhost:3000/data", {
              method: "POST",
              body: JSON.stringify({
                name: name,
                number: number,
                
              }),
            });

            let resJson = await res.json();
            if (res.status === 200) {
              setName("");
              setNumber("");
            
             setMessage("User created successfully");
            } else {
              setMessage("Some error occured");
            }
          } catch (err) {
            console.log(err);
          }
         
    }
 


  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="#">
            <img
              src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width="40"
              height="35"
              className="d-inline-block align-text-top"
            />
            THE PARKING APP
          </Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="parkOut">
                Park details
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ----------------------------------------------------------------------------------------- */}

      <br />
      <br />

      <div className="inpOuter">

          <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">

          <input
            type="text"
            placeholder="Vechile holder Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <select className="form-select" aria-label="Default select example">
          <option select>Type of vechile</option>
          <option value="1">Two Wheeler</option>
          <option value="2">Hatchback Car</option>
          <option value="3">SUV Car</option>
        </select>

        <br />
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Registeded vechile no:"
            className="form-control"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
            
        <div className="checkbox ">
            <span className="fw-bold">TIME:</span>
        
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label fw-bold" for="flexCheckDefault">
             0-2hr
          </label>

          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label fw-bold" for="flexCheckDefault">
            2-4hr
          </label>
        </div>

        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </>
  );
};
