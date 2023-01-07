import React from 'react'
import styles from './PainelSuperior.module.css'
import { Chart } from "react-google-charts";

const dataColumnChart = [
    ["Element", "Density", { role: "style" }],
    ["2", 8.94, "red"], // RGB value
    ["3", 10.49, "red"], // English color name
    ["4", 19.3, "red"],
    ["5", 21.45, "red"], // CSS-style declaration
  ];


const PainelSuperior = () => {
  return (
    <div className={styles.MainContainer}>
        <div className={styles.Header}><h1>Titulo</h1></div>
        <div className={styles.Body}>
            <div className={styles.LeftArea}>
                <div className={styles.Card}></div>
                <div className={styles.graphic}>
                    <Chart chartType="ColumnChart" width="95%" height="340px" data={dataColumnChart} />
                </div>
            </div>
            <div className={styles.RightArea}>
                <div className={styles.Card}></div>
                <div className={styles.graphic}>
                    <Chart chartType="ColumnChart" width="95%" height="340px" data={dataColumnChart} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PainelSuperior