import React from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from './components/Drawer';
import WorldMap from './components/WorldMap';

const App: React.FC = () => {
  return (
    <div className="App">
        <WorldMap/>
        <Drawer/>
    </div>
  );
}

export default App;
