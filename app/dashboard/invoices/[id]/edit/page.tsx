import { fetchInvoiceById, fetchCustomers } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  // invoice bulunmadıysa notFound() çağır -> not-found.tsx gösterilir
  if (!invoice) {
    notFound();
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Edit Invoice #{invoice.id}</h1>
      <pre>{JSON.stringify(invoice, null, 2)}</pre>
      <p>Customers: {JSON.stringify(customers)}</p>
    </main>
  );
}