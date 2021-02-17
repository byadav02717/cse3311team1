import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    const[click, setClick]= useState(false);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-conatiner">
                <Link to="/" className="navbar-logo">
                    Discuss <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon'onClick={handleClick}>
                    <i className ={click? 'fas fa-times' : 'fas fa-bars'} />

                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>

                    </li>
                </ul>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>

                    </li>
                </ul>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>

                    </li>
                </ul>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
