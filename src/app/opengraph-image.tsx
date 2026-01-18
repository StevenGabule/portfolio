import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "JPSOLUTIONS - Hire Filipino Full Stack Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)",
          position: "relative",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo */}
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
              width: 100,
              height: 100,
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 24,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
            }}
          >
            <span
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: "white",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              JP
            </span>
          </div>
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            JPSOLUTIONS
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: "#e2e8f0",
            fontWeight: 600,
            marginBottom: 20,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Hire an Experienced Filipino Full Stack Developer
        </div>

        {/* Skills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {["React", "Next.js", "Node.js", "Laravel", "TypeScript"].map((skill) => (
            <div
              key={skill}
              style={{
                padding: "8px 20px",
                background: "rgba(99, 102, 241, 0.2)",
                borderRadius: 20,
                border: "1px solid rgba(99, 102, 241, 0.4)",
                color: "#a5b4fc",
                fontSize: 20,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          6+ Years Experience • 50+ Projects • Worldwide Clients
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#6366f1",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          jpsolutions.art
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
