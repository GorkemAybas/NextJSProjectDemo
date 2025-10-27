import GelirGrafik from "@/components/ui/dashboard/gelirgrafik";
import SonFaturalar from '@/components/ui/dashboard/sonfaturalar';
import { geliriGetir, sonfaturalargetir, kartverilerinigetir } from '@/lib/data';
import { Suspense } from "react";
import DinamikYapi from "@/components/ui/dinamikyapi";
import Link from "next/link";

export default async function sayfa() {
    const [toplamgelir,sonFaturalar,kartverileri]= await Promise.all ([
        geliriGetir(),
        sonfaturalargetir(),
        kartverilerinigetir()
    ]);
  return (
    <main style={{ padding: '30px', backgroundColor:"lightyellow",fontSize:"12px" }}>
      <Link href="/" className="text-blue-500 underline ">ANA SAYFAYA GİT</Link> <br />
       <Link href="/deneme" className="text-blue-500 underline ">DENEME PAGE'E GİT</Link><br />


       
        <Link href="/dashboard/invoices" className="text-blue-500 underline ">FATURA PAGE' E GİT </Link>
      <h1>Dashboard</h1>
<p>toplam gelir:{toplamgelir}</p>
      <GelirGrafik gelir={toplamgelir} />
      <SonFaturalar sonFaturalar={sonFaturalar} />
      <div>
<p> toplam faturalar: {kartverileri.toplamfaturalar}</p>
<p> ödenen sayısı: {kartverileri.odendisayisi}</p>
<p> beklemede sayısı: {kartverileri.beklemedesayisi} </p>

<div style={{ padding: '10px' }}>
      <h1>Data.ts Test</h1>
      <pre>{JSON.stringify({ toplamgelir, sonFaturalar, kartverileri }, null, 2)}</pre>
   
      
    </div>


      </div> 
    </main>

  );
}
