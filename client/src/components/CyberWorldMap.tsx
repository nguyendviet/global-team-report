import * as React from 'react';
import * as Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';

import mapDataWorld from '@highcharts/map-collection/custom/world.geo.json';
import cyberAttackData from '../data/CyberAttackWorldReport.json'

import './WorldMap.css';

const options: Highcharts.Options = {
    title: {
        text: '',
        style: {
            fontFamily: 'Inconsolata',
            color: 'rgba(0, 0, 0, 0.54)'
        },
    },
    series: [{
        type: 'map',
        mapData: mapDataWorld,
        data: cyberAttackData
    }],
    tooltip: {
        headerFormat: '',
        formatter: function () {
            const country = this.point;
            let rating: string = '';
            if (country.value === 0) rating = 'No Data';
            if (country.value === 1) rating = 'Low Rate of Attack';
            if (country.value === 2) rating = 'Moderate Rate of Attack';
            if (country.value === 3) rating = 'High Rate of Attack';
            const info = `<b>${country.name}<b><br/>${rating}`;
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
                color: "#00E676",
                name: 'Low Rate'
            },
            {
                from: 2,
                to: 2,
                color: "#FFEA00",
                name: 'Moderate Rate'
            },
            {
                from: 3,
                to: 3,
                color: "#FF1744",
                name: 'High Rate'
            }, 
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
