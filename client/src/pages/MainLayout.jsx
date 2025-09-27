
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'; // Assuming you have a Navbar component

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
