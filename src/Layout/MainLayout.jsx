import React from 'react';
import Navbar from '../Component/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </nav>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;