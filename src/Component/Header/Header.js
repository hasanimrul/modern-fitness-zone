import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <button>
        <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Modern Fitness
        Zone
      </button>
      <div>
        <a href="/trainning">Trainning</a>
        <a href="/packages">Packages</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Header;
