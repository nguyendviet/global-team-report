import React from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from './components/Drawer';
import HighchartsTestMap from './components/HighchartsTestMap';

const App: React.FC = () => {
  return (
    <div className="App">
        <HighchartsTestMap/>
        <Drawer/>
    </div>
  );
}

export default App;
