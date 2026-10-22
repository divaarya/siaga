import { getSite } from "@/lib/getSite";
import { buatLinkWa } from "@/lib/whatsapp";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bukti from "./components/Bukti";
import Fasilitas from "./components/Fasilitas";
import Perbandingan from "./components/Perbandingan";
import Modul from "./components/Modul";
import CaraKerja from "./components/CaraKerja";
import Testimoni from "./components/Testimoni";
import Harga from "./components/Harga";
import Faq from "./components/Faq";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

export default async function Home() {
  const site = await getSite();
  const wa = buatLinkWa(site.whatsappNomor, site.whatsappPesan);
  return (
    <>
      <Navbar nama={site.nama} wa={wa} />
      <main>
        <Hero site={site} wa={wa} />
        <Bukti />
        <Fasilitas />
        <Perbandingan />
        <Modul />
        <CaraKerja />
        <Testimoni />
        <Harga wa={wa} />
        <Faq wa={wa} />
        <Kontak site={site} wa={wa} />
      </main>
      <Footer site={site} wa={wa} />
      <WhatsApp wa={wa} />
    </>
  );
}
