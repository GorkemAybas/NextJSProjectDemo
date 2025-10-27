import React from 'react'
import Link from 'next/link'
import { Suspense } from 'react' 
import RevenueChart from '@/components/ui/dashboard/revenue-chart'
import { sonfaturalargetir,kartverilerinigetir } from '@/lib/data'

export async function deneme() {
  const lastet= await sonfaturalargetir();
  const kartverileri = await kartverilerinigetir();
  return (
    <main className='min-h-screen flex flex-col items-center justify-start gap-5 text-center px-4 backgroundColor="lightyellow"'>
      deneme <br/>
      <Link href="/" className="text-blue-500 underline "> ANA SAYFAYA GİT</Link>
      <Link href="/dashboard" className="text-blue-500 underline ">DASHBOARD PAGE'E GİT</Link>
      <Link href="/dashboard/invoices" className="text-blue-500 underline ">FATURALAR PAGE'E GİT</Link>
<div>

<h2>kart verileri</h2>
<pre>{JSON.stringify(kartverileri,null,2)}</pre>
</div>
<Suspense fallback={<div className='text-purple-500'>LOADİNG... </div>}>
  <RevenueChart />
</Suspense>

<div>
<h2>son faturalar</h2>
<pre>{JSON.stringify(lastet,null,2)}</pre>
</div>
      
    </main>
  )
}

export default deneme