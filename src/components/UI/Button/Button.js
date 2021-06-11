import React from 'react';

import styles from './Button.module.css';

const button = (props) => (
    <button
    //set up style converting array of strings to string with join ''
    className={[styles.Button, styles[props.btnType]].join(' ')}
    onClick= {props.clicked}>
      {props.children}
    </button>

  );


export default button;

