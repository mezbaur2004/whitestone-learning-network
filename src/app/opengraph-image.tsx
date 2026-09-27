import { ImageResponse } from "next/og";
import { founder, institutions, site } from "@/content/site";

// Same pebble as the site logo (StoneMark), without the favicon tile.
const STONE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><radialGradient id="b" cx="36%" cy="28%" r="78%"><stop offset="0%" stop-color="#ffffff"/><stop offset="38%" stop-color="#f2f3f4"/><stop offset="78%" stop-color="#d9dce0"/><stop offset="100%" stop-color="#c3c7cc"/></radialGradient><linearGradient id="u" x1="0" y1="0" x2="0" y2="1"><stop offset="50%" stop-color="#0f1012" stop-opacity="0"/><stop offset="100%" stop-color="#0f1012" stop-opacity="0.14"/></linearGradient><radialGradient id="s" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0"/></radialGradient><radialGradient id="sh" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#0f1012" stop-opacity="0.28"/><stop offset="100%" stop-color="#0f1012" stop-opacity="0"/></radialGradient></defs><ellipse cx="20.6" cy="32.2" rx="14" ry="2.6" fill="url(#sh)"/><path id="p" d="M4.3 23.2C3.6 17.9 8.9 12.2 16.4 10.4c6.4-1.5 13.9-.6 17.7 3.5 3.3 3.6 2.4 9.1-2.2 12.9-4.3 3.5-10.6 5-16.6 4.4C9.3 30.6 4.9 27.9 4.3 23.2Z" fill="url(#b)"/><path d="M4.3 23.2C3.6 17.9 8.9 12.2 16.4 10.4c6.4-1.5 13.9-.6 17.7 3.5 3.3 3.6 2.4 9.1-2.2 12.9-4.3 3.5-10.6 5-16.6 4.4C9.3 30.6 4.9 27.9 4.3 23.2Z" fill="url(#u)"/><path d="M12.4 12.6c1.6 3.6 4 7 7.6 9.4 2.6 1.8 4.4 4 5.1 7.2" stroke="#7d838b" stroke-opacity="0.35" stroke-width="0.5" stroke-linecap="round" fill="none"/><circle cx="8.6" cy="21.4" r="0.3" fill="#6f757d" fill-opacity="0.3"/><circle cx="13.9" cy="26.8" r="0.35" fill="#6f757d" fill-opacity="0.28"/><circle cx="26.4" cy="24.6" r="0.4" fill="#6f757d" fill-opacity="0.3"/><circle cx="29.8" cy="16.2" r="0.3" fill="#6f757d" fill-opacity="0.26"/><circle cx="18.2" cy="17.9" r="0.25" fill="#6f757d" fill-opacity="0.22"/><circle cx="22.9" cy="13.6" r="0.28" fill="#6f757d" fill-opacity="0.24"/><circle cx="31.2" cy="21.3" r="0.3" fill="#6f757d" fill-opacity="0.28"/><circle cx="10.9" cy="17.3" r="0.25" fill="#6f757d" fill-opacity="0.2"/><ellipse cx="15.4" cy="14.6" rx="6.2" ry="2.2" transform="rotate(-10 15.4 14.6)" fill="url(#s)"/><path d="M4.3 23.2C3.6 17.9 8.9 12.2 16.4 10.4c6.4-1.5 13.9-.6 17.7 3.5 3.3 3.6 2.4 9.1-2.2 12.9-4.3 3.5-10.6 5-16.6 4.4C9.3 30.6 4.9 27.9 4.3 23.2Z" fill="none" stroke="#0f1012" stroke-opacity="0.2" stroke-width="0.8"/></svg>`;
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
