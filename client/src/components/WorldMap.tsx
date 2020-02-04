import * as React from 'react';
import * as Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';

import mapDataWorld from '@highcharts/map-collection/custom/world.geo.json';
import worldMapData from '../data/WorldMapData';

import './WorldMap.css';

const options: Highcharts.Options = {
    title: {
        text: 'World Map',
        style: {
            fontFamily: 'Inconsolata',
            color: 'rgba(0, 0, 0, 0.54)'
        },
    },
    series: [{
        name: 'Coverage',
        type: 'map',
        mapData: mapDataWorld,
        data: worldMapData,
        // borderColor: '#fff',
    }],
    tooltip: {
        headerFormat: '',
        formatter: function () {
            const country = this.point;
            const info = `The value for ${country.name} is ${country.value}`
            return info;
        }
    },
    chart: {
        style: {
            fontFamily: 'Inconsolata',
            // color: "#ffffff"
        },
        // backgroundColor: '#282c34'
    },
    legend: {
        itemStyle: {
            color: 'rgba(0, 0, 0, 0.54)'
        } 
    } 
}

export default function WorldMap(props: HighchartsReact.Props) {
    return(
        <div>
            <HighchartsReact
                options={options}
                highcharts = { Highcharts }
                constructorType={'mapChart'}
                {...props}
            />
        </div>
    )
}
