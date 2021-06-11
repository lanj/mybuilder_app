import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';



// the logo component height here could be set using height="80%" instead of wrapping in div
const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>
           <p>Menu</p> 
        </div>
        <div className={styles.Logo}>
            <Logo/>
        </div>
        <nav className={styles.DesktopOnly}>
           <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;

