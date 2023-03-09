import React from 'react';

const Header = () => {
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
                        <li><a class="nav-link scrollto" href="/complaint">Complaint</a></li>
                        <li><a class="nav-link scrollto" href="/register">Login/Register</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header