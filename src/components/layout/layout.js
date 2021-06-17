import React, {Component} from 'react'

import Aux from '../../hoc/Auxillary'
//import drawToggle from '../Navigation/SideDrawer/DrawToggle'
import styles from '../layout/Layout.module.css'
import SideDrawer2 from '../../components/Navigation/SideDrawer/SideDrawer.js'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.js'





class Layout extends Component{

    state = { 
        showsSideDrawer: false

    }

    sideDrawerClosedHandler = () => {
        this.setState( {showsSideDrawer: false});
    }
    // remember we use arrow function used in setState to address asynchronous access to showSideDrawer instead of direct call 
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showsSideDrawer: !prevState.showsSideDrawer};
        } );
    }


    render(){
        return(
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} /> 
 
 
            <SideDrawer2 open={this.state.showsSideDrawer}  closed={this.sideDrawerClosedHandler} />

            <main className={styles.Content}>
                 {this.props.children}
            </main> 
            
        </Aux>
        )
    }
}

export default Layout;
