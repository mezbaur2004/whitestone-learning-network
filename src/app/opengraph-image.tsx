import { ImageResponse } from "next/og";
import { founder, institutions, site } from "@/content/site";

export const alt = "Whitestone Learning Network — Schools, Online Learning & Resources in Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(120% 100% at 80% 0%, #f7f7f6 0%, #e4e5e6 55%, #d3d5d8 100%)",
          color: "#0f1012",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 800, letterSpacing: -2 }}>
          <div style={{ width: 44, height: 44, borderRadius: "58% 42% 55% 45% / 48% 60% 40% 52%", background: "#0f1012" }} />
          whitestone
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3, maxWidth: 960 }}>
            Schools, online learning &amp; resources in Dhaka
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#3b3e44", maxWidth: 1000 }}>
            {institutions.map((i) => i.name).join(" · ")}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#6a6e75" }}>
          <span>{site.fullName}</span>
          <span>
            Founded by {founder.name} · {site.city}, {site.country}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
