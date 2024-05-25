import { VictoryArea, VictoryChart, VictoryTheme } from 'victory';

// const data = [
//   { x: 'ca', y: 22 },
//   { x: 'cl', y: 47 },
//   { x: 'ip', y: 33 },
//   { x: 'nw', y: 12 },
//   { x: 'oh', y: 18 },
//   { x: 'op', y: 25 },
//   { x: 'ra', y: 30 },
//   { x: 're', y: 41 }
// ];

const Area = ({ data }) => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryArea
        style={{ data: { fill: '#c43a31' } }}
        data={data}
        interpolation="natural"
      />
    </VictoryChart>
  );
};

export default Area;
