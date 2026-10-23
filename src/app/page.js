import { getSite } from "@/lib/getSite";
import { buatLinkWa } from "@/lib/whatsapp";
import Navbar from "./components/Navbar";
import Jam from "./components/Jam";
import Fitur from "./components/Fitur";
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
      <Navbar nama={site.nama} wa={wa} cta={site.ctaTeks} />
      <main>
        <Jam site={site} wa={wa} />
        <Fitur />
        <Harga wa={wa} />
        <Faq wa={wa} />
        <Kontak site={site} wa={wa} />
      </main>
      <Footer site={site} wa={wa} />
      <WhatsApp wa={wa} />
    </>
  );
}
