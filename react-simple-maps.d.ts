declare module 'react-simple-maps' {
  declare var ComposableMap: React.FC<{ projectionConfig: any }>;
  declare var Geographies: React.FC<{ geography: string }>;
  declare var Geography: React.FC<{ geography: IGeography; fill: string }>;
  declare var Sphere: React.FC<{ stroke: string; strokeWidth: number }>;
  declare var Graticule: React.FC<{ stroke: string; strokeWidth: number }>;

  interface IGeography {
    svgPath: string;
    rsmKey: string;
    properties: {
      name: string;
    };
  }

  interface IGeographies {
    geographies: IGeography[];
  }
}
