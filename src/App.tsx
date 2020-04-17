import React from 'react';
import './App.css';
import { Dashboard } from './Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AllCategoriesTable } from './Categories/AllCategoriesTable';
import { AllProductsTable } from './Product/AllProductsTable';

function App() {
  return (
    // <Router>
    // <div>
    // <Dashboard />
    // <Switch>
    //  <Route path="/categories" exact component={AllCategoriesTable} />
    // <Route path="/products" exact component={AllProductsTable} /> 
    // </Switch>
    // </div>
    // </Router>
    <Router>
    <div>
      <Route path="/" component={Dashboard} />
    </div>
    </Router>
  );
}


  


export default App;
