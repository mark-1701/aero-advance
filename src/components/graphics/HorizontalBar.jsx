import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';

// const data = [
//   { x: 'nw', y: 12, fill: '#3b82f6' },
//   { x: 'op', y: 22, fill: '#3b0764' },
//   { x: 'ip', y: 33, fill: '#a21caf' },
//   { x: 'oh', y: 18, fill: '#facc15' },
//   { x: 'ra', y: 30, fill: '#d9f99d' },
//   { x: 're', y: 41, fill: '#16a34a' },
//   { x: 'cl', y: 47, fill: '#ea580c' },
//   { x: 'op', y: 25, fill: '#881337' },
//   { x: 'cd', y: 22, fill: '#450a0a' }
// ];

const HorizontalBar = ({ data }) => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryBar
        horizontal
        barRatio={1}
        style={{ data: { fill: ({ datum }) => datum.fill } }}
        alignment="start"
        data={data}
      />
    </VictoryChart>
  );
};

export default HorizontalBar;
