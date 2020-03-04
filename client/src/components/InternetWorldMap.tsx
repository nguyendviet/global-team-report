import * as React from 'react';
import * as Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';

import mapDataWorld from '@highcharts/map-collection/custom/world.geo.json';
import internetSpeedData from '../data/InternetSpeedWorldReport.json';

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
        data: internetSpeedData
    }],
    tooltip: {
        headerFormat: '',
        formatter: function () {
            const country = this.point;
            let rating: string = '';
            if (country.value === 0) rating = 'No Data';
            if (country.value === 1) rating = 'Bad Internet';
            if (country.value === 2) rating = 'Average Internet';
            if (country.value === 3) rating = 'Good Internet';
            const info = `<b>${country.name}<b><br/>${rating}`;
            return info;
        }
    },
    chart: {
        style: {
            fontFamily: 'Inconsolata',
            color: 'rgba(0, 0, 0, 0.54)'
        },
        zoomType: 'xy'
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

export default function InternetWorldMap(props: HighchartsReact.Props) {
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
