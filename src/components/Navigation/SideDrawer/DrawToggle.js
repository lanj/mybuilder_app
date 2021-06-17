import React from 'react';
import styles from './DrawToggle.module.css';


const drawToggle = (props) => (
    //using inner css style height here for purpose of  overriding logo main css and the toolbar height settings.using double braces
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>

)




export default drawToggle;