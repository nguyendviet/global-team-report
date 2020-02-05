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
        type: 'map',
        mapData: mapDataWorld,
        data: worldMapData
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
            color: 'rgba(0, 0, 0, 0.54)'
        },
        // backgroundColor: '#282c34'
    },
    legend: {
        itemStyle: {
            color: 'rgba(0, 0, 0, 0.54)'
        } 
    },
    colorAxis: {
        dataClasses: [
            {
                from: 0,
                to: 0,
                color: "#9E9E9E",
                name: 'No Data'
            }, 
            {
                from: 1,
                to: 1,
                color: "#FF1744",
                name: 'Bad'
            }, 
            {
                from: 2,
                to: 2,
                color: "#FFEA00",
                name: 'Medium'
            },
            {
                from: 3,
                to: 3,
                color: "#00E676",
                name: 'Good'
            }
        ]
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
