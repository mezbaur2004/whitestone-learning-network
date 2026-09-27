import { ImageResponse } from "next/og";
import { STONE_FACETS, STONE_GROUND_Y } from "@/components/stone-facets";
import { founder, institutions, site } from "@/content/site";

// Same stone as the site logo (StoneMark).
const STONE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><radialGradient id="g"><stop offset="0" stop-color="#0f1012" stop-opacity=".3"/><stop offset="1" stop-color="#0f1012" stop-opacity="0"/></radialGradient></defs><ellipse cx="20" cy="${STONE_GROUND_Y}" rx="15" ry="2.4" fill="url(#g)"/><g fill="none" stroke="#0f1012" stroke-opacity=".14" stroke-width="1.2" stroke-linejoin="round">${STONE_FACETS.map((f) => `<polygon points="${f.points}"/>`).join("")}</g><g stroke-linejoin="round">${STONE_FACETS.map((f) => `<polygon points="${f.points}" fill="${f.fill}" stroke="${f.fill}" stroke-width=".35"/>`).join("")}</g></svg>`;
const STONE_SRC = `data:image/svg+xml;base64,${Buffer.from(STONE_SVG).toString("base64")}`;

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
          <img src={STONE_SRC} width={60} height={60} alt="" />
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
