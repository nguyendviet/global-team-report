import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
    title: {
        text: 'My chart'
    },
    series: [{
        name: 'something',
        type: 'line',
        data: [1, 2, 3]
    }]
}

export default function HighchartsTest(props: HighchartsReact.Props) {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                {...props}
            />
        </div>
    )
}
