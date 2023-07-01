import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import '../../../src/App.css';

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Find a Doctor'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    const handleStickyHeader = () => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            headerRef.current.classList.add('sticky__header');
        } else {
            headerRef.current.classList.remove('sticky__header');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleStickyHeader);
        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <div
                        className={`navigation ${showMenu ? 'show__menu' : ''}`}
                        ref={menuRef}
                    >
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                                        className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                                        onClick={toggleMenu}
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden">
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                    <img className="w-full rounded-full" src={userImg} alt="" />
                                </figure>
                            </Link>
                        </div>

                        <Link to="/login">
                            <button className="bg-primaryColor py-2 px-2 text-white font-[600] h-[44px] flex items-center rounded-[50px]">
                                Login
                            </button>
                        </Link>

                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
