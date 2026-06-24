import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      marginTop: "50px",
      padding: "var(--spacing-block) 0",
    }}>
      <Container size="wide">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "50px",
        }}>
          {/* Left: logomark + contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-inline)" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-jomhuria)",
                fontSize: "60px",
                fontWeight: 400,
                lineHeight: "26px",
                color: "#B9B9B9",
                borderBottom: "none",
              }}
            >
              [t]
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "0px" }}>
              <p style={{ fontSize: "0.875rem", color: "#525252", fontWeight: 600 }}>Let&apos;s connect!</p>
              <a
                href="mailto:chyeh12@uw.edu"
                style={{ fontSize: "0.875rem", color: "#525252", borderBottom: "none", textDecoration: "underline", textDecorationColor: "#525252", textUnderlineOffset: "3px" }}
              >
                chyeh12@uw.edu
              </a>
              <a
                href="https://linkedin.com/in/teresa-yeh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.875rem", color: "#525252", borderBottom: "none", textDecoration: "underline", textDecorationColor: "#525252", textUnderlineOffset: "3px" }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: nav links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-start" }}>
            <Link href="/"          style={{ fontSize: "0.875rem", color: "#525252", borderBottom: "none", textDecoration: "underline", textDecorationColor: "#525252", textUnderlineOffset: "3px" }}>Home</Link>
            <Link href="/work"      style={{ fontSize: "0.875rem", color: "#525252", borderBottom: "none", textDecoration: "underline", textDecorationColor: "#525252", textUnderlineOffset: "3px" }}>Work</Link>
            <Link href="/thinking"  style={{ fontSize: "0.875rem", color: "#525252", borderBottom: "none", textDecoration: "underline", textDecorationColor: "#525252", textUnderlineOffset: "3px" }}>Thoughts</Link>
            <Link href="/about"     style={{ fontSize: "0.875rem", color: "#525252", borderBottom: "none", textDecoration: "underline", textDecorationColor: "#525252", textUnderlineOffset: "3px" }}>About</Link>
            <Link href="/playground" style={{ fontSize: "0.875rem", color: "#525252", borderBottom: "none", textDecoration: "underline", textDecorationColor: "#525252", textUnderlineOffset: "3px" }}>Playground</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
