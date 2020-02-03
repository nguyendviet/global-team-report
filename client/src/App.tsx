import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from './components/Drawer';
import MapChart from './components/MapChart';
import ReactTooltip from 'react-tooltip';

const App: React.FC = () => {
    const [content, setContent] = useState("");
  return (
    <div className="App">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
        <Drawer/>
    </div>
  );
}

export default App;
