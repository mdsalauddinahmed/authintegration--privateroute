import React from 'react';

const Header = () => {
    return (
        <>
        <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
           </div>
         <div className="navbar bg-base-300">
         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
            <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
        </>
    );
};

export default Header;