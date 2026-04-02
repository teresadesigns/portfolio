import Link from "next/link";
import { Container } from "@/components/container";

export default function PlaygroundPage() {
  return (
    <>
      <section>
        <Container>
          <h1>Playground</h1>
          <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
            Creative experiments, drawing, photography, and explorations outside of client work.
          </p>
        </Container>
      </section>

      <section>
        <Container>
          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h2>
                <Link href="/playground/urban-sketches">Urban Sketches</Link>
              </h2>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Pen and ink drawings of city scenes and architecture.
              </p>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h2>
                <Link href="/playground/street-photography">Street Photography</Link>
              </h2>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Candid moments and observations from everyday life.
              </p>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h2>
                <Link href="/playground/design-experiments">Design Experiments</Link>
              </h2>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Explorations in typography, layout, and visual systems.
              </p>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h2>
                <Link href="/playground/generative-art">Generative Art</Link>
              </h2>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Code-based visual experiments and algorithmic patterns.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
