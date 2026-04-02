import Link from "next/link";
import { Container } from "@/components/container";
import { WorkCard } from "@/components/work-card";
import { ArticleCard } from "@/components/article-card";

export default function Home() {
  return (
    <>
      {/* Hero / Introduction */}
      <section id="hero">
        <Container>
          <h1>
            UX Researcher with a strong design foundation, focused on understanding people in context
            and translating research insights into thoughtful, adoptable solutions—especially in
            healthcare and wellbeing.
          </h1>
          <p style={{ marginTop: "var(--spacing-block)", fontSize: "1.125rem", maxWidth: "60ch" }}>
            I work across research and design to help teams build experiences that people can truly
            use, trust, and sustain over time.
          </p>
        </Container>
      </section>

      {/* What I Do / How I Work */}
      <section id="what-i-do">
        <Container>
          <h2>What I Do / How I Work</h2>
          <p style={{ marginTop: "var(--spacing-block)" }}>
            I began my training in industrial design, but working in healthcare and rehabilitation contexts
            made one thing clear: solutions fail when we don&apos;t deeply understand people, systems, and
            constraints.
          </p>
          <p style={{ marginTop: "var(--spacing-element)" }}>
            My work today focuses on studying real-world use and translating research insights
            into thoughtful, feasible solutions that support wellbeing over time.
          </p>
          {/* <a href="/about">Learn more about my background →</a> */}
          <p style={{ marginTop: "var(--spacing-block)", color: "var(--foreground-muted)" }}>
            In practice, my work typically involves:
          </p>
          <div style={{ marginTop: "var(--spacing-element)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>Research grounded in real contexts</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                I study behavior, motivation, and experience in context using mixed methods, especially in
                healthcare, rehabilitation, and life transitions.
              </p>
            </div>
            <div>
              <h3>From insight to feasible solutions</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                I translate research insights into concepts and systems that are practical, usable, and
                grounded in real-world constraints.
              </p>
            </div>
            <div>
              <h3>Alignment across disciplines</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                I work closely with designers, engineers, and clinicians to align perspectives and move
                complex work forward with clarity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Work */}
      <section id="selected-work">
        <Container>
          <h2>Selected Work</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>Preventive Swallowing Training Interaction System (CTAR)</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Investigating how flow-informed interaction design influences engagement and continuous
                intention to use in preventive swallowing training.
              </p>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Research design, moderated user testing, questionnaire-based evaluation (SEM analysis),
                contextual observation, qualitative feedback synthesis, interdisciplinary collaboration
                with mechanical engineers and speech therapists.
              </p>
              <div style={{ marginTop: "var(--spacing-element)" }}>
                <Link href="/work/ctar">View case study →</Link>
              </div>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>Disability Identity & Cultural Values Study</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Examining the relationship between cultural orientation and disability identity among
                American adults with acquired mobility disabilities.
              </p>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Research design, survey development, use of validated and adapted Likert-scale instruments,
                quantitative analysis, qualitative response analysis, insight synthesis.
              </p>
              <div style={{ marginTop: "var(--spacing-element)" }}>
                <Link href="/work/disability-identity-study">View case study →</Link>
              </div>
            </article>

            <article style={{ paddingTop: "var(--spacing-block)", borderTop: "1px solid var(--border)" }}>
              <h3>Financial Behavior Support for Early-Career Professionals</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Designing a mobile experience to help early-career professionals build awareness, alignment,
                and healthier financial behaviors.
              </p>
              <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
                Secondary research, surveys and user interviews, affinity synthesis, problem scoping,
                ideation, design critique and feedback, prototyping collaboration, user testing, and iteration.
              </p>
              <div style={{ marginTop: "var(--spacing-element)" }}>
                <Link href="/work/financial-behavior-support">View case study →</Link>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Latest Thinking */}
      <section id="latest-thinking">
        <Container>
          <h2>Latest thinking</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <ArticleCard
              title="Designing for Cognitive Load"
              slug="designing-for-cognitive-load"
              date="December 10, 2024"
              readingTime="5 min read"
              excerpt="How reducing mental effort in complex interfaces improves task completion and user confidence."
              variant="compact"
            />

            <ArticleCard
              title="Research in Ambiguity"
              slug="research-in-ambiguity"
              date="November 22, 2024"
              readingTime="7 min read"
              excerpt="Navigating uncertainty in early-stage research and turning open questions into actionable insights."
              variant="compact"
            />
          </div>

          <div style={{ marginTop: "var(--spacing-block)" }}>
            <Link href="/thinking">More writing →</Link>
          </div>
        </Container>
      </section>

      {/* Closing / CTA */}
      <section id="closing">
        <Container>
          <p style={{ fontSize: "1.125rem" }}>Interested in working together?</p>
          <div style={{ marginTop: "var(--spacing-block)", display: "flex", gap: "var(--spacing-block)", flexWrap: "wrap" }}>
            <Link href="/work">View all work</Link>
            <Link href="/about">More about me</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
