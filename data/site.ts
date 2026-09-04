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

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: "Volume Brasileiro" | "Resultado real" | "Bastidores" | "Formação";
  width: number;
  height: number;
  objectPosition: string;
  featured?: boolean;
};

export const gallery: GalleryImage[] = [
  {
    src: "/images/results/resultado-real-olhar-01.jpg",
    alt: "Resultado real de extensão de cílios realizado por Andreissa Lash Designer",
    title: "Resultado real",
    category: "Resultado real",
    width: 1065,
    height: 1420,
    objectPosition: "50% 42%",
    featured: true,
  },
  {
    src: "/images/results/resultado-real-olhar-02.jpg",
    alt: "Detalhe do olho completo com extensão de cílios realizada por Andreissa Lash Designer",
    title: "Resultado real",
    category: "Resultado real",
    width: 1440,
    height: 1920,
    objectPosition: "50% 50%",
  },
  {
    src: "/images/results/bastidores-atendimento.png",
    alt: "Andreissa Lash Designer concentrada durante um atendimento",
    title: "Bastidores do atendimento",
    category: "Bastidores",
    width: 669,
    height: 839,
    objectPosition: "52% 48%",
  },
  {
    src: "/images/results/volume-brasileiro-01.jpg",
    alt: "Resultado de extensão de cílios Volume Brasileiro realizado por Andreissa Lash Designer",
    title: "Volume Brasileiro",
    category: "Volume Brasileiro",
    width: 1218,
    height: 1600,
    objectPosition: "50% 48%",
  },
  {
    src: "/images/results/formacao-profissional.png",
    alt: "Andreissa assinando seu certificado de formação como Lash Designer",
    title: "Formação profissional",
    category: "Formação",
    width: 1085,
    height: 1450,
    objectPosition: "50% 48%",
  },
  {
    src: "/images/results/volume-brasileiro-03.jpg",
    alt: "Resultado natural de extensão de cílios realizado por Andreissa Lash Designer",
    title: "Volume Brasileiro",
    category: "Volume Brasileiro",
    width: 1361,
    height: 2420,
    objectPosition: "50% 50%",
  },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
