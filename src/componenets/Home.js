import React, { useContext } from 'react';
import { AuthContext } from '../constexts/UserContext';

const Home = () => {
    const {user} =useContext(AuthContext);
    return (
        <div>
            This is Home page for  {user.email} 
        </div>
    );
};

export default Home;