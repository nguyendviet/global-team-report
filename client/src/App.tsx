import React from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from './components/Drawer';
import WorldMap from './components/WorldMap';

import ScrollTab from './components/ScrollTab';
import IconTab from './components/IconTab';
import FixedTab from './components/FixedTab';

const App: React.FC = () => {
  return (
    <div className="App">
        {/* <ScrollTab/> */}
        {/* <IconTab/> */}
        <FixedTab/>
        <WorldMap/>
        {/* <Drawer/> */}
    </div>
  );
}

export default App;
