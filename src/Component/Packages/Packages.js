import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {

const [packages, setdatas] = useState([]);
// console.log(datas);

useEffect(() =>{
fetch('data.json')
.then(res => res.json())
.then(data => setdatas(data))
}, [])


    return (
        <div>
            <h2>Select your package</h2>
            
            <div className='packages-container' >
            <div className='package-container'>
                
            {
                packages.map(data => <Package package={data} key={data.id}></Package>)
            }
            </div>
            <div className='profile-container'>
                <h1>Profile Section</h1>
            </div>
        </div>
        </div>
    );
};

export default Packages;