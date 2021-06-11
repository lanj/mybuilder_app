import React, {Component} from 'react'

import Aux from '../../hoc/Auxillary'
import styles from '../layout/Layout.module.css'
import SideDrawer2 from '../Navigation/SideDrawer/SideDrawer.js'
import Toolbar from '../Navigation/Toolbar/Toolbar.js'





class Layout extends Component{

    state = { 
        showsSideDrawer: false

    }

    sideDrawerClosedHandler = () => {
        this.setState( {showsSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }


    render(){
        return(
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} /> 
            <SideDrawer2 
             open={this.state.showsSideDrawer}
              closed={this.sideDrawerClosedHandler} />
            
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout;
