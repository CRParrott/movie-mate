import React from "react";
import "../index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { Link } from "react-router-dom";

function PopularShows () {
    return (
        <>
            <div className="cover">
              <div className="overlay"></div>
              <div className="content text-center">
                <h1>Popular Shows</h1>
              </div>
            </div>
            <div className="container-fluid text-center">
              <div className="options d-flex flex-md-row flex-wrap justify-content-center">
                <div className="rect">
                  <img src="" alt=""></img>
                </div>
                <div className="rect">
                  <img src="" alt=""></img>
                </div>
                <div className="rect">
                  <img src="" alt=""></img>
                </div>
                <div className="rect">
                  <img src="" alt=""></img>
                </div>
              </div>
            </div>
        </>
    )
}

export default PopularShows;