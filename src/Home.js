import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate=useNavigate();
    return (
        <div>
            <h3>This is Home page</h3>
            <button onClick={()=>{navigate('Details')}}>Details page</button>
        </div>
    );
}

export default Home;
