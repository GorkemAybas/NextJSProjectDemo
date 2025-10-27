import { Button } from "@/components/ui/button"
import { lusitana } from '../components/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from "react";
import DinamikYapi from "@/components/ui/dinamikyapi";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-amber-100">
      {/* Başlık ve buton üstte, ortada */}
      <div className="mt-10 mb-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Hoş Geldin!</h1>
        <Button variant="outline" className="px-10 py-2">click me</Button>
      </div>

      {/* Üçgen */}
      <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[15px] border-l-transparent border-r-transparent border-b-black mb-8"/>

      {/* Paragraflar */}
      <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl mb-5 md:leading-normal`}>
        <strong>Welcome to Acme.</strong> Bu, Next.js Learn Kursu için örnektir.
      </p>
      <Suspense fallback={<div className='text-purple-500'>LOADİNG... </div>}>

    <DinamikYapi />
   </Suspense>
      <p>merhaba</p>
<div>
<Link href="/deneme" className="text-blue-500 underline ">DENEME PAGE'E GİT</Link><br></br>


 
<Link href="/dashboard" className="text-blue-500 underline ">DASHBOARD PAGE'E GİT</Link><br />


 <Link href="/dashboard/invoices" className="text-blue-500 underline ">FATURA PAGE' E GİT </Link>




</div>
      {/* Resim */}
      <div className="w-full flex justify-center items-center mt-3">
        <img
          src="manzara.jpg"
          className="w-[30%] h-[20%] sm:w-[20%] sm:h-[30%] md:w-[40%] md:h-[30%] lg:w-[10%] lg:h-[10%] object-cover mb-5"
        />
      </div>
      <Image  src="/manzara-desktop.jpg" className="hidden md:block" width={200} height={100} alt="desktop resmi" />
        <Image  src="/manzara-mobile.jpg" className="block md:hidden" width={100} height={50} alt="mobile  resmi" />




    </div>
  );
}