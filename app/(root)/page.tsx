import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RghiSideBar from '@/components/RghiSideBar'

function Home() {
  const loginIn = {firstName : "Masoud" , lastName: "Andiwal" , email: "masoudandiwal89@gmail.com"}
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
                  totalCurrentBalance={25100.15}
                />
            </header>
            Recent Transaction
        </div>
        <RghiSideBar 
        user={loginIn}
        transactions={[]} 
        banks={[{currentBalance :1000} , {currentBalance :2400}]}
        />
    </section>
  )
}

export default Home