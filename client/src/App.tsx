import React from 'react';
import logo from './logo.svg';
import './App.css';

import Earth from './components/Earth';
import Drawer from './components/Drawer';

const App: React.FC = () => {
  return (
    <div className="App">
        <Earth/>
        <Drawer/>
    </div>
  );
}

export default App;
