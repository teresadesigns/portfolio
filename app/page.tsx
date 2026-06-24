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
              color: "#B9B9B9",
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
            <Link href="/work" style={{ borderBottom: "none", color: "#525252",letterSpacing:"-0.2px", fontSize: "14px" }}>
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
      <section id="selected-work" style={{ marginTop: "200px" }}>
        <Container size="wide">
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "2px",
              textAlign: "center",
              color: "#525252",
              textTransform: "uppercase",
              marginBottom: "0px"
            }}
          >
            Selected Work
          </p>
        </Container>
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
              gap: "50px",
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
                <div style={{ marginTop: "15px", maxWidth: "600px" }}>
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

          <div style={{ marginTop: "90px" }} />
        </Container>
      </section>

      <div
        style={{
          marginLeft: "calc(-1 * var(--page-padding-x))",
          marginRight: "calc(-1 * var(--page-padding-x))",
          borderTop: "1px solid #B9B9B9",
        }}
      />
      <Container size="wide">
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <Link href="/work" style={{ color: "#525252", borderBottom: "none", fontSize: "14px" }}>
            See more [ work ] ↗
          </Link>
        </div>
      </Container>

      {/* Thinking Out Loud */}
      <section id="thinking-out-loud">
        <Container size="wide">
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "2px",
              textAlign: "center",
              color: "#525252",
              textTransform: "uppercase",
              marginTop: "300px",
              marginBottom: "0px",
            }}
          >
            Thinking Out Loud
          </p>

          <div
            style={{
              marginTop: "var(--spacing-block)",
              paddingTop: "var(--spacing-block)",
              paddingBottom: "var(--spacing-block)",
              borderTop: "1px solid #a6a6a6",
              borderBottom: "1px solid #a6a6a6",
            }}
          >
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "16px", color: "#a6a6a6", fontWeight: 600, letterSpacing: "-0.2px" }}>
              coming soon.
            </p>
            <p style={{ marginTop: "4px", fontFamily: "var(--font-inter)", fontSize: "16px", color: "#a6a6a6", fontWeight: 400, letterSpacing: "-0.2px" }}>
              my thoughts on trends, technology, design, and more.
            </p>
          </div>
        </Container>
      </section>

      {/* Playground Teaser */}
      <section
        id="playground-teaser"
        style={{ position: "relative", overflow: "hidden", marginTop: "300px" }}
      >
        {/* Decorative Jomhuria letterforms */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "-60px",
            width: "423.255px",
            height: "340px",
            fontFamily: "var(--font-jomhuria)",
            fontSize: "600px",
            fontWeight: 400,
            color: "#B9B9B9",
            textAlign: "center",
            lineHeight: "26px",
            opacity: 0.2,
            userSelect: "none",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          [t]
        </span>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            right: "-60px",
            width: "423.255px",
            height: "340px",
            fontFamily: "var(--font-jomhuria)",
            fontSize: "600px",
            fontWeight: 400,
            color: "#B9B9B9",
            textAlign: "center",
            lineHeight: "26px",
            opacity: 0.2,
            userSelect: "none",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          [t]
        </span>

        <Container size="wide">
          {/* Decorative oval */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "var(--spacing-block)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "660px",
                height: "260px",
                borderRadius: "50%",
                border: "1px solid #6E6E6E",
              }}
            >
              <span
                style={{
                  width: "520px",
                  height: "25px",
                  color: "#9B9B9B",
                  textAlign: "center",
                  fontFamily: "var(--font-inter)",
                  fontSize: "80px",
                  fontWeight: 400,
                  lineHeight: "30px",
                  letterSpacing: "-1.6px",
                }}
              >
                Playground
              </span>
            </div>
          </div>

          {/* Self portrait + more? */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "785fr 415fr",
              gap: "var(--spacing-block)",
              marginTop: "calc(var(--spacing-block) + 170px)",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "917px",
                background: "#E8E8E8",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#B9B9B9" }}>my self portrait</span>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", opacity: 0.2, marginRight: "-20px" }}>
                {[
                  { char: "m", rotate: "-8deg" },
                  { char: "o", rotate: "5deg" },
                  { char: "r", rotate: "-3deg" },
                  { char: "e", rotate: "10deg" },
                  { char: "?", rotate: "-6deg" },
                ].map(({ char, rotate }) => (
                  <span
                    key={char}
                    style={{
                      fontFamily: "var(--font-jomhuria)",
                      fontSize: "200px",
                      fontWeight: 400,
                      color: "#B9B9B9",
                      textAlign: "center",
                      lineHeight: "26px",
                      display: "inline-block",
                      transform: `rotate(${rotate})`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "calc(var(--spacing-element) + 10px)" }}>
                <Link href="/playground" style={{ color: "#525252", borderBottom: "none", fontSize: "14px" }}>
                  here you go ;P ↗
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing / CTA */}
      <section id="closing" style={{ marginTop: "250px" }}>
        <Container size="wide">
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              color: "#525252",
              letterSpacing: "-0.2px",
              textAlign: "center",
            }}
          >
            Still curious about [ teresa ]? Let&apos;s connect!
          </p>
        </Container>
      </section>
    </div>
  );
}
