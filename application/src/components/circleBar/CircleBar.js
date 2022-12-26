import React from 'react'
import styles from './Circle.module.css'

const CircleBar = ({percentage, circleWidth}) => {
    const radius = 125;
    const dashArray = radius* Math.PI*2
    const dashOffset = dashArray - (dashArray * percentage)/100

  return (
    <div className={styles.MainContainer}>
        <svg 
            width={circleWidth} 
            height={circleWidth} 
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}       
            >
            <circle 
                cx={circleWidth/2} 
                cy={circleWidth/2} 
                strokeWidth='28px' 
                r={radius}
                className={styles['circle-background']}     
            />
            <circle 
                cx={circleWidth/2} 
                cy={circleWidth/2} 
                strokeWidth='28px' 
                r={radius}
                className={styles['circle-progress'] }   
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset, 
                }
                }
                transform={`rotate(-90 ${circleWidth/2} ${circleWidth/2})`}
            />
            <text x='37%' y='50%' dy='0.3em' textAncor='middle' className={styles.circleText}>
                {percentage}%
            </text>
        </svg>
    </div>
  )
}

export default CircleBar