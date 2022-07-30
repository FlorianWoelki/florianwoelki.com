import {
  ComposableMap,
  Geographies,
  Geography,
  IGeographies,
  Sphere,
  Graticule,
} from 'react-simple-maps';

const visitedCountries = [
  'Spain',
  'Portugal',
  'France',
  'Italy',
  'Germany',
  'Switzerland',
  'United States',
  'United Kingdom',
];

const MapChart = (): JSX.Element => {
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147,
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      <Geographies geography="/features.json">
        {({ geographies }: IGeographies) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  visitedCountries.includes(geo.properties.name)
                    ? '#EF4444'
                    : '#E5E7EB'
                }
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
