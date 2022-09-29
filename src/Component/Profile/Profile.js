import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import img from "../../images/img.png";
import { getFromLs, storeInLS } from "../../utilities/fakedb";
import "./Profile.css";

const Profile = (props) => {
  const [breakTime, setBreakTime] = useState();
  const { cart } = props;
  
  useEffect( () =>{
    const lsData = localStorage.getItem('break-time')
    setBreakTime(lsData)
  }, [])
  

  let totalTime = 0;
  for (const course of cart) {
    totalTime = totalTime + course.time;
  }

  const showBreakTime = (time) => {
    setBreakTime(time);
    localStorage.setItem('break-time', time);
  };
  

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
          <button onClick={() => showBreakTime(10)}>10m</button>
          <button onClick={() => showBreakTime(20)}>20m</button>
          <button onClick={() => showBreakTime(30)}>30m</button>
          <button onClick={() => showBreakTime(40)}>40m</button>
        </div>
      </div>

      <div>
        <h3>Exercise Details</h3>
        <div className="exercise-time">
          <h4>Exercise time: {totalTime}m</h4>
        </div>
        <br></br>
        <div className="break-time">
          <h4>Break time: {breakTime}m </h4>
        </div>
        <br></br>
      </div>

      <div className="activity-complete">
        <button type="">Activity Completed</button>
      </div>
    </div>
  );
};

export default Profile;
