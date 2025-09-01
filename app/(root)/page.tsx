import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

function Home() {
  const loginIn = {firstName : "Masoud"}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="welcome"
                user={loginIn?.firstName || "Guest"}
                subtext="Access and manage you account and transactions efficiently"
                />


                <TotalBalanceBox 
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={1250.35}
                />
            </header>
        </div>
    </section>
  )
}

export default Home