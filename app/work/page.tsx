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
                <Link href="/work/project-1">Healthcare Portal Redesign</Link>
              </h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                Lead UX Researcher | 6 months | 2024
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Redesigning a patient portal to reduce cognitive load and improve task completion
                for elderly users navigating complex health information.
              </p>
              <ul style={{ marginTop: "var(--spacing-element)", display: "flex", gap: "var(--spacing-inline)", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>UX Research</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Healthcare</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Accessibility</li>
              </ul>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>
                <Link href="/work/project-2">Mobile Banking Experience</Link>
              </h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                Product Designer | 4 months | 2023
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Simplifying financial task flows for first-time mobile banking users through
                research-driven interaction patterns.
              </p>
              <ul style={{ marginTop: "var(--spacing-element)", display: "flex", gap: "var(--spacing-inline)", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Product Design</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>FinTech</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Mobile</li>
              </ul>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>
                <Link href="/work/project-3">AI Research Tools</Link>
              </h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                UX Researcher & Designer | 5 months | 2023
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Designing tools for academic researchers to navigate large datasets with
                AI-assisted search and synthesis.
              </p>
              <ul style={{ marginTop: "var(--spacing-element)", display: "flex", gap: "var(--spacing-inline)", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>UX Research</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Enterprise</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>AI/ML</li>
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
            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>
                <Link href="/work/project-4">E-commerce Checkout Flow</Link>
              </h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                UX Designer | 3 months | 2023
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Streamlining checkout experience to reduce cart abandonment.
              </p>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>
                <Link href="/work/project-5">Dashboard Redesign</Link>
              </h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                Product Designer | 2 months | 2022
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Improving data visualization for enterprise analytics platform.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
