import React from 'react';
import Cookies from 'universal-cookie';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = () => {
    const cookies = new Cookies();
    const username = cookies.get('username');
    const fullName = cookies.get('fullName');
    const isAdmin = cookies.get('isAdmin');
    const handleLogout = () => {
        cookies.remove("username");
        cookies.remove("email");
        cookies.remove("contact");
        cookies.remove("fullName");
        cookies.remove("isAdmin");
        window.location.replace('http://localhost:3000/login');
    }
    console.log(isAdmin === 'true');
    return (
        <header id="header" class="fixed-top header-inner-pages">
            <div class="container d-flex align-items-center justify-content-between">
                <h1 class="logo"><a href="/">Drain Control</a></h1>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto active" href="/">Home</a></li>
                        <li><a class="nav-link scrollto" href="/#about">About</a></li>
                        <li><a class="nav-link scrollto" href="/#services">Services</a></li>
                        <li><a class="nav-link scrollto" href="/#contact">Contact</a></li>
                        {isAdmin === 'true' ? <li><a class="nav-link scrollto" href="/list-complain">List Complain</a></li> : ''}
                        {username && <li><a class="nav-link scrollto" href="/complaint">Complain</a></li>}
                        {!username && <li><a class="nav-link scrollto" href="/register">Login/Register</a></li>}
                        {username && (
                            <ul className="navbar-logout" style={{ margin: '0 1rem', padding: '0.2rem' }}>
                                <li>
                                    <span className="nav-link-logout scrollto" onClick={handleLogout} style={{ fontSize: '12px' }}>
                                        Logout &nbsp;&nbsp;
                                        <ExitToAppIcon style={{ fontSize: '12px' }} />
                                    </span>
                                </li>
                            </ul>
                        )}
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {fullName && <h1 class="logo"><a href="/">Welcome {fullName}</a></h1>}
            </div>
        </header>
    )
}

export default Header