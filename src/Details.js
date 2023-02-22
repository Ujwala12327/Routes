import React from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate=useNavigate()
    return (
        <div>
            <h3>Details page</h3>
            <button onClick={()=>{navigate(-1)}}>Go back</button>
        </div>
    );
}

export default Details;
