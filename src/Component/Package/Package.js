import React from 'react';
import './Package.css'

const Package = (props) => {
    const{picture, company, about, age, time} = props.package
    return (
        <div className='package'>
            <img src={picture} alt="" /> 
            <h4>Name: {company}</h4> <br></br>
            <p>{about}</p> <br></br>
            <p>For Age: {age}</p> <br></br>
            <p>Time required: {time}</p> <br></br>
            <button type="">Add to List</button>
        </div>
    );
};

export default Package;