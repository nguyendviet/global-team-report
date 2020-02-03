import React from 'react';

import '../static/HighchartsMap.css';

export default function HighchartsMap() {
    return (
        <div id="demo-wrapper">
            <div id="mapBox">
                <div id="up"></div>
                <div className="selector">
                <button id="btn-prev-map" className="prev-next"><i className="fa fa-angle-left"></i></button>
                <select id="mapDropdown" className="ui-widget combobox"></select>
                <button id="btn-next-map" className="prev-next"><i className="fa fa-angle-right"></i></button>
                </div>
                <div id="container"></div> 
            </div>
            <div id="sideBox">
                <input type="checkbox" id="chkDataLabels"/>
                <label htmlFor="chkDataLabels" style={{display: 'inline'}}>Data labels</label>
                <div id="infoBox">
                <h4>This map</h4>
                <div id="download"></div>
                </div>
            </div>
        </div>
    )
}
