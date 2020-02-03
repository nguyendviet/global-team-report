import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from './components/Drawer';
import HighchartsMap from './components/HighchartsMap';

const App: React.FC = () => {
    const [content, setContent] = useState("");
  return (
    <div className="App">
        <HighchartsMap/>
        <Drawer/>
    </div>
  );
}

export default App;
