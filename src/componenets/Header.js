import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../constexts/UserContext';

const Header = () => {
    const {user} =useContext(AuthContext);
    console.log("context",user)
    return (
        <>
         <div className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Auth-Integration</Link>
             <Link className="btn btn-ghost normal-case text-xl" to ='/'>Home</Link>
             <Link className="btn btn-ghost normal-case text-xl" to ='/login'>Log In</Link>
             <Link className="btn btn-ghost normal-case text-xl" to ='/register'>Register</Link>
             {user?.displayName && <span> Welcome,to {user.displayName}</span>}
          </div>
        </>
    );
};

export default Header;