import Link from "next/link";
import { Container } from "@/components/container";

export default function WorkPage() {
  return (
    <>
      <section>
        <Container>
          <h1>Work</h1>
          <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
            Case studies exploring research, design, and systems thinking.
          </p>
        </Container>
      </section>

      {/* Featured Case Studies */}
      <section>
        <Container>
          <h2>Featured case studies</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>
                <Link href="/work/project-4">Preventive Swallowing-Strength Training System (CTAR)</Link>
              </h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                Lead UX Researcher & Interaction Designer | Feb 2024 – Jun 2024
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Investigating how flow-informed interaction design influences engagement and continuous
                intention to use in preventive swallowing training for adults 50+.
              </p>
              <ul style={{ marginTop: "var(--spacing-element)", display: "flex", gap: "var(--spacing-inline)", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>UX Research</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Health Innovation</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Mixed Methods</li>
              </ul>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>
                <Link href="/work/deskes">Də&apos;skəs Usability Study</Link>
              </h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                UX Researcher | Jan 2026 – Mar 2026
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                End-to-end usability evaluation of a mental wellness social platform for young people
                in Kenya, surfacing critical barriers to engagement, trust, and content discovery.
              </p>
              <ul style={{ marginTop: "var(--spacing-element)", display: "flex", gap: "var(--spacing-inline)", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>UX Research</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Health Tech</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Mixed Methods</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      {/* Other Projects */}
      <section>
        <Container>
          <h2>Other projects</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
          </div>
        </Container>
      </section>
    </>
  );
}
