import React from 'react';
import Header from './header/header';
import { MainStyle } from '../page/main/style';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Nav from './header/Nav';
import { useDispatch, useSelector } from 'react-redux';
const Layout = () => {
    const { nav } = useSelector((state) => state.header);
    return (
        <div className="wrap">
            {nav && <Nav />}
            <Header />
            <MainStyle className="main">
                <Outlet />
            </MainStyle>
            <Footer />
        </div>
    );
};

export default Layout;
