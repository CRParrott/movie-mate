import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import trendingMovies from "./api/trendingMovie";

function PopularMovies () {
  return (
    trendingMovies()
  )
};

export default PopularMovies;

