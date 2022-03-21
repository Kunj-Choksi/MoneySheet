import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import chartConfig from './chart-config';

const Linechart = ({ labels, dataPoints }) => {
    const data = {
        labels: labels,
        // labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: dataPoints,
                // data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
                strokeWidth: 2, // optional
            },
        ],
    };
    return (
        <LineChart
            data={data}
            width={chartConfig.screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig.config}
            bezier
        />
    );
};

export default Linechart;
