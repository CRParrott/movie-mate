import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Community from './img/community_tv_series-239934497-large.jpg';
import Simpsons from './img/au_disneynews_thesimpsons_season31_incarticle_poster_8f0c2ae5.jpg';
import Dexter from './img/dexter_tv_series-197972047-large.jpg'

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
                  <img src={Community} className="card-img-top embed-responsive-item" alt="Community"></img>
                </div>
                <div className="rect">
                  <img src={Simpsons} className="card-img-top embed-responsive-item" alt="Simpsons"></img>
                </div>
                <div className="rect">
                  <img src={Dexter} className="card-img-top embed-responsive-item" alt="Dexter"></img>
                </div>
              </div>
            </div>
        </>
    )
}

export default PopularShows;