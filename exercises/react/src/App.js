import React, {Component} from 'react';

import OrderList from './components/OrderList';
import SummaryPanel from './components/SummaryPanel';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Pizza Shop</h1>
        </header>
        <SummaryPanel />
        <OrderList />
      </div>
    );
  }
}

export default App;
