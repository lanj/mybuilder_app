
import React, { Component } from 'react';
import Layout from './hoc/layout/Layout';
import BurgerBuilder from './containers/Builder/BurgerBuilder';



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
           <BurgerBuilder/>
          
        </Layout>
      </div>
    );
  }
}

export default App;



