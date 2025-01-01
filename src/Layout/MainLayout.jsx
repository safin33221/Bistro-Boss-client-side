import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    const location = useLocation()
    console.log(location.pathname);
    const noNandF = location.pathname.includes('login')
    return (
        <div>
            {
                noNandF || <nav>
                    <Navbar />
                </nav>
            }
            <main className='min-h-screen'>
                <Outlet />
            </main>
            {
                noNandF || <footer>
                    <Footer />
                </footer>
            }
        </div>
    );
};

export default MainLayout;