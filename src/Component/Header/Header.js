import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/header">
        <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Modern Fitness
        Zone
      </a>
    </div>
  );
};

export default Header;
