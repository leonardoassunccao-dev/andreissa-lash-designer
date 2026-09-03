import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Andreissa Lash Designer", short_name: "Andreissa", description: "Extensão de cílios em Barrinha/SP", start_url: "/", display: "standalone", background_color: "#f5f0e8", theme_color: "#10100f", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
