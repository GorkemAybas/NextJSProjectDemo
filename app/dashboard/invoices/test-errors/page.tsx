import {
  geliriGetir,
  sonfaturalargetir,
  kartverilerinigetir,
  fetchFilteredInvoices,
  fetchInvoicesPages,
} from '@/lib/data';

export default async function Page() {


 // throw new Error('UNCATCHED: test');

 
  const gelir = await geliriGetir();
  const son = await sonfaturalargetir();
  const kart = await kartverilerinigetir();
  const filtered = await fetchFilteredInvoices('sinan', 1);
  const pages = await fetchInvoicesPages('');
  return <pre>{JSON.stringify({ gelir, son, kart, filtered, pages }, null, 2)}</pre>;
}