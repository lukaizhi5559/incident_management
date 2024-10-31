// src/components/IncidentChart.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Pie } from '@antv/g2plot';
import api from '../api';

interface Incident {
  severity: string;
}

const IncidentChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<{ type: string; value: number }[]>([]);
  const [chart, setChart] = useState<Pie | null>(null);

  // Fetch data and prepare it for the chart
  const fetchData = async () => {
    try {
      const response = await api.get<Incident[]>('/incidents/');
      const incidents = response.data;
      const severityCounts = incidents.reduce((acc: { [key: string]: number }, incident) => {
        acc[incident.severity] = (acc[incident.severity] || 0) + 1;
        return acc;
      }, {});
      setData(
        Object.entries(severityCounts).map(([severity, count]) => ({
          type: severity,
          value: count,
        }))
      );
    } catch (error) {
      console.error('Failed to load data for chart');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Initialize the chart when data is updated
  useEffect(() => {
    if (chartContainerRef.current && data.length > 0) {
      // If a chart instance already exists, update its data
      if (chart) {
        chart.changeData(data);
      } else {
        // Initialize the chart
        const newChart = new Pie(chartContainerRef.current, {
          data,
          angleField: 'value',
          colorField: 'type',
          radius: 0.75,
          label: {
            type: 'spider',
            labelHeight: 28,
            content: '{name}\n{percentage}',
          },
        });
        newChart.render();
        setChart(newChart);
      }
    }
  }, [chart, data]);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default IncidentChart;
