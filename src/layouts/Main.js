import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';

const Main = () => {
    return (
        <div>
          <Header></Header> 
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;