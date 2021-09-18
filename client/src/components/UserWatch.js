import React from "react";
import { Link } from "react-router-dom";
import Shrek1 from './img/shrek1.jpeg';
import Shrek2 from './img/Shrek2.jpeg';
import Shrek3 from './img/Shrek3.jpeg';

function UserWatch () {
    return (
        <>
                  <div className="container text-center">
        <h1 className="text-dark">What others are watching</h1>
      </div>
      <div className="flex-row ">
        <div className="col-md-4 col-12 text-center">
          <div className="card mr-2 d-inline-block shadow-lg h-70">
            <div className="card-body">
              <h3 className="card-title">Shrek 1 </h3>
              <img src={Shrek1} className="card-img-top embed-responsive-item"alt="Shrek 1 Cover Art"></img>
            </div>
          </div>
        </div>
                <div className="col-md-4 col-12 text-center">
                  <div className="card mr-2 d-inline-block shadow-lg h-70">
                    <div className="card-body">
                      <h3 className="card-title">Shrek 2 </h3>
                      <img src={Shrek2} className="card-img-top embed-responsive-item" alt="Shrek 1 Cover Art"></img>
                    </div>
                  </div>
                </div>

        <div className="col-md-4 col-12 text-center">
          <div className="card mr-2 d-inline-block shadow-lg h-70">
            <div className="card-body">
              <h3 className="card-title">Shrek 3</h3>
              <img src={Shrek3} className="card-img-top embed-responsive-item" alt="Shrek 1 Cover Art"></img>
           </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default UserWatch;
