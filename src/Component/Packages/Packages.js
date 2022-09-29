import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import Profile from "../Profile/Profile";
import "./Packages.css";

const Packages = () => {
  const [packages, setdatas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setdatas(data));
  }, []);


  const handleSelectedPackages = (packages) =>{
    console.log(packages);
    const newCart = [...cart, packages] ;
    setCart(newCart);
  }
  return (
    <div className="packages-container">
      <div className="package-container">
        {packages.map((data) => (
          <Package package={data} 
          key={data.id}
          handleSelectedPackages = {handleSelectedPackages}
          ></Package>
        ))}
      </div>

      <div className="profile-container">
        
        <Profile cart={cart}></Profile>
      </div>
    </div>
  );
};

export default Packages;
