import React from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from './components/Drawer';
import HighchartsTest from './components/HighchartsTest';

const App: React.FC = () => {
  return (
    <div className="App">
        <HighchartsTest/>
        <Drawer/>
    </div>
  );
}

export default App;
