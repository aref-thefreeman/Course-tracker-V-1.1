import React from 'react';
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
const Nav = () => {
    return (
        <div className= {navStyles.nav}>
            <ul>
                <li>
                    <Link href = '/'>Home</Link>
                </li>
                <li>
                    <Link href = '/about'>About</Link>

                </li>
                <li>
                    <Link href = '/course'>Course</Link>
                    
                </li>
                <li>
                    <Link href = '/instructor'>Instructor</Link>
                    
                </li>
                <li>
                    <Link href = '/marketplace'>MarketPlace</Link>
                    
                </li>
                <li>
                    <Link href = '/brand'>Brand</Link>
                    
                </li>
                <li>
                    <Link href = '/login'>Log In</Link>
                    
                </li>
            </ul>
            
        </div>
    );
}

export default Nav;
