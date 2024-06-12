import Navigation from './Navigation';
import * as React from 'react';
import { APP_ROUTES } from './Navigation/constants';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';

const Layout = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className='appbar'>
                <div className='logo-links'>
                    <div className='logo'></div>
                    <div className='links'>
                        <ul>
                            {console.log(location.pathname)}
                            {APP_ROUTES.map(route => (
                                <li>
                                    <a className={ location.pathname === route.url && 'active' } onClick={() => navigate(route.url)}>{route.label.toUpperCase()}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='profile'>
                    <button>Logout</button>
                </div>
            </div>
            <Navigation />
        </>
    );
}

export default Layout;