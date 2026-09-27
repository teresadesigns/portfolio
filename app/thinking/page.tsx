import Link from "next/link";
import { Container } from "@/components/container";

export default function ThinkingPage() {
  return (
    <>
      <section>
        <Container>
          <h1>Thinking</h1>
          <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
            Writing about UX research, design, and human-centered systems.
          </p>
        </Container>
      </section>

      <section>
        <Container>
          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h2>
                <Link href="/thinking/designing-for-cognitive-load">
                  Designing for Cognitive Load
                </Link>
              </h2>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                December 10, 2024 · 5 min read
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                How reducing mental effort in complex interfaces improves task completion
                and user confidence. Exploring the relationship between cognitive load theory
                and practical interface design.
              </p>
              <ul style={{ marginTop: "var(--spacing-element)", display: "flex", gap: "var(--spacing-inline)", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>UX Research</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Cognitive Science</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Design Principles</li>
              </ul>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h2>
                <Link href="/thinking/research-in-ambiguity">
                  Research in Ambiguity
                </Link>
              </h2>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                November 22, 2024 · 7 min read
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Navigating uncertainty in early-stage research and turning open questions
                into actionable insights. A practical guide to framing research when the
                problem space is unclear.
              </p>
              <ul style={{ marginTop: "var(--spacing-element)", display: "flex", gap: "var(--spacing-inline)", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Research Methods</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Problem Framing</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Strategy</li>
              </ul>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h2>
                <Link href="/thinking/when-to-prototype">
                  When to Prototype
                </Link>
              </h2>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                October 15, 2024 · 6 min read
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Knowing when to sketch, when to wireframe, and when to build high-fidelity
                prototypes. A framework for matching fidelity to research questions.
              </p>
              <ul style={{ marginTop: "var(--spacing-element)", display: "flex", gap: "var(--spacing-inline)", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Prototyping</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Design Process</li>
                <li style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Decision Making</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
