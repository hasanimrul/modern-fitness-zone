import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../../images/img.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="user-info">
        <img src={img} alt="" />
        <div>
          <h4>Imrul Hasan</h4>
          <h6>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>{" "}
            Dhaka,Bangladesh
          </h6>
        </div>
      </div>

      <div className="user-details">
        <div>
          <h3>
            70<small>kg</small>
          </h3>
          <p>Weight</p>
        </div>
        <div>
          <h3>6.5</h3>
          <p>Height</p>
        </div>
        <div>
          <h3>
            25<small>yrs</small>
          </h3>
          <p>Age</p>
        </div>
      </div>

      <div>
        <h3>Add a break</h3>
        <div className="add-a-break">
          <button>10m</button>
          <button>20m</button>
          <button>30m</button>
          <button>40m</button>
        </div>
      </div>

      <div>
        <h3>Exercise Details</h3>
        <div className="exercise-time">
            <h4>Exercise time</h4>
        </div>
        <br></br>
        <div className="break-time">
            <h4>Break time</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
