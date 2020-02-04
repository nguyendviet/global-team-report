import React, { Component } from "react";
import { findDOMNode, render } from "react-dom";
import Highcharts from "highcharts";
import HighMaps from "highcharts/highmaps";
import drilldown from "highcharts/modules/drilldown";
import map from "highcharts/modules/map";
import usAll from "./usAll.ts";

/**
 * Highcharts doesn't work with Reactjs in TypeScript
 * so this module is written in .jsx
 */

class HighchartsTestMap extends Component {
  componentDidMount() {

    let data = [
      ["us-ma", 0],
      ["us-wa", 1],
      ["us-ca", 2],
      ["us-or", 3],
      ["us-wi", 4],
      ["us-me", 5],
      ["us-mi", 6],
      ["us-nv", 7],
      ["us-nm", 8],
      ["us-co", 9],
      ["us-wy", 10],
      ["us-ks", 11],
      ["us-ne", 12],
      ["us-ok", 13],
      ["us-mo", 14],
      ["us-il", 15],
      ["us-in", 16],
      ["us-vt", 17],
      ["us-ar", 18],
      ["us-tx", 19],
      ["us-ri", 20],
      ["us-al", 21],
      ["us-ms", 22],
      ["us-nc", 23],
      ["us-va", 24],
      ["us-ia", 25],
      ["us-md", 26],
      ["us-de", 27],
      ["us-pa", 28],
      ["us-nj", 29],
      ["us-ny", 30],
      ["us-id", 31],
      ["us-sd", 32],
      ["us-ct", 33],
      ["us-nh", 34],
      ["us-ky", 35],
      ["us-oh", 36],
      ["us-tn", 37],
      ["us-wv", 38],
      ["us-dc", 39],
      ["us-la", 40],
      ["us-fl", 41],
      ["us-ga", 42],
      ["us-sc", 43],
      ["us-mn", 44],
      ["us-mt", 45],
      ["us-nd", 46],
      ["us-az", 47],
      ["us-ut", 48],
      ["us-hi", 49],
      ["us-ak", 50],
      ["undefined", 51]
    ];

    const options = {

      title: {
        text: "HighMap Test"
      },
      plotOptions: {
        map: {
          states: {
            hover: {
              color: "#EEDD66"
            }
          }
        }
      },
      colorAxis: {
        min: 0,
        minColor: "#E6E7E8",
        maxColor: "#005645"
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      subtitle: {
        text: "USA",
        floating: true,
        align: "right",
        y: 50,
        style: {
          fontSize: "16px"
        }
      },
      series: [
        {
          mapData: usAll,
          data: data,
          name: "USA",
          dataLabels: {
            enabled: true,
            format: "{point.name}"
          }
        }
      ],
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom"
        }
      }
    };

    
    this.chart = new HighMaps["Map"](findDOMNode(this), options);

  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div className="in-highchart" />;
  }
}

export default HighchartsTestMap;
