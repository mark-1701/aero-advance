import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryPie
} from 'victory';

const Pie = ({ data }) => {
  return (
    <VictoryPie
      colorScale={[
        '#3b82f6',
        '#3b0764',
        '#a21caf',
        '#facc15',
        '#d9f99d',
        '#16a34a',
        '#ea580c',
        '#881337',
        '#450a0a'
      ]}
      data={data}
    />
  );
};

export default Pie;
