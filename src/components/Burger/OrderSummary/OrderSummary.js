import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    
// you could pass convert the object props.ingredients to array and pass it on, or pass object and then convert
// using object.keys to transform to array of keys. output be returned in list <li> salad: 1 </li>
// {{}} used as dynamic entry to create object with inner brace java object. textransform - transforms text to captial
const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
    <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>
            {igKey}</span>: {props.ingredients[igKey]}      
    </li>);
});


  return (
    <Aux>
     
     
    <p> A delicious burger with the following ingredients:</p>
      <ul>
          {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled } >CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued } >CONTINUE</Button>
    </Aux>
  )
};

export default orderSummary;


//<h3> Your Order</h3>