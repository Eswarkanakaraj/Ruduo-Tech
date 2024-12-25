import React from 'react';
import { Line } from '@ant-design/charts';

const SplineAreaChart = () => {
    const data = [
        { month: 'January', value: 65 },
        { month: 'February', value: 59 },
        { month: 'March', value: 80 },
        { month: 'April', value: 81 },
        { month: 'May', value: 56 },
        { month: 'June', value: 55 },
        { month: 'July', value: 40 },
    ];

    const config = {
        data,
        xField: 'month',
        yField: 'value',
        smooth: true, // This will create the smooth curve (like 'tension' in Chart.js)
        point: {
            size: 0, // Hide points
        },
        meta: {
            month: { alias: 'Month' },
            value: { alias: 'Value' },
        },
        legend: {
            visible: false, // Hide legend
        },
        area: {
            visible: true, // Display area under the curve
        },
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Line {...config} />
        </div>
    );
};

export default SplineAreaChart;
