import { siteConfig } from "@/data/siteConfig";

const API_URL = (
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  ""
).replace(/\/+$/, "");

function pick(...values) {
  return values.find(
    (value) => value !== undefined && value !== null && value !== "",
  );
}

export async function getSite() {
  const siteId = process.env.SITE_ID;
  const siteSecret = process.env.SITE_SECRET;

  if (!API_URL || !siteId || !siteSecret) {
    return siteConfig;
  }

  try {
    const response = await fetch(`${API_URL}/api/v1/site/config`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Site-Id": siteId,
        "X-Site-Secret": siteSecret,
      },
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      console.error("API konfigurasi gagal:", response.status);
      return siteConfig;
    }

    const json = await response.json();
    const config = json.data ?? json;

    const branding = config.branding ?? {};
    const hero = config.hero ?? {};
    const cta = config.cta ?? {};
    const contact = config.contact ?? {};
    const seo = config.seo ?? {};

    return {
      ...siteConfig,
      nama: pick(config.site?.name, config.name, siteConfig.nama),
      warnaUtama: pick(branding.primary_color, siteConfig.warnaUtama),
      heroJudul: pick(hero.headline, siteConfig.heroJudul),
      heroDeskripsi: pick(hero.subheadline, siteConfig.heroDeskripsi),
      ctaTeks: pick(hero.cta_text, siteConfig.ctaTeks),
      whatsappNomor: pick(cta.whatsapp_number, siteConfig.whatsappNomor),
      whatsappPesan: pick(
        cta.whatsapp_message_template,
        siteConfig.whatsappPesan,
      ),
      email: pick(contact.email, siteConfig.email),
      seo: {
        ...siteConfig.seo,
        metaTitle: pick(seo.meta_title, siteConfig.seo.metaTitle),
        metaDescription: pick(
          seo.meta_description,
          siteConfig.seo.metaDescription,
        ),
        ogImage: pick(seo.og_image_url, siteConfig.seo.ogImage),
      },
    };
  } catch (error) {
    console.error("API konfigurasi tidak dapat diakses:", error.message);

    return siteConfig;
  }
}
