import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LapanganPro.ID — Portofolio Kontraktor Lapangan",
  description: "Ahli pembuatan & renovasi lapangan futsal, tenis, basket, badminton. Survey cepat & garansi finishing.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "LapanganPro.ID — Portofolio Kontraktor Lapangan",
    description: "Ahli pembuatan & renovasi lapangan olahraga.",
    type: "website",
    url: "https://example.com"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
