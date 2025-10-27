// ...existing code...
export const faturalar = [
  { id: 1, tutar: 250, durum: "odendi", musteri: "sinan" },
  { id: 2, tutar: 450, durum: "beklemede", musteri: "gül" },
  { id: 3, tutar: 300, durum: "odendi", musteri: "Mehmet" },
  { id: 4, tutar: 120, durum: "odendi", musteri: "Ali" },
  { id: 5, tutar: 1500, durum: "beklemede", musteri: "Veli" },
  { id: 6, tutar: 600, durum: "odendi", musteri: "Ayse2" },
  { id: 7, tutar: 500, durum: "odendi", musteri: "Fatma" },
  { id: 8, tutar: 820, durum: "beklemede", musteri: "Can" },
   { id: 9, tutar: 500, durum: "beklemede", musteri: "mert" },
  { id: 10, tutar: 700, durum: "odendi", musteri: "Ayse2" },
  { id: 11, tutar: 50, durum: "odendi", musteri: "Fatma" },
  { id: 12, tutar: 80, durum: "beklemede", musteri: "Can" },
   { id: 13, tutar: 500, durum: "beklemede", musteri: "sude" },
  { id: 14, tutar: 700, durum: "odendi", musteri: "sinem" },
  { id: 15, tutar: 50, durum: "odendi", musteri: "Fatma" },
  { id: 16, tutar: 80, durum: "beklemede", musteri: "mustafa" },
   { id: 17, tutar: 5100, durum: "beklemede", musteri: "Veli" },
  { id: 18, tutar: 700, durum: "odendi", musteri: "kemal" },
  { id: 19, tutar: 530, durum: "odendi", musteri: "Fatma" },
  { id: 20, tutar: 1810, durum: "beklemede", musteri: "filiz" },
];

const PAGE_SIZE = 6;

export async function geliriGetir() {
  console.log("yapay gecikme ile gelir getiriliyor...");
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      const toplam = faturalar.reduce((acc, fatura) => acc + fatura.tutar, 0);
      console.log("işlem tamamlandı");
      resolve(toplam);
    }, 3000);
  });
}

export async function sonfaturalargetir() {
  return new Promise<typeof faturalar>((resolve) => {
    setTimeout(() => {
      resolve(faturalar.slice(-2));
    }, 700);
  });
}

export async function kartverilerinigetir() {
  const toplamfaturalar = faturalar.length;
  const odendisayisi = faturalar.filter((f) => f.durum === "odendi").length;
  const beklemedesayisi = faturalar.filter((f) => f.durum === "beklemede").length;
  return { toplamfaturalar, odendisayisi, beklemedesayisi };
}

// ...existing code...
// Yeni eklenen yardımcı fonksiyonlar (arama + sayfalama için)
export async function fetchFilteredInvoices(query: string, page: number) {
  const q = (query || "").trim().toLowerCase();
  const filtered = q
    ? faturalar.filter(
        (f) =>
          f.musteri.toLowerCase().includes(q) ||
          f.durum.toLowerCase().includes(q) ||
          String(f.tutar).includes(q)
      )
    : faturalar;
  const start = Math.max(0, (page - 1) * PAGE_SIZE);
  return filtered.slice(start, start + PAGE_SIZE);
}

export async function fetchInvoicesPages(query: string) {
  const q = (query || "").trim().toLowerCase();
  const count = q
    ? faturalar.filter(
        (f) =>
          f.musteri.toLowerCase().includes(q) ||
          f.durum.toLowerCase().includes(q) ||
          String(f.tutar).includes(q)
      ).length
    : faturalar.length;
  return Math.max(1, Math.ceil(count / PAGE_SIZE));
}
// ...existing code...