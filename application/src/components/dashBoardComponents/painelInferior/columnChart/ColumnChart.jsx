import React from 'react'
import styles from './ColumnChart.module.css'
import { Chart } from "react-google-charts";

const ColumnChart = () => {

  const SimpleDataFormat = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return (
      day + '/' + month 
    )
  }

  const dataAtual = new Date();

  const dateSubtract = (daysSubtract) => {
    // Considere que um dia tem 86400000 milisegundos
    const day = Date.parse(dataAtual) - 86400000*daysSubtract;
    return SimpleDataFormat(day);
}

  const data = [
    ["Element", "Total em vendas nos últimos 7 dias", { role: "style" }],
    [`${dateSubtract(0)}`, 10050, "red"], 
    [`${dateSubtract(1)}`, 7040, "red"],
    [`${dateSubtract(2)}`, 11400, "red"],
    [`${dateSubtract(3)}`, 15000, "color: red"], 
    [`${dateSubtract(4)}`, 8931, "red"], 
    [`${dateSubtract(5)}`, 6052, "red"],
    [`${dateSubtract(6)}`, 7002, "color: red"],
  ];


  return (
    <div className={styles.MainContainer}>
      <Chart chartType="ColumnChart" width="95%" height="600px" data={data} />
    </div>
  )
}

export default ColumnChart