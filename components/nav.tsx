import Link from "next/link";
import { Container } from "./container";

export function Nav() {
  return (
    <nav style={{
      borderBottom: "1px solid var(--border)",
      padding: "var(--spacing-element) 0"
    }}>
      <Container size="wide">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--spacing-block)"
        }}>
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

          <ul style={{
            display: "flex",
            gap: "var(--spacing-block)",
            alignItems: "center"
          }}>
            <li>
              <Link href="/work" style={{ borderBottom: "none" }}>Work</Link>
            </li>
            <li>
              <Link href="/thinking" style={{ borderBottom: "none" }}>Thinking</Link>
            </li>
            <li>
              <Link href="/about" style={{ borderBottom: "none" }}>About</Link>
            </li>
            <li>
              <Link href="/playground" style={{ borderBottom: "none" }}>Playground</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
