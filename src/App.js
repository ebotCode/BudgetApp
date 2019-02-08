import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import BudgetBuilder from './components/BudgetBuilder/BudgetBuilder'
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div style={{height:'100vh'}}  >
        <Grid style={{}} container spacing={24}>
          <Grid item xs={12} sm={12} md={12}>
            <Navbar/>   
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <BudgetBuilder/> 
          </Grid>
        </Grid>
             
        
      </div>      
    );
  }
}

export default App;
