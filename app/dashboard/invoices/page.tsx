import Pagination from '@/components/ui/invoices/pagination';
import Search from '@/components/ui/search';
import Table from '@/components/ui/invoices/table';
import { CreateInvoice } from '@/components/ui/invoices/buttons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/lib/data';
import Link from 'next/link';
import HeaderNav from "@/components/HeaderNav";

export default async function Page(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div style={{ padding: 20,backgroundColor:'#666666', minHeight:'100vh' }}>
   <HeaderNav target="/" label="Invoices" enabled={true} />
      
    

      <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ flex: 1 }}><Search placeholder="Search invoices..." /></div>
        <CreateInvoice />
      </div>

      <div style={{ marginTop: 12 }}>
        <Suspense fallback={<div>Loading table...</div>}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </div>

      <div style={{ marginTop: 12 }}>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}