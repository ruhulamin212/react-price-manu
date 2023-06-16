import React, { Component } from 'react'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export class Dashbord extends Component {
  render() {

    const studentMarks = [
      { id: 1, name: "Student 1", math: 80, physics: 75, chemistry: 90 },
      { id: 2, name: "Student 2", math: 70, physics: 85, chemistry: 80 },
      { id: 3, name: "Student 3", math: 90, physics: 80, chemistry: 75 },
      { id: 4, name: "Student 4", math: 65, physics: 70, chemistry: 85 },
      { id: 5, name: "Student 5", math: 75, physics: 90, chemistry: 70 },
      { id: 6, name: "Student 6", math: 80, physics: 75, chemistry: 85 },
      { id: 7, name: "Student 7", math: 85, physics: 80, chemistry: 70 },
      { id: 8, name: "Student 8", math: 75, physics: 90, chemistry: 80 },
      { id: 9, name: "Student 9", math: 70, physics: 85, chemistry: 90 },
      { id: 10, name: "Student 10", math: 90, physics: 80, chemistry: 75 },
    ];



    return (
      <div>
        <LineChart width={1000} height={300} data={studentMarks}>
          <Line dataKey="math"></Line>
          <Line stroke='red' dataKey="chemistry"></Line>
          <Line stroke='black' dataKey="physics"></Line>
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    );
  }
}

export default Dashbord