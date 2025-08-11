\
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Hammer,
  Ruler,
  Paintbrush,
  PhoneCall,
  ChevronRight,
  Check,
  MapPin,
  Mail,
  Star,
  Phone,
  MessageCircle,
} from "lucide-react";

// =====================
// KONFIGURASI CEPAT
// =====================
const BRAND = {
  name: "LapanganPro.ID",
  tagline: "Ahli Pembuatan & Renovasi Lapangan Olahraga",
  phoneIntl: "6281234567890", // ganti ke nomor WhatsApp kamu (format internasional tanpa +)
  email: "halo@lapanganpro.id",
  city: "Jakarta & Sekitarnya",
};

// Daftar kategori portofolio (bebas kamu ubah/ambah)
const CATEGORIES = [
  "Semua",
  "Futsal",
  "Tenis",
  "Basket",
  "Badminton",
  "Voli",
  "Lari/Multifungsi",
];

// Data portofolio contoh — GANTI URL gambar dengan foto asli kamu
const SAMPLE_PORTFOLIO = [
  {
    id: 1,
    title: "Renovasi Lapangan Futsal Sintetis",
    location: "BSD, Tangerang",
    category: "Futsal",
    beforeImg:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1518606366312-e1e51c1c7a1f?q=80&w=1600&auto=format&fit=crop",
    scope: ["Perbaikan permukaan", "Penggantian rumput", "Garis standar futsal"],
  },
  {
    id: 2,
    title: "Pembuatan Lapangan Tenis Acrylic",
    location: "Cibubur, Jakarta Timur",
    category: "Tenis",
    beforeImg:
      "https://images.unsplash.com/photo-1517645963574-843ad781e24e?q=80&w=1600&auto=format&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1520975922324-c0d61b5672bc?q=80&w=1600&auto=format&fit=crop",
    scope: ["Base coat", "Layer acrylic cushion", "Line marking ITF"],
  },
  {
    id: 3,
    title: "Pengecatan Ulang Lapangan Basket Outdoor",
    location: "Depok",
    category: "Basket",
    beforeImg:
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1600&auto=format&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1505060890684-d9df8f4a0b2d?q=80&w=1600&auto=format&fit=crop",
    scope: ["Grinding", "Primer", "Top coat anti-slip"],
  },
  {
    id: 4,
    title: "Marking & Netting Badminton Indoor",
    location: "Bekasi",
    category: "Badminton",
    beforeImg:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1612712098242-263d09a7b12d?q=80&w=1600&auto=format&fit=crop",
    scope: ["Mat pemasangan", "Net & tiang", "Line BWF"],
  },
  {
    id: 5,
    title: "Lapangan Serbaguna (Multifungsi)",
    location: "Cileungsi",
    category: "Lari/Multifungsi",
    beforeImg:
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1600&auto=format&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1576485302196-289e1c3d4e4c?q=80&w=1600&auto=format&fit=crop",
    scope: ["Perataan aspal", "Coating PU", "Marking multi-olahraga"],
  },
];

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
    {subtitle && (
      <p className="text-muted-foreground mt-3 leading-relaxed">{subtitle}</p>
    )}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-white/60 backdrop-blur border-black/5 shadow-sm">
    {children}
  </span>
);

const CategoryPills: React.FC<{
  active: string;
  onChange: (c: string) => void;
}> = ({ active, onChange }) => (
  <div className="flex flex-wrap items-center gap-2 justify-center">
    {CATEGORIES.map((c) => (
      <button
        key={c}
        onClick={() => onChange(c)}
        className={`px-3 py-1.5 rounded-full border text-sm transition hover:shadow ${
          active === c ? "bg-black text-white border-black" : "bg-white border-black/10"
        }`}
      >
        {c}
      </button>
    ))}
  </div>
);

const PortfolioCard: React.FC<{
  item: (typeof SAMPLE_PORTFOLIO)[number];
}> = ({ item }) => {
  const [showAfter, setShowAfter] = useState(true);
  return (
    <div className="group rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={showAfter ? item.afterImg : item.beforeImg}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <Badge>{item.category}</Badge>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-2 py-1 text-xs rounded border ${
                !showAfter ? "bg-black text-white border-black" : "bg-white"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-2 py-1 text-xs rounded border ${
                showAfter ? "bg-black text-white border-black" : "bg-white"
              }`}
            >
              After
            </button>
          </div>
        </div>
        <h3 className="font-semibold text-lg mt-3">{item.title}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <MapPin className="w-4 h-4" />
          <span>{item.location}</span>
        </div>
        <ul className="mt-3 space-y-1">
          {item.scope.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 mt-0.5" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Testimonial: React.FC<{
  name: string;
  role?: string;
  quote: string;
}> = ({ name, role, quote }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-1 mb-3 text-yellow-500">
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
    </div>
    <p className="text-base leading-relaxed">“{quote}”</p>
    <div className="mt-4 text-sm text-muted-foreground">
      — <span className="font-medium">{name}</span>
      {role ? `, ${role}` : ""}
    </div>
  </div>
);

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filtered = useMemo(() => {
    if (activeCategory === "Semua") return SAMPLE_PORTFOLIO;
    return SAMPLE_PORTFOLIO.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  const waText = encodeURIComponent(
    `Halo ${BRAND.name}, saya ingin konsultasi pembuatan/renovasi lapangan. Mohon info lebih lanjut.`
  );
  const waLink = `https://wa.me/${BRAND.phoneIntl}?text=${waText}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 scroll-smooth">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black text-white grid place-items-center text-sm font-bold">LP</div>
              <div>
                <div className="font-extrabold leading-tight">{BRAND.name}</div>
                <div className="text-xs text-muted-foreground -mt-0.5">{BRAND.tagline}</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#services" className="hover:opacity-70">Layanan</a>
              <a href="#portfolio" className="hover:opacity-70">Portofolio</a>
              <a href="#about" className="hover:opacity-70">Tentang</a>
              <a href="#contact" className="hover:opacity-70">Kontak</a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 bg-black text-white hover:shadow"
              >
                <PhoneCall className="w-4 h-4" /> Konsultasi
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold leading-tight"
              >
                Bangun Lapangan Impian Anda
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">
                  Cepat, Rapi, Tahan Lama
                </span>
              </motion.h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Spesialis desain, konstruksi, dan renovasi lapangan futsal, tenis, basket,
                badminton, hingga lapangan serbaguna. Garansi kualitas & standar ukuran resmi.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-black text-white hover:shadow"
                >
                  <Phone className="w-4 h-4" /> Konsultasi Gratis
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-1 rounded-xl border px-4 py-2 bg-white hover:shadow"
                >
                  Lihat Portofolio <ChevronRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" /> {BRAND.city}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Survey lokasi cepat</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Material berstandar</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Garansi finishing</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {SAMPLE_PORTFOLIO.slice(0, 3).map((p) => (
                <div key={p.id} className="rounded-xl overflow-hidden border border-black/10 bg-white/70">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.afterImg} alt={p.title} className="h-40 w-full object-cover" />
                  <div className="p-3">
                    <div className="text-xs text-muted-foreground">{p.category}</div>
                    <div className="font-semibold line-clamp-2 text-sm">{p.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="services" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            title="Layanan Utama"
            subtitle="Dari desain hingga finishing — semua kebutuhan lapangan olahraga Anda dalam satu tim."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-black text-white grid place-items-center mb-4">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Konstruksi Baru</h3>
              <p className="text-sm text-muted-foreground mt-1">Pemadatan, base layer, sistem drainase, hingga finishing permukaan sesuai standar.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-black text-white grid place-items-center mb-4">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Coating & Marking</h3>
              <p className="text-sm text-muted-foreground mt-1">Acrylic/PU coating anti-slip, line marking ITF/FIBA/BWF, dan logo custom.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-black text-white grid place-items-center mb-4">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Renovasi & Perbaikan</h3>
              <p className="text-sm text-muted-foreground mt-1">Perataan, penyambungan retak, penggantian rumput sintetis, dan leveling ulang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section id="portfolio" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            title="Portofolio Proyek"
            subtitle="Beberapa pekerjaan terbaru kami — dokumentasi before/after untuk transparansi kualitas."
          />

          <div className="mt-8">
            <CategoryPills active={activeCategory} onChange={setActiveCategory} />
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-black text-white hover:shadow">
              Ingin lihat sample material? <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TENTANG & KEUNGGULAN */}
      <section id="about" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                title="Tentang Kami"
                subtitle="Tim berpengalaman lebih dari 7 tahun mengerjakan puluhan lapangan di Jabodetabek & sekitarnya. Fokus pada ketepatan standar, kebersihan kerja, dan suplai material yang konsisten."
              />
              <ul className="mt-6 space-y-3">
                {["Survey & RAB jelas","Timeline kerja transparan","Garansi kebocoran & finishing","After sales responsif"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5" /> <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-black text-white hover:shadow">
                  <MessageCircle className="w-4 h-4" /> Tanya Material
                </a>
                <a href="#portfolio" className="inline-flex items-center gap-1 rounded-xl border px-4 py-2 bg-white hover:shadow">
                  Lihat Hasil Kerja <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Testimonial name="Andi" role="Manager Fasilitas" quote="Pengerjaan rapi, tepat waktu, dan komunikasi enak. Garis lapangan presisi." />
              <Testimonial name="Rina" role="Ketua RT" quote="Renovasi lapangan komplek jadi favorit warga. Anti-slip dan warna tahan cuaca." />
              <Testimonial name="Budi" role="Pemilik Sewa Futsal" quote="Rumuskan solusi drainase yang pas. Sekarang lapangan cepat kering setelah hujan." />
            </div>
          </div>
        </div>
      </section>

      {/* FORM KONTAK */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            title="Minta Penawaran"
            subtitle="Ceritakan kebutuhan Anda, kami kirim estimasi RAB dan timeline pengerjaan."
          />
          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const fd = new FormData(form);
                const name = String(fd.get("name") || "");
                const phone = String(fd.get("phone") || "");
                const type = String(fd.get("type") || "");
                const message = String(fd.get("message") || "");
                const text = encodeURIComponent(
                  `Halo ${BRAND.name}.\\nNama: ${name}\\nTelepon: ${phone}\\nKebutuhan: ${type}\\nPesan: ${message}`
                );
                window.open(`https://wa.me/${BRAND.phoneIntl}?text=${text}`, "_blank");
              }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Nama</label>
                  <input name="name" required placeholder="Nama lengkap" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10" />
                </div>
                <div>
                  <label className="text-sm font-medium">No. WhatsApp</label>
                  <input name="phone" required placeholder="08xxxxxxxxxx" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Jenis Pekerjaan</label>
                  <select name="type" className="mt-1 w-full rounded-xl border px-3 py-2">
                    <option>Pembuatan Lapangan Baru</option>
                    <option>Renovasi/Perbaikan</option>
                    <option>Coating & Garis Lapangan</option>
                    <option>Pemasangan Rumput Sintetis</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Pesan</label>
                  <textarea name="message" rows={4} placeholder="Ukuran area, kondisi eksisting, target selesai, dll." className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-black text-white hover:shadow">
                Kirim via WhatsApp <ChevronRight className="w-4 h-4" />
              </button>
              <div className="mt-3 text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" /> {BRAND.email}
              </div>
            </form>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Info & Area Layanan</h3>
              <p className="text-sm text-muted-foreground mt-2">Kami melayani proyek rumah, komplek, sekolah, kampus, hingga fasilitas olahraga komersial di wilayah {BRAND.city}.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {["Survey lokasi", "Konsultasi material", "RAB transparan", "Tim bersertifikat"].map((x) => (
                  <div key={x} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4" /> {x}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-black/10 p-4 bg-slate-50">
                <div className="text-sm text-muted-foreground">Kontak cepat</div>
                <a href={`tel:${BRAND.phoneIntl}`} className="mt-1 block font-semibold">+{BRAND.phoneIntl}</a>
                <a href={waLink} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 bg-white hover:shadow">
                  <PhoneCall className="w-4 h-4" /> Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-emerald-50 to-sky-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-xl md:text-2xl font-extrabold">Butuh Survey Lokasi Minggu Ini?</div>
              <div className="text-sm text-muted-foreground">Jadwalkan kunjungan teknisi kami untuk cek kondisi & ukur detail.</div>
            </div>
            <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-black text-white hover:shadow">
              Jadwalkan Sekarang <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="font-extrabold">{BRAND.name}</div>
              <div className="text-sm text-muted-foreground">{BRAND.tagline}</div>
              <div className="text-sm text-muted-foreground mt-1">© {new Date().getFullYear()} — All rights reserved.</div>
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {BRAND.city}</div>
              <div className="flex items-center gap-2 mt-2"><Mail className="w-4 h-4" /> {BRAND.email}</div>
            </div>
          </div>
        </div>
      </footer>

      {/* WA FLOATING BUTTON */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full shadow-lg px-4 py-2 bg-emerald-500 text-white hover:shadow-xl"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5" />
        Chat Kami
      </a>
    </div>
  );
}
