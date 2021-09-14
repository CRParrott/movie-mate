import React from "react";

import PopularMovies from '../components/PopularMovies';
import PopularShows from '../components/PopularShows';
import UserWatch from '../components/UserWatch';

const Home = () => {
    return (
      <div className="container">
        <PopularMovies />
        <PopularShows />
        <UserWatch />
      </div>
    );
  };
  
  export default Home;