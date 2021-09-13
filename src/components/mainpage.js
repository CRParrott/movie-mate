import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Home = () => {
    return (
        <div className="container">
            <Login />
            <Signup />
        </div>
    );
};

export default Home;
