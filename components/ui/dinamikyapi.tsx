import react from "react";
import {geliriGetir} from '@/lib/data';

export default async function DinamikYapi() {
    console.log("DinamikYapi: fetch başladı");
    const gelir = await geliriGetir(); // 3s bekleyecek
    console.log("DinamikYapi: fetch bitti");
  return (
    <div className="text-blue-500">toplam gelir: {gelir}</div>
  );
}