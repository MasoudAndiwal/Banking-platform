 'use client'
import React from 'react'
import CountUp from 'react-countup'
function AnimatedCounter({amount}:{amount:number}) {
  return (
    <span>
      
        <CountUp 
          end={amount}
          decimals={2}
          decimal='.'
          separator=','
          prefix='$ '
        />
    </span>
  )
}
export default AnimatedCounter
