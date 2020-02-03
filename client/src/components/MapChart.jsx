import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m-simplified.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const showCountry = (name) => {
    switch(name) {
        case 'United States of America':
            return 'Washington DC'
        default:
            return 'No Data'
    }
}

const MapChart = ({ setTooltipContent }) => {
  return (
    <div className="MapChart">
      <ComposableMap data-tip="" projectionConfig={{ scale: 147 }}>
      <Sphere stroke="#FF5533" strokeWidth={2} />
      {/* <Graticule stroke="gray" step={[10, 10]}/> */}
        {/* <ZoomableGroup> */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    // setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                    setTooltipContent(`${NAME} — ${showCountry(NAME)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
