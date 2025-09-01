 'use client'
import React from 'react'
import CountUp from 'react-countup'
function AnimatedCounter({amount}:{amount:number}) {
  return (
    <span>
      
        <CountUp 
        decimal=','
        prefix='$ '
        end={amount}/>
    </span>
  )
}
export default AnimatedCounter
