import React, { useState } from "react";
import { ReactDOM } from "react";
import  Cards  from "./Cards";
import cokesong from './db/cokesong';


const Home = () =>{
    const [list, setList] = useState(cokesong);
   
     const filtesong = (cat)=>{
             cokesong.Array.prototype.filter((farr)=>{
                // return(setList(farr.category === cat))
                console.log(setList(farr.category === cat))
             })
     }

     return(
         
     <>
     
     <nav className="navbarr mb-5">
        <div className="btn-group">
            <button className="btn-group__item">Home</button>
            <button className="btn-group__item" onClick={()=>filtesong("cokesong")}>Coke Songs</button>
            <button className="btn-group__item" onClick={()=>filtesong("latestsong")}>Latest Songs</button>
            <button className="btn-group__item" onClick={()=>filtesong("oldsong")}>OLd Songs</button>
        </div>
     </nav>
    
     <Cards custProp={list} />
     </>
     )
}

export default Home;