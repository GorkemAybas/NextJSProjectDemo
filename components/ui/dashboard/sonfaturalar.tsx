
export default function SonFaturalar({ sonFaturalar }: { sonFaturalar: any[] }) {
  return (
    <div>
      <h3>Son Faturalar</h3>
      <ul>
        {sonFaturalar.map(f => (
          <li key={f.id}>{f.musteri} - {f.tutar} - {f.durum}</li>
        ))}
      </ul>
    </div>
  );
}
