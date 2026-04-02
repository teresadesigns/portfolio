import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      marginTop: "var(--spacing-section)",
      padding: "var(--spacing-block) 0"
    }}>
      <Container size="wide">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "var(--spacing-block)",
          flexWrap: "wrap"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-inline)" }}>
            <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>Get in touch</p>
            <a
              href="mailto:your.email@example.com"
              style={{ fontSize: "0.875rem" }}
            >
              your.email@example.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.875rem" }}
            >
              LinkedIn
            </a>
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
