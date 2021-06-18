import React,{Component} from 'react';
import styles from './Modal.module.css';
import Aux from '../../../hoc/auxillary/Auxillary'
import Backdrop from '../Backdrop/Backdrop';





class Modal extends Component {

  /**check if  it is worth re- rendering , by checking if updates*/
  shouldComponentUpdate(nextProps, nextState){
   /**  if(nextProps.show !== this.props.show){
      return true;
    } **/
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate(){
    console.log('[Modal],willupdate')
  }

  render(){

      return(
        <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    
        <div className={styles.Modal}
           
        // 'translateY(-100vh) vh is viewport height
         style={{
           transform:this.props.show ? 'translateY(0)': 'translateY(-100vh)',
            opacity: this.props.show ? '1': '0'
        
        }}
        >
          {this.props.children}
        </div>
      </Aux>

      );

  }


}

export default Modal;
