import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import Card from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="outerShell">
      <Header />
      <Card />
    </div>
  );
};

export default App;
