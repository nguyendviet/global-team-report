import * as React from 'react';
import * as Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';

import mapDataWorld from '@highcharts/map-collection/custom/world.geo.json';
import worldMapData from '../data/WorldMapData';

const options: Highcharts.Options = {
    title: {
        text: 'World Map'
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
