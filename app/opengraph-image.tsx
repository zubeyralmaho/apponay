import { ImageResponse } from "next/og";

// Image metadata
export const alt = "AppOnay - Apple Developer Hesap Açma ve Ödeme Sorunu Çözümü";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation - OpenGraph image for social sharing
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              background: "linear-gradient(135deg, #0071e3 0%, #00c7ff 100%)",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: "bold",
              color: "white",
              marginRight: 20,
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "white",
            }}
          >
            AppOnay.com
          </span>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 20,
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Apple Developer Hesap Açma
        </div>

        {/* Subtitle with blue accent */}
        <div
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#0071e3",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Ödeme Sorunu Çözümü
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: "#a1a1a6",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Payment Declined hatası • D-U-N-S Numarası • %100 Başarı Garantisi
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 18,
            color: "#86868b",
          }}
        >
          🇹🇷 Türkiye&apos;nin #1 Apple Developer Destek Hizmeti
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
