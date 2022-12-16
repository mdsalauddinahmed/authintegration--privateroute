import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../constexts/UserContext';

const Header = () => {
    const {user,logOut} =useContext(AuthContext);
    console.log("context",user)

    const handleSignOut=()=>{
        logOut()
        .then(()=>{

        }).catch(error =>console.error(error))
    }
    return (
        <>
         <div className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Auth-Integration</Link>
             <Link className="btn btn-ghost normal-case text-xl" to ='/'>Home</Link>
             <Link className="btn btn-ghost normal-case text-xl" to ='/login'>Log In</Link>
             <Link className="btn btn-ghost normal-case text-xl" to ='/register'>Register</Link>
             <Link className="btn btn-ghost normal-case text-xl" to ='/orders'>Orders</Link>
             {user?.email && <span> Welcome,to {user.email}</span>}
             {
                user?.email ?
                <button onClick={handleSignOut} className="btn btn-sm">Logout</button>
                :<Link to ='/login'>
                    <button className='btn btn-sm'>Log In</button>
                </Link>
             }
          </div>
        </>
    );
};

export default Header;