import React, { useEffect, useState } from "react";


const User = () => {

    const [states, setStates] = useState([]);

    const getUser = async () => {
        const url = await fetch('http://localhost:3000/users');
        setStates(await url.json());
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
          <h3 className="text-center">User api data display using await and promises </h3>
          <div className="row">
                {
                    states.map((resp) => {
                        return (
                            <> 
                                <div className="col-md-4">
                                    <div className="card p-2">
                                        <div className="d-flex  ">
                                        <img src={resp.image} className="rounded" width="155" />
                                        <div className="ml-3 w-100 p-1">
                                            <h2 className="textleft">{resp.name}</h2>
                                            <p className="textleft">{resp.email}</p>
                                            <div className="d-flex justify-content-between rounded p-2 mt-2 stats">
                                                <div className="d-flex flex-column"><span className="articles">articles</span><span className="number1">{resp.articles}</span></div>
                                                <div className="d-flex flex-column"><span className="followers">followers</span> <span className="number2">{resp.articles}</span></div>
                                                <div className="d-flex flex-column"><span className="rating">rating</span> <span className="number3">{resp.articles}</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                               
                            </>
                        )
                    })
                }
            </div>
        </>
    )

}

export default User;