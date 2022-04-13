import { Route, Routes } from "react-router-dom";
import { Home } from "./Main";
import { Parkout } from "./parkOut";


export const Root = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/parkOut" element={<Parkout/>}/>
        
        </Routes>
        
        </>
    )
}

