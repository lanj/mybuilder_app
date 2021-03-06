
import React , {Component} from 'react';
import Aux from '../../../hoc/auxillary/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  //check if it updates
  componentDidUpdate(){
    console.log('[OrderSummary] willupdate');
  }

render(){  

  const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
    return (
    <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>
            {igKey}</span>: {this.props.ingredients[igKey]}      
    </li>);
  });

   return(

    <Aux>
     
     
    <p> A delicious burger with the following ingredients:</p>
      <ul>
          {ingredientSummary}
      </ul>
      <p><strong>Total Price: {this.props.price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={this.props.purchaseCanceled } >CANCEL</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued } >CONTINUE</Button>
    </Aux>

   );
}
    
}

export default OrderSummary;
