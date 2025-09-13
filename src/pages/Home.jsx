import React from 'react'
import Nav from '../components/Home/Nav'
import InvoiceUpload from '../components/Home/InvoiceUpload'
import EarningsCard from '../components/Home/EarningCard'
import IncomeTrend from '../components/Home/IncomeTrend'
import InvoiceList from '../components/Home/InvoiceList'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-customBg">
      <Nav />
      <InvoiceUpload/>
      <EarningsCard/>
      <IncomeTrend/>
      <InvoiceList/>

      
    </div>
  )
}
