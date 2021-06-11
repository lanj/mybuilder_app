import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
    //using inner css style height here for purpose of  overriding logo main css and the toolbar height settings.using double braces
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Burger Logo" />
    </div>

)




export default logo;

