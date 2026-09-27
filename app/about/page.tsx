import Link from "next/link";
import { Container } from "@/components/container";

export default function AboutPage() {
  return (
    <article>
      <header>
        <section>
          <Container>
            <h1>About</h1>
          </Container>
        </section>
      </header>

      {/* Intro */}
      <section>
        <Container>
          <p style={{ fontSize: "1.125rem" }}>
            I&apos;m a UX researcher and product designer focused on reducing cognitive load
            in high-stakes environments. I believe clarity is a form of care.
          </p>
        </Container>
      </section>

      {/* Journey */}
      <section>
        <Container>
          <h2>Journey</h2>
          <p style={{ marginTop: "var(--spacing-element)" }}>
            [Your professional journey, how you got into UX research and design,
            key transitions or formative experiences...]
          </p>
          <p style={{ marginTop: "var(--spacing-element)" }}>
            [More details about your background, education, or career path...]
          </p>
        </Container>
      </section>

      {/* Values & Mindset */}
      <section>
        <Container>
          <h2>Values & mindset</h2>
          <p style={{ marginTop: "var(--spacing-element)" }}>
            [What drives your work, your design philosophy, what you believe about
            research and design...]
          </p>
          <p style={{ marginTop: "var(--spacing-element)" }}>
            [How you approach problems, collaborate with teams, or think about users...]
          </p>
        </Container>
      </section>

      {/* Skills & Expertise */}
      <section>
        <Container>
          <h2>Skills & expertise</h2>
          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>Research methods</h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                User interviews, usability testing, surveys, contextual inquiry, analytics analysis
              </p>
            </div>
            <div>
              <h3>Design tools</h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Figma, Sketch, Adobe Creative Suite, prototyping tools
              </p>
            </div>
            <div>
              <h3>Domains</h3>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Healthcare, FinTech, Enterprise software, AI/ML tools
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Resume */}
      <section>
        <Container>
          <h2>Resume</h2>
          <p style={{ marginTop: "var(--spacing-element)" }}>
            Want the full details? Download my resume or connect with me on LinkedIn.
          </p>
          <div style={{ marginTop: "var(--spacing-block)", display: "flex", gap: "var(--spacing-block)", flexWrap: "wrap" }}>
            <a href="/resume.pdf" download>
              Download resume (PDF)
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              View LinkedIn profile
            </a>
          </div>
        </Container>
      </section>
    </article>
  );
}
