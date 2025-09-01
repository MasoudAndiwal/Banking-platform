'use client'
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Label } from '@radix-ui/react-label';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({accounts}: DoughnutChartProps) {
    const data = {
        datasets:[
            {
                Label: 'Bank',
                data: [1250, 2500 , 3770] ,
                backgroundColor: ['#0747b6' , '#2265d8' , '#2f91fa']
            }
        ],
        labels:['bank 1' , 'bank 2' , 'bank 3']
    }
  return <Doughnut 
  data={data} 
  options={
    {
        cutout: '60%',
        plugins: {
            legend: {
                display: false,
            }
        }
    }
  }
  />
}

export default DoughnutChart