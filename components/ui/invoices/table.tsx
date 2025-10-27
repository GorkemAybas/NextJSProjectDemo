import { fetchFilteredInvoices } from '@/lib/data';

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  if (!invoices || invoices.length === 0) return <div>No invoices</div>;

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12, }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: 6 }}>ID</th>
          <th style={{ border: '1px solid #ccc', padding: 6 }}>Customer</th>
          <th style={{ border: '1px solid #ccc', padding: 6 }}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((inv: any) => (
          <tr key={inv.id}>
            <td style={{ border: '1px solid #eee', padding: 6 }}>{inv.id}</td>
            <td style={{ border: '1px solid #eee', padding: 6 }}>{inv.musteri}</td>
            <td style={{ border: '1px solid #eee', padding: 6 }}>{inv.tutar}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}