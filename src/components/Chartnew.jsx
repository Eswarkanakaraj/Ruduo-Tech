import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const SplineAreaChart = () => {
    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');

        // X-axis labels (dates)
        const xLabels = ['Jan 01', 'Jan 02', 'Jan 03', 'Jan 04', 'Jan 05', 'Jan 06', 'Jan 07', 'Jan 08', 'Jan 09', 'Jan 10','Jan 11','Jan 12','Jan 13','Jan 15']; // You can add more if needed

        // Y-axis labels (hours in text)
        const yLabels = ['08hrs', '09hrs', '10hrs', '11hrs', '12hrs']; // You can add more if needed

        // Convert Y-axis labels (like '08hrs', '09hrs', etc.) into numeric data for chart plotting
        const xData = [10, 9.5, 8.5, 11.8, 11,10,10.5,9,11.5,10,9.5,9,10,9,10.5]; // Corresponding numeric data for plotting

        // Chart configuration
        const config = {
            type: 'line',
            data: {
                labels: xLabels, // X-axis labels (dates)
                datasets: [
                    {
                        data: xData, // Y-axis data (numeric values for plotting)
                        borderColor: 'rgb(75, 192, 192)', // Line color
                        borderWidth: 2,
                        tension: 0.4, // Smooth curve
                        pointRadius: 0, // Optional: To make the data points visible
                        pointHoverRadius: 0, // Optional: Increase size on hover
                        fill: false, // Set to true if you want an area under the curve
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        tricks: {
                            padding: 20, 
                        }
                    },
                    y: {
                        beginAtZero: false, // Start from minimum Y value (not 0)
                        ticks: {
                            // Convert numeric Y values to display 'hrs' on the Y-axis
                            callback: function(value) {
                                // Map numeric values back to the corresponding 'hrs' text labels
                                const label = yLabels[value - 8]; // Subtract 8 because Y starts from 8hrs (index 0)
                                return label || value; // Return the label or numeric value if out of range
                            },
                            padding: 20,
                        },
                    },
                },
            },
        };

        // Create the chart instance
        const chartInstance = new Chart(ctx, config);

        // Cleanup on component unmount
        return () => {
            chartInstance.destroy();
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '400px' }} className='mt-4'>
            <canvas id="myChart" className='w-100'></canvas>
        </div>
    );
};

export default SplineAreaChart;
