import React from "react";
import { ReactDOM } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as 
    Link,
   
  } from "react-router-dom";

const Cards = ({ custProp }) => {
    
    return (

        <>
        <div className="row">
            {custProp.map((aaryElemnt, index) => {
                 
                return (
                    <>
                   
                        <div className="col-sm" key={index}>
                            <div className="card" style={{ width: 400 }}>
                                <img className="card-img-top" src={aaryElemnt.cover_imag} alt="Cover_image" />
                                <div className="card-body">
                                    <h4 className="card-title">{aaryElemnt.song}<span>{aaryElemnt.category}</span></h4>
                                    <p className="card-text">{aaryElemnt.artist}</p>
                                    <a href={aaryElemnt.url} className="btn btn-primary">{aaryElemnt.url}</a>
                                </div>
                            </div>
                        </div>
                    </>
                )

            })}
       </div>
        </>

    )
}

export default Cards;