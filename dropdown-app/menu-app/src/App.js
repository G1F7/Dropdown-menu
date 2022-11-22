import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Win from './Components/Win';
import CurrencyConvertor from './Components/CurrencyConvertor';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App"> 
        <BrowserRouter>
          <div>
            <Header /> 
            <Route path="/Currency Convertor" component={ CurrencyConvertor } /> 
            <Route path="/Win" component={Win} />
          </div> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;