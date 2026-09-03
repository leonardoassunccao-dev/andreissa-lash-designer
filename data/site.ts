export const contact = {
  whatsapp: "5516991200535",
  whatsappLabel: "(16) 99120-0535",
  instagram: "https://www.instagram.com/andreissa__lashdesigner/",
  instagramLabel: "@andreissa__lashdesigner",
  location: "Barrinha/SP",
};

export type Procedure = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  indicatedFor: string;
  duration: string;
  price: string;
  image: string;
  ratings: { label: string; value: number }[];
};

export const procedures: Procedure[] = [{
  id: "volume-brasileiro",
  name: "Volume Brasileiro",
  eyebrow: "Fio a fio · natural e definido",
  description: "Técnica que proporciona mais definição e volume mantendo um resultado natural e elegante.",
  indicatedFor: "Para quem deseja mais preenchimento e destaque no olhar sem perder naturalidade.",
  duration: "Até aproximadamente 20 dias",
  price: "R$ 100",
  image: "/images/resultado-01.jpg",
  ratings: [
    { label: "Naturalidade", value: 4 },
    { label: "Volume", value: 4 },
    { label: "Impacto", value: 4 },
  ],
}];

export const gallery = [
  { src: "/images/resultado-01.jpg", alt: "Resultado real de extensão de cílios Volume Brasileiro", category: "Volume Brasileiro" },
  { src: "/images/andreissa-atendimento.jpg", alt: "Andreissa realizando um atendimento de extensão de cílios", category: "Bastidores" },
  { src: "/images/resultado-02.jpg", alt: "Detalhe de resultado natural em extensão de cílios", category: "Volume Brasileiro" },
  { src: "/images/andreissa-certificado.jpg", alt: "Andreissa em momento de formação profissional", category: "Bastidores" },
  { src: "/images/resultado-03.jpg", alt: "Resultado real de cílios com definição e leveza", category: "Volume Brasileiro" },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
