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
            if (country.value) {
                const n = country.value;
                if (n === 0) rating = 'No Data';
                if (n >= 1 && n < 2) rating = 'Bad Internet';
                if (n >= 2 && n < 5) rating = 'Fair Internet';
                if (n >= 5 && n < 9) rating = 'Average Internet';
                if (n >= 9) rating = 'Good Internet';
            }
            const info = `<b>${country.name}<b><br/>${rating}`;
            return info;
        }
    },
    chart: {
        style: {
            fontFamily: 'Inconsolata',
            color: 'rgba(0, 0, 0, 0.54)'
        },
        zoomType: 'xy',
        panKey: 'shift'
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
                color: "#eb3b5a",
                name: 'Bad'
            }, 
            {
                from: 2,
                to: 4,
                color: "#fa8231",
                name: 'Fair'
            }, 
            {
                from: 5,
                to: 8,
                color: "#fed330",
                name: 'Average'
            },
            {
                from: 9,
                color: "#26de81",
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
