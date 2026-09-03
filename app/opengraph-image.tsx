import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Andreissa Lash Designer - Seu olhar, sua identidade";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", background: "#121210", color: "#f5f0e8", padding: 72, alignItems: "center", justifyContent: "space-between" }}><div style={{ display: "flex", flexDirection: "column", width: "58%" }}><span style={{ color: "#d7b77e", fontSize: 24, letterSpacing: 8 }}>LASH DESIGNER · BARRINHA/SP</span><span style={{ fontFamily: "serif", fontSize: 104, marginTop: 28 }}>ANDREISSA</span><span style={{ fontFamily: "serif", fontStyle: "italic", fontSize: 52 }}>Seu olhar. Sua identidade.</span></div><div style={{ width: 260, height: 260, border: "1px solid #d7b77e", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "serif", fontSize: 120, color: "#d7b77e" }}>A</div></div>, size); }
