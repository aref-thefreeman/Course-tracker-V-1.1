// import React from 'react';
import styles from '../styles/Layout.module.css'
import Nav from './Nav';
const Layout = ({children}) => {
    return (
       <>
            <Nav></Nav>
            <div className={styles.container} > 
                    {/* <h1>Layout</h1> */}
                    <main className= {styles.main}>{children}</main>
                    
            </div>
        </>
    );
};

export default Layout;