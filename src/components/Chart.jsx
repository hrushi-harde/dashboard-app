import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', users: 30 },
  { name: 'Feb', users: 46},
  { name: 'Mar', users: 70 },
];

function Chart() {
  return (
    <div>
      <h2>Student Growth</h2>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Chart;
