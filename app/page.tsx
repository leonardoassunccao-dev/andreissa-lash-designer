import Site from "@/components/Site";

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": ["BeautySalon", "LocalBusiness"], name: "Andreissa Lash Designer", description: "Extensão de cílios em Barrinha/SP", areaServed: { "@type": "City", name: "Barrinha" }, address: { "@type": "PostalAddress", addressLocality: "Barrinha", addressRegion: "SP", addressCountry: "BR" }, telephone: "+5516991200535", sameAs: ["https://www.instagram.com/andreissa__lashdesigner/"] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><Site/></>;
}
