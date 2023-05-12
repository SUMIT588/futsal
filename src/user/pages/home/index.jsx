import { Link, useNavigate } from "react-router-dom";

import { HomeWrapper } from "./homeStyle";
import React from "react";
import futsal1 from "../../../common/img/futsal1.jpg";
import futsal_img from "../../../common/img/futsal_Img.jpg";

const Home = () => {

  return (
    <HomeWrapper>
      <div className="firstContainer">
        <h1>Welcome to Futsal App</h1>
        <p>We offer the best futsal experience in town.</p>

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Book a Futsal Court</h5>
                <p className="card-text">
                  Book a futsal court online and enjoy playing with your
                  friends.
                </p>
                <Link to="/booking" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage your Bookings</h5>
                <p className="card-text">
                  Manage your futsal court bookings and keep track of your
                  playing history.
                </p>
                <Link to="/bookings" className="btn btn-primary">
                  Manage Bookings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="secondContainer">
        <img src={futsal_img} alt="futsalImage" />
        <img src={futsal1} alt="futsalImage1" />
      </div>
    </HomeWrapper>
  );
};

export default Home;
