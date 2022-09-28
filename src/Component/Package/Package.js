import React from 'react';
import './Package.css'

const Package = (props) => {
    const{picture, company, about, age, time} = props.package
    return (
        <div className='package'>
            <img src={picture} alt="" />
            <h4>Name: {company}</h4>
            <p>{about}</p>
            <p>For Age: {age}</p>
            <p>Time required: {time}</p>
            <button type="">Add to List</button>
        </div>
    );
};

export default Package;