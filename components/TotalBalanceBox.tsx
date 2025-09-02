'use client'
import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
function TotalBalanceBox({accounts , totalBanks , totalCurrentBalance}: TotlaBalanceBoxProps) {

  return (
    <section className='total-balance '>
        <div className='total-balance-chart sm:ml-[100px]' >
            <DoughnutChart accounts={accounts}/>
          <div className='flex flex-col gap-6 ml-5 w-40 !important'>
            <h2 className='header-2'>
            Bank Accounts : {totalBanks} 
            </h2>
            <div className='flex flex-col gap-2 w-[160px]'>
              <p className='total-balance-label'>Total Curent Balance</p>
              <div className='total-balance-amount flex-start flex-row '>
                <AnimatedCounter 
                amount={totalCurrentBalance}
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox