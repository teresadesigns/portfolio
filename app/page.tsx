import Link from "next/link";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <div style={{ "--spacing-section": "170px" } as React.CSSProperties}>
      {/* Hero / Introduction */}
      <section id="hero">
        <Container size="wide">
          <p
            style={{
              fontFamily: "var(--font-jomhuria)",
              fontSize: "clamp(80px, 14vw, 200px)",
              color: "#a6a6a6",
              lineHeight: 0.5,
              marginTop: "90px",
            }}
          >
            [teresa yeh]
          </p>
          <h1
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "50px",
              fontWeight: 600,
              color: "#525252",
              lineHeight: "normal",
              letterSpacing: "-1.2px",
              marginTop: "40px",
              maxWidth: "1096px",
            }}
          >
            studies what stands between<br />
            people and the support they need.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "#525252",
              lineHeight: "25px",
              letterSpacing: "-0.2px",
              marginTop: "50px",
              maxWidth: "827px",
            }}
          >
            UX Researcher. Currently an MS HCDE student at UW.<br />
            I focus on healthcare, behavior change, and long-term adoption,<br />
            with a background in industrial design and a master&apos;s thesis on swallowing training.
          </p>
          <div style={{ marginTop: "55px" }}>
            <Link href="/work" style={{ borderBottom: "none", color: "#525252",letterSpacing:"-0.2px" }}>
              See my [ work ] ↗
            </Link>
          </div>
        </Container>
      </section>

      {/*
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
      */}

      {/* Selected Work */}
      <section id="selected-work" style={{ marginTop: "var(--spacing-section-lp)" }}>
        <Container size="wide">
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              textAlign: "center",
              color: "#a6a6a6",
              textTransform: "uppercase",
              marginBottom: "13px"
            }}
          >
            Selected Work
          </p>
        </Container>
        <div
          style={{
            marginLeft: "calc(-1 * var(--page-padding-x))",
            marginRight: "calc(-1 * var(--page-padding-x))",
            borderTop: "1px solid #B9B9B9",
          }}
        />
        <Container size="wide">

          {/* CTAR — featured full-width card */}
          <article style={{ marginTop: "var(--spacing-block)" }}>
            <Link href="/work/ctar-training" className="work-card" style={{ display: "block", borderBottom: "none", color: "inherit" }}>
              <div
                style={{
                  width: "100%",
                  height: "546px",
                  background: "#E8E8E8",
                  borderRadius: "4px",
                  marginTop: "50px",
                }}
              />
              <div style={{ marginTop: "15px", maxWidth: "650px" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#525252", fontWeight: 600, letterSpacing:"-0.2px" }}>
                  Preventive Swallowing Training Interaction System (CTAR)
                </p>
                <p style={{ marginTop: "0px", fontFamily: "var(--font-inter)", fontSize: "16px", color: "#525252",letterSpacing:"-0.2px",lineHeight: 1.5 }}>
                  Investigating how flow-informed interaction design influences engagement and continuous
                  intention to use in preventive swallowing training.
                </p>
                <div className="work-card-tags">
                  <p style={{ marginTop: "10px", fontFamily: "var(--font-inter)", fontSize: "16px", color: "#a6a6a6",letterSpacing:"-0.2px", lineHeight: 1.5 }}>
                    Research design · Moderated user testing · SEM analysis · Contextual observation ·
                    Interdisciplinary collaboration
                  </p>
                </div>
              </div>
            </Link>
          </article>

          {/* Deskes + Coming Soon — 2-column grid */}
          <div
            style={{
              marginTop: "0px",
              display: "grid",
              gridTemplateColumns: "721fr 423fr",
              gap: "20px",
            }}
          >
            {/* Deskes */}
            <article>
              <Link href="/work/deskes" style={{ display: "block", borderBottom: "none", color: "inherit" }}>
                <div
                  style={{
                    width: "100%",
                    height: "546px",
                    background: "#E8E8E8",
                    borderRadius: "4px",
                    marginTop: "50px",
                  }}
                />
                <div style={{ marginTop: "15px", maxWidth: "650px" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#525252", fontWeight: 600, letterSpacing: "-0.2px" }}>
                    Də&apos;skəs Usability Study
                  </p>
                  <p style={{ marginTop: "0px", fontFamily: "var(--font-inter)", fontSize: "16px", color: "#525252", letterSpacing: "-0.2px", lineHeight: 1.5 }}>
                    End-to-end usability evaluation of a mental wellness social platform for young people
                    in Kenya.
                  </p>
                </div>
              </Link>
            </article>

            {/* Coming soon placeholder */}
            <article>
              <div
                style={{
                  width: "100%",
                  height: "546px",
                  background: "#E8E8E8",
                  borderRadius: "4px",
                  marginTop: "50px",
                }}
              />
              <div style={{ marginTop: "15px", maxWidth: "650px" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#525252", fontWeight: 600, letterSpacing: "-0.2px" }}>
                  Untitled Study
                </p>
                <p style={{ marginTop: "0px", fontFamily: "var(--font-inter)", fontSize: "16px", color: "#525252", letterSpacing: "-0.2px", lineHeight: 1.5 }}>
                  In progress — details coming soon.
                </p>
              </div>
            </article>
          </div>

          <div
            style={{
              marginTop: "var(--spacing-block)",
              textAlign: "right",
            }}
          >
            <Link href="/work" style={{ color: "#525252", borderBottom: "none" }}>
              See more [ work ] ↗
            </Link>
          </div>
        </Container>
      </section>

      {/* Thinking Out Loud */}
      <section id="thinking-out-loud">
        <Container size="wide">
          <p
            style={{
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textAlign: "center",
              color: "var(--foreground-muted)",
              textTransform: "uppercase",
            }}
          >
            Thinking Out Loud
          </p>

          <div
            style={{
              marginTop: "var(--spacing-block)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-block)",
            }}
          >
            {/* Article 1 */}
            <article
              style={{
                paddingTop: "var(--spacing-block)",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "var(--spacing-block)",
                }}
              >
                <div>
                  <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}>
                    <Link href="/thinking/designing-for-cognitive-load">
                      Designing for Cognitive Load
                    </Link>
                  </h3>
                  <p style={{ marginTop: "var(--spacing-inline)", fontSize: "0.9rem", color: "#525252" }}>
                    How reducing mental effort in complex interfaces improves task completion and user confidence.
                  </p>
                </div>
                <div
                  style={{
                    flexShrink: 0,
                    textAlign: "right",
                    fontSize: "0.875rem",
                    color: "var(--foreground-muted)",
                  }}
                >
                  <p>5 min read</p>
                  <p>December 10, 2024</p>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article
              style={{
                paddingTop: "var(--spacing-block)",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "var(--spacing-block)",
                }}
              >
                <div>
                  <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}>
                    <Link href="/thinking/research-in-ambiguity">
                      Research in Ambiguity
                    </Link>
                  </h3>
                  <p style={{ marginTop: "var(--spacing-inline)", fontSize: "0.9rem", color: "#525252" }}>
                    Navigating uncertainty in early-stage research and turning open questions into actionable insights.
                  </p>
                </div>
                <div
                  style={{
                    flexShrink: 0,
                    textAlign: "right",
                    fontSize: "0.875rem",
                    color: "var(--foreground-muted)",
                  }}
                >
                  <p>7 min read</p>
                  <p>November 22, 2024</p>
                </div>
              </div>
            </article>
          </div>

          <div style={{ marginTop: "var(--spacing-block)", textAlign: "center" }}>
            <Link href="/thinking" style={{ color: "#525252", borderBottom: "none" }}>
              More Thoughts from [ teresa ] ↗
            </Link>
          </div>
        </Container>
      </section>

      {/* Playground Teaser */}
      <section
        id="playground-teaser"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Decorative Jomhuria letterforms */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-0.2em",
            left: "-0.05em",
            fontFamily: "var(--font-jomhuria)",
            fontSize: "clamp(120px, 20vw, 280px)",
            color: "#E0E0E0",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          [t]
        </span>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-0.2em",
            right: "-0.05em",
            fontFamily: "var(--font-jomhuria)",
            fontSize: "clamp(120px, 20vw, 280px)",
            color: "#E0E0E0",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          [t]
        </span>

        <Container size="wide">
          {/* Pill link */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "var(--spacing-block)",
            }}
          >
            <Link
              href="/playground"
              style={{
                border: "1px solid #B9B9B9",
                borderRadius: "999px",
                padding: "0.75rem 2.5rem",
                fontSize: "1.25rem",
                color: "#6E6E6E",
                letterSpacing: "0.02em",
              }}
            >
              Playground
            </Link>
          </div>

          {/* Category tags */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--spacing-block)",
              marginTop: "var(--spacing-element)",
              flexWrap: "wrap",
            }}
          >
            {["Urban Sketches", "Street Photography", "Design Experiments", "Generative Art"].map(
              (cat) => (
                <span
                  key={cat}
                  style={{ fontSize: "0.875rem", color: "#B9B9B9", letterSpacing: "0.04em" }}
                >
                  {cat}
                </span>
              )
            )}
          </div>

          {/* Self portrait + more? */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--spacing-block)",
              marginTop: "var(--spacing-block)",
              alignItems: "end",
            }}
          >
            <div
              style={{
                height: "320px",
                background: "#E8E8E8",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#B9B9B9" }}>my self portrait</span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jomhuria)",
                  fontSize: "clamp(60px, 10vw, 140px)",
                  color: "#B9B9B9",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                more?
              </p>
              <div style={{ marginTop: "var(--spacing-element)" }}>
                <Link href="/playground" style={{ color: "#525252", borderBottom: "none" }}>
                  Here you go ↗
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing / CTA */}
      <section id="closing">
        <Container size="wide">
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1.125rem",
              color: "#525252",
              textAlign: "center",
            }}
          >
            Still curious about [ teresa ]? Let&apos;s connect!
          </p>
          <div
            style={{
              marginTop: "var(--spacing-block)",
              display: "flex",
              gap: "var(--spacing-block)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link href="/work" style={{ color: "#525252", borderBottom: "none" }}>View all work</Link>
            <Link href="/about" style={{ color: "#525252", borderBottom: "none" }}>More about me</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
