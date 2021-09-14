import React from "react";
import { Link } from "react-router-dom";

function PopularMovies () {
    return (
        <>
                  <div className="cover">
        <div className="overlay"></div>
        <div className="content text-center">
          <h1>Popular Movies</h1>
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
};

export default PopularMovies

