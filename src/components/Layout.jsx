// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar'; // Assuming it's in the same folder structure

const Layout = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);

export default Layout;