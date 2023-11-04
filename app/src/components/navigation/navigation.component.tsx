import React from 'react';
import { useEffect } from 'react';
import { Item } from '../../application-data/navbar-config'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './navigation.style.scss'
import { FaAngleDown } from 'react-icons/fa'
// import logo from '../../assets/logo-s.png';
import logo from '../../assets/logo-xsofit.png';
import logoMobile from '../../assets/logo-xsofit-mobile.png';
import { Link } from 'react-scroll'

interface NavigationProps {
    items: Item[];
}

const Navigation = ({ items }: NavigationProps) => {

    const [isToggled, setIsToggled] = useState(false);
    const [closeSubMenu, setCloseSubMenu] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const screenSizes = {
        small: 720
    }

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 960);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize to set initial value
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSubMenu = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.currentTarget.classList.toggle('navbar-container__menu-sub-menu--toggled');
    }

    const renderItems = () => items.map((item, index) => (
        <li key={index}>
            {item.url
                ? <Link
                    activeClass="active"
                    to={item.url}
                    spy={false}
                    // smooth={true}
                    delay={0}
                    smooth={'linear'}
                    offset={item.offset}
                    duration={index * 200}
                    onClick={() => {
                        closeMenu(true);
                    }}
                >
                    {item.name}
                </Link>
                : <div onClick={toggleSubMenu} className='navbar-container__menu-item'>
                    <span>
                        {item.name}
                        <FaAngleDown className='navbar-container__menu-arrow-icon' />
                    </span>
                    {item.children && renderChildren(item.children)}
                </div>
            }
        </li>

    ))

    const renderChildren = (children: Item[]) => (
        <ul className="navbar-container__menu-sub-menu navbar-container__menu-sub-menu--toggled">
            {children.map((child, index) => (
                <li key={index}>
                    <Link to={child.url!} onClick={() => closeMenu(true)}>
                        {child.name}
                    </Link>
                </li>
            ))}
        </ul>
    )

    const closeMenu = (closeSubMenu = false) => {
        setIsToggled(false);
        if (closeSubMenu && window.innerWidth > screenSizes.small) {
            setCloseSubMenu(true)
            setTimeout(() => setCloseSubMenu(false), 0)
        }
    }



    return (
        <>
            <nav className='main-navbar'>
                <div className="navbar-container">
                    <div className="navbar-container__logo">
                        {isLargeScreen
                            ? <img src={logo} alt="Company logo" />
                            : <img src={logoMobile} alt="Company logo" />
                        }


                        {/* <FaReact /><span> + </span><TbBrandTypescript /> */}
                    </div>
                    <div
                        className={`navbar-container__hamburger`}
                        onClick={() => setIsToggled(!isToggled)}
                    >
                        <span className={`navbar-container__hamburger-burger-bar navbar-container__hamburger${isToggled ? '--close' : ''}-burger-bar-top`}></span>
                        <span className={`navbar-container__hamburger-burger-bar navbar-container__hamburger${isToggled ? '--close' : ''}-burger-bar-middle-1`}></span>
                        <span className={`navbar-container__hamburger-burger-bar navbar-container__hamburger${isToggled ? '--close' : ''}-burger-bar-middle-2`}></span>
                        <span className={`navbar-container__hamburger-burger-bar navbar-container__hamburger${isToggled ? '--close' : ''}-burger-bar-bottom`}></span>

                    </div>
                </div>
                <ul className={['navbar-container__menu',
                    isToggled && 'navbar-container__menu--active',
                    closeSubMenu && 'navbar-container__menu-sub-menu--toggled',
                ]
                    .filter(Boolean).join(' ')}
                >{renderItems()}
                    <li>
                        <Link
                            activeClass="active"
                            to={'footer__contact-text'}
                            spy={false}
                            // smooth={true}
                            offset={-100}
                            delay={0}
                            smooth={'linear'}
                            duration={1000}
                            onClick={() => {
                                closeMenu(true);
                            }}
                        >
                            {'Contact'}
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation