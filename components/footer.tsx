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
              href="mailto:chyeh12@uw.edu"
              style={{ fontSize: "0.875rem" }}
            >
              chyeh12@uw.edu
            </a>
            <a
              href="https://linkedin.com/in/teresa-yeh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.875rem" }}
            >
              LinkedIn
            </a>
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>
            &copy; {new Date().getFullYear()} Teresa Yeh. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
