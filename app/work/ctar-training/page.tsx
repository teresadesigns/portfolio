import { Container } from "@/components/container";
import Link from "next/link";

export default function CTARCaseStudy() {
  return (
    <article>

      {/* ── HEADER ── */}
      <section>
        <Container>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--foreground-muted)",
            marginBottom: "var(--spacing-inline)"
          }}>
            Master's Thesis Case Study
          </p>
          <h1 style={{ maxWidth: "18ch" }}>
            The Adoption Gap: Why Older Adults Don't Keep Training?
          </h1>
        </Container>
      </section>

      {/* ── HERO IMAGE ── */}
      <section>
        <Container wide>
          <div style={{
            width: "100%",
            aspectRatio: "16 / 7",
            background: "var(--border)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--foreground-muted)",
            fontSize: "0.875rem"
          }}>
            [Hero image: system in use]
          </div>
        </Container>
      </section>

      {/* ── METADATA BAND ── */}
      <section>
        <Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--spacing-block)",
            paddingTop: "var(--spacing-block)",
            paddingBottom: "var(--spacing-block)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}>
            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--foreground-muted)", marginBottom: "0.25rem" }}>ROLE</p>
              <p>Lead UX Researcher</p>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--foreground-muted)", marginBottom: "0.25rem" }}>DURATION</p>
              <p>Sep 2022 – Jun 2024</p>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--foreground-muted)", marginBottom: "0.25rem" }}>SECTOR</p>
              <p>Preventive Health · Aging · Behavior Change</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── OVERVIEW ── */}
      <section>
        <Container>
          <h2>Overview</h2>
          <div style={{
            marginTop: "var(--spacing-block)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-element)"
          }}>
            <div>
              <h3 style={{ marginBottom: "var(--spacing-inline)" }}>Context</h3>
              <p>
                Preventive training device for dysphagia (swallowing difficulty), designed for adults 50+,
                targeting the window before symptom onset. The core challenge: what drives someone to keep
                doing a preventive exercise that doesn't yet feel necessary?
              </p>
            </div>
            <div>
              <h3 style={{ marginBottom: "var(--spacing-inline)" }}>Presented at</h3>
              <p>IEEE-ICASI 2025 conference; Journal of Design 2024 conference, Taiwan</p>
            </div>

            {/* The Finding — yellow callout */}
            <div style={{
              background: "var(--band-highlight)",
              padding: "var(--spacing-block)",
              borderRadius: "4px",
              marginTop: "var(--spacing-element)"
            }}>
              <p style={{
                fontSize: "0.75rem",
                color: "var(--foreground-muted)",
                marginBottom: "var(--spacing-inline)",
                letterSpacing: "0.05em"
              }}>
                THE FINDING
              </p>
              <p>
                My model showed intrinsic motivation, not self-efficacy, as the strongest predictor of
                long-term use. I'd expected self-efficacy — confidence in using the device — to matter most;
                instead it came out weak and negative. Interviews explained why: for this population, sticking
                with the system wasn't about confidence in the device, it was about already seeing themselves
                as someone who takes preventive health action. That gap between the model and the interviews
                became the basis for the design guidelines proposed later in this case study.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── THE CHALLENGE ── yellow band */}
      <section style={{ background: "var(--band-highlight)" }}>
        <Container>
          <div style={{ paddingTop: "var(--spacing-section)", paddingBottom: "var(--spacing-section)" }}>
            <h2>The Challenge</h2>
            <div style={{
              marginTop: "var(--spacing-block)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-element)"
            }}>
              <p>
                Dysphagia affects nutrition, health, and independence in older adults. By the time symptoms
                appear, significant muscle decline has often already occurred. Preventive training exists.
                The problem is that it rarely sustains consistent engagement over time.
              </p>
              <p>
                That raised the <strong>research question</strong> I kept coming back to: what actually
                drives an older adult to keep doing a preventive exercise that doesn't yet feel necessary?
              </p>
              <p>
                I didn't want to answer that question from the outside. So I used the system itself as a
                research instrument: building a gamified, biofeedback-enabled CTAR device to create the
                conditions where I could study engagement, motivation, and long-term use intent in a
                realistic context.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MY CONTRIBUTIONS ── */}
      <section>
        <Container>
          <h2>My Contributions</h2>
          <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
            I led the research and design end to end, across five phases:
          </p>
          <div style={{
            marginTop: "var(--spacing-block)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-element)"
          }}>
            {[
              {
                phase: "Framing & Research Design",
                detail: "Defined the research question and theoretical framework (Flow Theory + the Person-Artifact-Task model). Conducted a literature review and speech therapist interviews to ground the design in clinical reality."
              },
              {
                phase: "Measurement & Instrument Design",
                detail: "Built a theory-driven measurement model and developed a 27-item, 5-point Likert questionnaire to test it."
              },
              {
                phase: "System & Interaction Design",
                detail: "Defined the training parameters and game design criteria: feedback logic, challenge progression, session structure. Set the performance thresholds the sensor needed to detect."
              },
              {
                phase: "Data Collection",
                detail: "Recruited 30 participants independently through community centers. Administered the questionnaire post-use and conducted qualitative interviews to contextualize the findings."
              },
              {
                phase: "Analysis & Synthesis",
                detail: "Ran PLS-SEM analysis in SmartPLS and synthesized quantitative and qualitative findings into design recommendations."
              }
            ].map(({ phase, detail }) => (
              <div key={phase} style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "var(--spacing-block)",
                paddingBottom: "var(--spacing-element)",
                borderBottom: "1px solid var(--border)"
              }}>
                <p style={{ fontWeight: 600 }}>{phase}</p>
                <p style={{ color: "var(--foreground-muted)" }}>{detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TEAM ── */}
      <section>
        <Container>
          <h2>Team</h2>
          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-element)" }}>
            <p>
              I collaborated with a game design studio, which built the game to my specifications,
              information architecture, and logic flow across two rounds of iteration. I also worked
              with a mechanical engineering professor and two student engineers, who defined sensor
              specs and built the physical prototype to my system requirements. Together, we integrated
              the game with the sensor-equipped device into one working system and iterated on data
              calibration.
            </p>
            {/* Team photo placeholder */}
            <div style={{
              width: "100%",
              aspectRatio: "16 / 7",
              background: "var(--border)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--foreground-muted)",
              fontSize: "0.875rem",
              marginTop: "var(--spacing-element)"
            }}>
              [System diagram: device to Arduino to game data flow, with my role vs. team contributions]
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHAT I BUILT ── */}
      <section>
        <Container>
          <h2>What I Built</h2>
          <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
            The system has two integrated components.
          </p>
          <div style={{
            marginTop: "var(--spacing-block)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-block)"
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-block)" }}>
              {/* Physical device */}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-element)" }}>
                <div style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  background: "var(--border)",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--foreground-muted)",
                  fontSize: "0.875rem"
                }}>
                  [Photo: physical device]
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "var(--spacing-inline)" }}>Physical device</p>
                  <p style={{ color: "var(--foreground-muted)" }}>
                    A modified Neckline Slimmer, a chin-resistance product originally designed for cosmetic
                    use, which speech therapists later adopted as a CTAR training instrument for its
                    feasibility and low cost. I worked with the engineering team to embed a custom sensor
                    that captures chin tuck depth and resistance in real time, routing it through an Arduino
                    to the game interface. I defined the performance thresholds through literature review and
                    therapist interviews; the engineering team translated those into sensor specs, and together
                    we calibrated the raw distance readings into four discrete ranges to make the data usable
                    by the game logic.
                  </p>
                </div>
              </div>
              {/* Game interface */}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-element)" }}>
                <div style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  background: "var(--border)",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--foreground-muted)",
                  fontSize: "0.875rem"
                }}>
                  [Screenshot: game interface]
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "var(--spacing-inline)" }}>Game interface</p>
                  <p style={{ color: "var(--foreground-muted)" }}>
                    A desktop game where the training movement directly controls the character and the game
                    provides immediate biofeedback. I defined the feedback logic, challenge progression, and
                    session structure (grounded in Flow Theory and therapist interviews); the game studio
                    built it to spec. The training exercise and the gameplay are the same action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MY APPROACH ── */}
      <section>
        <Container>
          <h2>My Approach</h2>
          <div style={{
            marginTop: "var(--spacing-block)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-element)"
          }}>
            <p>
              I took a research-driven approach: ground the design in theory first, then test whether
              that rationale held with real users.
            </p>
            <p>
              I chose <strong>Flow Theory</strong> because it offers a structural way to understand
              sustained engagement: challenge-skill balance, clear feedback, a sense of control. For
              preventive training, where the core challenge is sustaining motivation in the absence of
              symptoms, this felt like the right lens.
            </p>
            <p>
              I paired it with the <strong>Person-Artifact-Task (PAT) model</strong>, a framework built
              specifically for digital interactive environments that accounts for how user characteristics,
              device properties, and task demands interact. That made it more precise than a general
              technology acceptance model for a system like this.
            </p>
            <p>
              Gamification and serious games also have an established evidence base in rehabilitation,
              which gave me a grounded rationale for the approach rather than treating it as an untested
              assumption.
            </p>

            <div style={{ marginTop: "var(--spacing-element)" }}>
              <p style={{ fontWeight: 600, marginBottom: "var(--spacing-element)" }}>Key research activities</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-inline)" }}>
                <li>
                  Built a theory-driven measurement model proposing how motivation, self-efficacy, feedback
                  quality, and challenge-skill balance shape attitude toward and{" "}
                  <strong>continuance intention</strong> (the likelihood someone keeps using the system
                  long-term).
                </li>
                <li>
                  Developed and administered a 27-item questionnaire post-use to 30 participants. This
                  captures self-reported perception and attitude, not observed behavior.
                </li>
                <li>
                  Conducted qualitative interviews alongside the questionnaire to surface patterns the
                  model alone couldn't capture.
                </li>
                <li>
                  Applied <strong>PLS-SEM</strong> (structural equation modeling, via SmartPLS) rather
                  than covariance-based SEM. PLS-SEM is built for smaller sample sizes like this study's
                  n=30, while still letting me test how multiple latent variables jointly shape an outcome,
                  rather than examining predictors in isolation.
                </li>
                <li>
                  Recruited 30 participants independently through neighborhood community centers. Inclusion
                  criteria: age 50+, no diagnosed swallowing difficulty (screened via the{" "}
                  <strong>EAT-10</strong>, a standard 10-item clinical tool for swallowing-difficulty risk;
                  score of 3+ excluded), no history of head or neck injury or surgery.
                </li>
              </ul>
            </div>

            {/* Diagram placeholder */}
            <div style={{
              width: "100%",
              aspectRatio: "16 / 6",
              background: "var(--border)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--foreground-muted)",
              fontSize: "0.875rem",
              marginTop: "var(--spacing-element)"
            }}>
              [Diagram: measurement model and research process]
            </div>
          </div>
        </Container>
      </section>

      {/* ── KEY INSIGHTS ── yellow band */}
      <section style={{ background: "var(--band-highlight)" }}>
        <Container>
          <div style={{ paddingTop: "var(--spacing-section)", paddingBottom: "var(--spacing-section)" }}>
            <h2>Key Insights</h2>
            <p style={{ marginTop: "var(--spacing-inline)", color: "var(--foreground-muted)" }}>
              Going in, I expected gamification and engagement quality to be the primary drivers of
              adoption. The data confirmed experiential factors mattered, but what surfaced was a more
              complicated picture about whose model of motivation was actually embedded in the design.
            </p>
            <div style={{
              marginTop: "var(--spacing-block)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-block)"
            }}>
              {[
                {
                  n: "1",
                  heading: "Enjoyment was necessary but not sufficient for adoption.",
                  body: "Participants found the biofeedback and gamification genuinely engaging, but engagement alone didn't translate to adoption intent. A recurring pattern: "I can see myself using it, but I'll only use it when I really need it." The system was competing not just on usability, but on a person's readiness to act preventively at all."
                },
                {
                  n: "2",
                  heading: "Intrinsic motivation and health identity were the real entry points.",
                  body: "Participants who already maintained proactive health habits showed meaningfully higher interest: "I've been massaging my chin muscles before eating nowadays. Where can I get this system?" Adoption intent was shaped less by in-the-moment motivation and more by whether someone already saw themselves as a person who takes preventive action."
                },
                {
                  n: "3",
                  heading: "Medical professionals are the trust gatekeepers.",
                  body: "Users consistently said they'd adopt the system if a doctor or therapist recommended it. This wasn't skepticism toward the device — it was how this population makes health decisions. The adoption pathway needs to run through clinical relationships, not just consumer appeal."
                },
                {
                  n: "4",
                  heading: "Setup complexity competed with the actual goal.",
                  body: "I had assumed engagement was the goal. For most participants, the goal was effortless training that fit an existing routine. Even participants who enjoyed the experience flagged setup as a barrier: "I might need a tech person or my kids to help me." One suggested a simpler mechanical device used while watching TV; another said content matched to personal interests, like classical music, would feel more sustainable. Setup became its own cognitive task, competing with the training goal instead of supporting it."
                },
                {
                  n: "5",
                  heading: "The design encoded my values, not the user's.",
                  body: "The system was informed by speech therapist interviews, but validated with healthy adults 50+, not people currently experiencing swallowing difficulty. The clinician perspective shaped what I built; user testing revealed what it was actually like to use. The motivational logic in the design reflected my assumptions more than users' realities."
                }
              ].map(({ n, heading, body }) => (
                <div key={n} style={{
                  display: "grid",
                  gridTemplateColumns: "2rem 1fr",
                  gap: "var(--spacing-element)",
                  paddingBottom: "var(--spacing-block)",
                  borderBottom: "1px solid rgba(0,0,0,0.1)"
                }}>
                  <p style={{ fontWeight: 600, fontSize: "1.125rem" }}>{n}.</p>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: "var(--spacing-inline)" }}>{heading}</p>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Journey map placeholder */}
            <div style={{
              width: "100%",
              aspectRatio: "16 / 6",
              background: "rgba(0,0,0,0.08)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--foreground-muted)",
              fontSize: "0.875rem",
              marginTop: "var(--spacing-block)"
            }}>
              [User journey map: motivational entry points, trust pathway, service barriers]
            </div>
          </div>
        </Container>
      </section>

      {/* ── REFLECTIONS & NEXT STEPS ── */}
      <section>
        <Container>
          <h2>Reflections & Next Steps</h2>
          <div style={{
            marginTop: "var(--spacing-block)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-element)"
          }}>
            <p>
              The gap between design intent and user reality wasn't a failure — it was diagnostic. It
              clarified the actual design problem: not building a better training device, but designing
              for the full adoption journey and lifestyle fit.
            </p>
            <p style={{ fontWeight: 600 }}>If I continued this work, I would:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-inline)" }}>
              <li>
                Run <strong>longitudinal testing</strong> over weeks or months, and triangulate the
                questionnaire's attitudinal data against behavioral data — the gameplay and biofeedback
                logs the system already captures — rather than relying on self-reported intent alone.
                Intent and long-term adherence are different things, and behavioral data would close
                that gap.
              </li>
              <li>
                Include people currently experiencing early-stage swallowing difficulty alongside healthy
                preventive users, to close the gap between the consulted population (clinicians) and the
                tested population (healthy adults) that limited this study.
              </li>
              <li>
                Bring medical professionals into the design process earlier, treating referral and trust
                as design requirements — not external factors — and building the clinical handoff into
                the system architecture from the start.
              </li>
              <li>
                Explore a business model shift: distribute through hospitals and therapy clinics on a
                rental basis instead of direct-to-consumer, with structured onboarding and peer or
                caregiver support built into that channel rather than left to the user. This would lower
                cost and setup burden, route the system through the medical-authority trust this
                population said they needed, and shift onboarding and tech support onto clinical staff
                already equipped to provide it.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* ── IMPACT ── */}
      <section>
        <Container>
          <h2>Impact</h2>
          <ul style={{
            marginTop: "var(--spacing-block)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-inline)"
          }}>
            <li>Presented at IEEE-ICASI 2025 and at the Journal of Design 2024 conference, Taiwan</li>
            <li>Received an "Excellent" rating in a government-funded research project</li>
            <li>
              Found that device confidence mattered less for adoption than existing health identity —
              an explanation the SEM data alone couldn't have provided
            </li>
          </ul>
        </Container>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section>
        <Container>
          <h2>Why This Matters</h2>
          <div style={{
            marginTop: "var(--spacing-block)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-element)"
          }}>
            <p>
              This project is where I learned what it actually means to mix methods. The SEM told me
              which variables mattered, and which didn't: intrinsic motivation was the strongest
              predictor of long-term use, while self-efficacy — which I expected to be a strong driver
              — came out weak and negative. On its own, that's just a number. The interviews told me
              why: for this population, self-efficacy wasn't about confidence in the device. It was
              about whether someone already saw themselves as a person who takes preventive action at
              all. That gap between what the model predicted and what the interviews explained is what
              shaped the design guidelines I propose in Reflections & Next Steps, away from interface
              polish and toward the trust infrastructure and service context surrounding the device.
            </p>
            <p>
              A well-researched, theoretically grounded design can still encode the researcher's
              assumptions rather than the user's reality. Rigor isn't a guarantee of fit. Getting to
              fit means staying genuinely curious about the gap between the model and the person, and
              treating that gap as the most important data.
            </p>
          </div>
        </Container>
      </section>

      {/* ── NAV ── */}
      <section>
        <Container>
          <nav style={{
            marginTop: "var(--spacing-block)",
            paddingTop: "var(--spacing-block)",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            gap: "var(--spacing-block)",
            flexWrap: "wrap"
          }}>
            <Link href="/work">← Back to work</Link>
          </nav>
        </Container>
      </section>

    </article>
  );
}