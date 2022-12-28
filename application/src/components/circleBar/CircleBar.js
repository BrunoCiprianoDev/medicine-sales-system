import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Circle.module.css'

const CircleBar = ({percentage, circleWidth, paramRadius, profile, numberSize, disableText}) => {
    const radius = paramRadius;
    const dashArray = radius* Math.PI*2
    const dashOffset = dashArray - (dashArray * percentage)/100

    const [color, setColor] = useState('green')
    
    useEffect(() => { 
        if(percentage>100){
            setColor('blue')
        } else if(percentage>50){
            setColor('green')
        } else if(percentage<=50 && percentage>=20){
            setColor('yellow')
        } else if(percentage<20){
            setColor('red')
        }
      },[percentage]);
    
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
                strokeWidth={profile}
                r={radius}
                className={styles['circle-background']}     
            />
            <circle 
                cx={circleWidth/2} 
                cy={circleWidth/2} 
                strokeWidth={profile} 
                r={radius}
                className={styles['circle-progress'] }   
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                    stroke: color,
                }}
                transform={`rotate(-90 ${circleWidth/2} ${circleWidth/2})`}
            />
            {!disableText && <text 
                x='37%' 
                y='50%' 
                dy='0.3em' 
                style={{
                    fontWeight:'bold',
                    fontSize: numberSize
                }}>
                { percentage+'%'}
            </text>}
        </svg>
    </div>
  )
}

export default CircleBar