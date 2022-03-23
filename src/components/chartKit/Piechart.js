import React from 'react';
import { PieChart } from 'react-native-chart-kit';

import chartConfig from './chart-config';

const Piechart = ({ data }) => {
    return (
        <PieChart
            data={data}
            width={chartConfig.screenWidth}
            height={200}
            chartConfig={chartConfig.config}
            accessor={'amount'}
            paddingLeft={'0'}
            center={[0, 0]}
            absolute
        />
    );
};

export default Piechart;
