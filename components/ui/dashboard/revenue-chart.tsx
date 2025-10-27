import React from 'react'
import { geliriGetir } from '@/lib/data';


export default async function RevenueChart() {
    console.log("RevenueChart: fetch başladı");
    const gelir = await geliriGetir(); // 3s bekleyecek
    console.log("RevenueChart: fetch bitti");
  return (
    <div className='text-green-500'>toplam gelir: {gelir}</div>
  )
}
