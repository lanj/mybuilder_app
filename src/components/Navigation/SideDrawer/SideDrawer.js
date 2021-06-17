import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary';

const sideDrawer = (props) => {
    //.. in Logo you could set height as inline property directly such as height="11%" instead of using div wrap
    // css modules converts the use of logo in three different classes to different css
    // modified logo jsx to Logo2 
    
    let attachedClasses = [styles.SideDrawer,styles.Close];
    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    
    }
    return (
        <Aux>
            <Backdrop show={props.open } clicked={props.closed}/>  
            <div className={attachedClasses.join(' ')} >
             
            <div className={styles.Logo}>
                 <Logo />

            </div>
            <nav>
                <NavigationItems />
            </nav>

            </div>


        </Aux>
    );
};

export default sideDrawer
