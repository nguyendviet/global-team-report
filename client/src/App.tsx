import React from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from './components/Drawer';
import HighchartsTest from './components/HighchartsTest';
import MapGL from './components/MapGL';

const App: React.FC = () => {
  return (
    <div className="App">
        {/* <HighchartsTest/> */}
        <MapGL/>
        <Drawer/>
    </div>
  );
}

export default App;
