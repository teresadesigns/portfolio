import Link from "next/link";
import { Container } from "@/components/container";
import { CaseStudyHeader } from "@/components/case-study-header";

function Placeholder({ label }: { label: string }) {
  return (
    <div
      style={{
        marginTop: "var(--spacing-element)",
        padding: "var(--spacing-element)",
        border: "1px dashed var(--border)",
        color: "var(--foreground-muted)",
        fontSize: "0.875rem",
      }}
    >
      {label}
    </div>
  );
}

export default function Project4() {
  return (
    <article>
      {/* Header */}
      <section>
        <Container>
          <CaseStudyHeader
            title="Preventive Swallowing-Strength Training System (CTAR)"
            role="Lead UX Researcher & Interaction Designer | Master's Thesis Project"
            timeline="Feb 2024 – Jun 2024"
            tags={["UX Research", "Health Innovation", "Interaction Design", "Flow Theory", "SEM"]}
          />
        </Container>
      </section>

      {/* Overview */}
      <section>
        <Container>
          <h2>Overview</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>My contributions</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Led end-to-end research and design: defined the research question and theoretical framework,
                conducted literature review and speech therapist interviews, designed training parameters
                and game design criteria, built the measurement model, developed and administered the
                post-use questionnaire, recruited participants independently, ran qualitative interviews,
                conducted SEM analysis, and synthesized findings into design recommendations.
              </p>
            </div>

            <div>
              <h3>Team</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Collaborated with a game design studio that built the game to my requirements, information
                architecture, and logic flow, with one to two rounds of iteration. Also worked with a
                mechanical engineering professor and two student engineers who defined sensor specifications
                and built the physical prototype based on my system requirements. We iterated together on
                data calibration.
              </p>
            </div>

            <div>
              <h3>Context</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Preventive intervention for adults 50+, targeting the window before dysphagia (swallowing
                difficulty) onset, designed to support long-term engagement in daily swallowing exercises.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Challenge */}
      <section>
        <Container>
          <h2>The challenge</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                Dysphagia affects nutrition, health, and independence in older adults. But by the time
                symptoms appear, significant muscle decline has often already occurred. Preventive training
                exists. The problem is that it rarely sustains consistent engagement over time.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                That raised a question I kept coming back to: what actually drives an older adult to keep
                doing a preventive exercise that doesn&apos;t yet feel necessary?
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Answering that question required creating conditions where I could observe real engagement,
                not just ask about it. Self-report alone wouldn&apos;t be sufficient for a behavior this
                tied to motivation and habit. So rather than treating the design as a separate deliverable,
                I used the system itself as a research instrument — building a gamified, biofeedback-enabled
                CTAR device specifically to create a realistic use context in which I could study engagement,
                motivation, and continuance intention as they actually played out.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What I Built */}
      <section>
        <Container>
          <h2>What I built</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>The CTAR system has two integrated components.</p>
            </div>

            <div>
              <h3>Physical device</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                The physical device is a modified Neckline Slimmer — a chin resistance product originally
                designed for cosmetic use, which speech therapists later adopted as an accessible CTAR
                training instrument for its feasibility and low cost. I worked with the engineering team
                to embed a custom sensor that captures chin tuck depth and resistance data in real time,
                routing it through an Arduino to the game interface.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                I defined the performance thresholds we needed to detect through literature review and
                therapist interviews. The engineering team determined feasible sensor specifications and
                built the prototype. We iterated together on data calibration, reassigning raw continuous
                distance readings into four discrete ranges (0 to 4) to make the data compatible with the
                game programming side.
              </p>
            </div>

            <div>
              <h3>Game interface</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                The game interface runs on desktop. I defined the training parameters and game design
                criteria — including feedback logic, challenge progression, and session structure —
                grounded in Flow Theory and informed by therapist interviews. The game design studio
                built the game body to those specifications and we iterated on implementation.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The training movement directly controls the game character, and the game provides immediate
                biofeedback. The rehabilitation exercise and the gameplay are the same action.
              </p>
            </div>

            <Placeholder label="Placeholder: System diagram showing device to Arduino to game data flow, with my role vs. team contributions." />
          </div>
        </Container>
      </section>

      {/* My Approach */}
      <section>
        <Container>
          <h2>My approach</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                I took a research-driven UCD approach: grounding the design in theory first, then testing
                whether that rationale actually held with real users.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                I chose Flow Theory because it offers a structural way to understand sustained engagement —
                specifically the conditions under which an activity becomes intrinsically motivating:
                challenge–skill balance, clear feedback, a sense of control. For preventive training, where
                the challenge is sustaining motivation in the absence of symptoms, this felt like the right
                lens. I paired it with the Person–Artifact–Task (PAT) model because it was designed
                specifically for digital interactive environments, accounting for how user characteristics,
                device properties, and task demands interact together. That made it more precise than a
                general technology acceptance model for a system like this.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Gamification and serious games also have an established evidence base in rehabilitation,
                which gave me a grounded rationale for the approach rather than treating it as an assumption
                worth testing.
              </p>
            </div>

            <div>
              <h3>Key research activities</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  Built a theory-driven measurement model using Flow Theory and PAT, proposing how
                  motivation, self-efficacy, feedback quality, and challenge–skill balance shape attitude
                  toward and continuance intention of the system
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  Developed a 27-item, 5-point Likert scale questionnaire based on the proposed model and
                  existing literature. Administered post-use to 30 participants after they engaged with the
                  system. Data reflects self-reported perception and attitude, not observed behavioral patterns
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  Conducted qualitative interviews alongside the questionnaire to contextualize findings and
                  surface patterns the model alone could not capture
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  Applied Structural Equation Modeling (SEM) using SmartPLS — a method from the social
                  sciences that tests how multiple latent variables simultaneously contribute to an outcome,
                  rather than examining predictors in isolation. This let me quantify the relative weight of
                  each factor shaping continuance intention
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  Recruited 30 participants independently through neighborhood community centers. Inclusion
                  criteria: age 50+, no diagnosed swallowing difficulty (screened via EAT-10, score 3 or
                  above excluded), no head or neck injury or surgery history per speech therapist guidance
                </li>
              </ul>
            </div>

            <Placeholder label="Placeholder: Diagram of measurement model and research process." />
          </div>
        </Container>
      </section>

      {/* Key Insights */}
      <section>
        <Container>
          <h2>Key insights</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                Going in, the theoretical model predicted that multiple factors — intrinsic motivation,
                self-efficacy, clear goals, unambiguous feedback, ease of use, and challenge–skill balance
                — would each contribute meaningfully to flow experience. The data told a more specific story.
              </p>
            </div>

            <div>
              <h3>1. Intrinsic motivation was the dominant driver — and the data was striking</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Among all six predictors in the model, intrinsic motivation had by far the strongest
                positive effect on flow experience (path coefficient 0.788). The other theoretically
                grounded variables were weaker, mixed, or in some cases negative. Clear goals, for
                instance, showed a negative relationship with flow experience — suggesting that when
                training goals felt too explicitly defined, the experience shifted from engaging activity
                toward clinical task, working against flow rather than supporting it.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The qualitative data gave me the context to understand what this actually meant.
                Participants who already proactively maintained their health showed meaningfully higher
                engagement. One said:
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I&apos;ve been massaging my chin muscles before eating nowadays. Where can I get
                this system?&rdquo;
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                By contrast, participants without a health-maintenance mindset responded conditionally:
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I can see myself using it, but I&apos;ll only use it when I really need it.&rdquo;
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The number pointed me toward intrinsic motivation. The interviews told me what intrinsic
                motivation actually looked like in this population: not enthusiasm for the device, but
                whether someone already saw themselves as a person who takes preventive action at all.
                Those are different design problems — and only the combination of methods made that
                distinction visible.
              </p>
            </div>

            <div>
              <h3>2. Medical professionals are the trust gatekeepers</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Users consistently said they would adopt the system if recommended by a doctor or therapist.
                This was not skepticism toward the device — it was how this population makes health
                decisions. Professional endorsement functions as permission to act. The adoption pathway
                needs to run through clinical relationships, not just consumer appeal.
              </p>
            </div>

            <Placeholder label="Placeholder: User journey map showing motivational entry points, trust pathway, and service barriers." />
          </div>
        </Container>
      </section>

      {/* Reflections & Next Steps */}
      <section>
        <Container>
          <h2>Reflections & next steps</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                The breakdown between design intent and user reality was not a failure. It was diagnostic.
                It clarified what the actual design problem is: not building a better training device, but
                designing for the full adoption journey and for lifestyle fit.
              </p>
            </div>

            <div>
              <h3>If I were to continue this work</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  I would include people currently experiencing early-stage swallowing difficulty alongside
                  healthy preventive users. The system was informed by speech therapist interviews but
                  validated with healthy adults — that gap between the consulted population and the tested
                  population likely left actual patient needs underrepresented, and it is the most important
                  methodological limitation to address in future work.
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  I would run longitudinal testing over weeks or months. The post-use questionnaire captured
                  intent, not long-term adherence. Those are different things.
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  I would bring medical professionals into the design process earlier, treating referral and
                  trust not as external factors but as design requirements, building the clinical handoff
                  into the system architecture from the start.
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  I would investigate service design interventions to close the gap between interest and
                  independent use: structured onboarding, peer or caregiver support, reduced setup friction
                  as a primary design goal rather than an afterthought.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section>
        <Container>
          <h2>Impact</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                This project resulted in a co-authored conference paper accepted to IEEE-ICASI 2025,
                presented in Tokyo, Japan in April 2025. The research was also presented at the Journal
                of Design conference in Taiwan, and the broader lab project received an Excellent rating
                in a government-funded evaluation, one of the top distinctions awarded in the program.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Beyond recognition, the findings reframe what the design problem actually is for preventive
                rehabilitation tools. The question is not how to build a more engaging interface. It is how
                to design for the conditions that determine whether someone ever commits to preventive
                training at all: their health identity, the trust pathways through which they make health
                decisions, and the service infrastructure that makes daily use realistic. That reframe is
                what the next iteration of this work needs to be built around.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why This Matters */}
      <section>
        <Container>
          <h2>Why this matters</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                This project is where I learned what it actually means to have a theoretical model
                confirmed and complicated at the same time.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The SEM results supported the overall structure — flow experience strongly predicted usage
                attitude, which strongly predicted continuance intention. But within the model, the pattern
                of predictors was not what the theory anticipated. Intrinsic motivation dominated. Clear
                goals — which Flow Theory frames as a facilitator — showed a negative relationship with
                flow, suggesting that when training objectives felt too explicitly clinical, they worked
                against the sense of engagement rather than supporting it.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The number told me what. The qualitative data told me why. When the model identified
                intrinsic motivation as the standout predictor, the interviews revealed what intrinsic
                motivation actually meant for this population: not interest in the device, but whether
                someone already identified as a person who takes preventive action. That distinction
                mattered because it completely reframes where the design intervention needs to happen —
                not in the interface, but in the conditions that make someone receptive to preventive
                training at all.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                That is the kind of reframe that only becomes visible when quantitative and qualitative
                methods are in genuine conversation with each other, rather than running in parallel. It
                is something I want to carry into every research role I take on.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Navigation */}
      <section>
        <Container>
          <nav
            style={{
              marginTop: "var(--spacing-block)",
              paddingTop: "var(--spacing-block)",
              borderTop: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              gap: "var(--spacing-block)",
              flexWrap: "wrap",
            }}
          >
            <Link href="/work">← Back to work</Link>
          </nav>
        </Container>
      </section>
    </article>
  );
}
