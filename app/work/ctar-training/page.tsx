import Link from "next/link";
import { Container } from "@/components/container";
import { CaseStudyHeader } from "@/components/case-study-header";

export default function CTARTrainingCaseStudy() {
  return (
    <article>
      {/* Header */}
      <section>
        <Container>
          <CaseStudyHeader
            title="Preventive Swallowing Training"
            role="UX Researcher & Interaction Designer | Master's Thesis"
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
              <h3>Primary contribution</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                This project demonstrates how flow-informed interaction design can shape users&apos; motivation
                and attitudes toward preventive swallowing training — offering insight into why adoption
                and sustained use remain challenging even when training methods are clinically supported.
              </p>
            </div>

            <div>
              <h3>In brief</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Sustained engagement with preventive swallowing training is closely tied to intrinsic
                motivation and interaction experience — clear feedback, understandable goals, and
                challenge–skill balance. This project explores how those factors, informed by flow theory,
                shape older adults&apos; willingness to continue using a low-cost, gamified CTAR system.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Background */}
      <section>
        <Container>
          <h2>Background</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>Why this study exists</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Preventive swallowing training is clinically recommended but difficult to sustain in everyday
                life. While CTAR (chin tuck against resistance) is effective and accessible, existing tools
                often lack engagement, feedback, and clarity — factors that influence whether people continue
                using them over time. This project applies flow theory to examine how interaction design can
                support sustained motivation in preventive training contexts.
              </p>
            </div>

            <div>
              <h3>Why the problem matters</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>The case follows a clear logic chain:</p>
              <ol style={{ marginTop: "var(--spacing-inline)" }}>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  <strong>Swallowing difficulty is serious.</strong> It affects up to one-third of older
                  adults and is linked to increased risks of malnutrition and aspiration pneumonia. Because
                  decline often develops gradually, preventive interventions are emphasized to maintain
                  airway protection before clinical symptoms emerge.
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  <strong>CTAR is a valid preventive method.</strong> Chin Tuck Against Resistance targets
                  the suprahyoid muscles critical for safe swallowing. It is clinically validated, accessible,
                  and comparably effective to more demanding methods — making it well-suited for preventive use.
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  <strong>Current CTAR tools fail when not sustained.</strong> Commonly available tools offer
                  limited engagement, feedback, or adaptability. Research-backed and game-based systems show
                  short-term promise, but are often costly and evaluated only for immediate outcomes.
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  <strong>Therefore, understanding continued use intention is essential.</strong> Even clinically
                  effective exercises fail to reduce risk if they aren&apos;t maintained. Designing tools for
                  real-world adoption requires examining how experiential factors shape engagement and willingness
                  to sustain use.
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section>
        <Container>
          <h2>Problem statement</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>Existing efforts and their limits</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Interactive rehabilitation systems and serious games for swallowing training have been widely
                explored and demonstrate potential short-term benefits in engagement and adherence. However,
                sustaining use over time remains a common challenge — suggesting that effectiveness depends
                not just on game elements or theoretical grounding, but on how users actually experience
                the interaction.
              </p>
            </div>

            <div>
              <h3>The gap</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                While many systems incorporate features like feedback, goals, or challenge, the specific
                experiential factors that contribute to continued use intention are often assumed rather
                than systematically examined. As a result, it&apos;s difficult to know which aspects of
                the experience are most critical for long-term engagement.
              </p>
            </div>

            <div>
              <h3>Research focus</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                While prior work suggests that gamified CTAR tools can improve short-term engagement, it
                remains unclear which aspects of the interaction experience actually shape users&apos;
                intention to continue over time.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                This project set out to identify the experiential factors that influence continuous use
                intention in preventive CTAR training, using flow theory as an analytical lens. Rather
                than comparing exercise effectiveness, the study focused on how interaction qualities —
                clarity of goals, feedback, challenge–skill balance, and intrinsic motivation — relate
                to users&apos; attitudes and willingness to sustain use.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* My Role & Scope */}
      <section>
        <Container>
          <h2>My role & scope</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>What I did</h3>
              <p style={{ marginTop: "var(--spacing-inline)", fontSize: "1.125rem" }}>
                UX Researcher & Interaction Designer — Master&apos;s Thesis Project
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Led end-to-end research from problem framing and literature review through study design and analysis</li>
                <li>Conducted interviews with speech therapists (n=4) and one occupational therapist to understand preventive training practices and constraints</li>
                <li>Designed a flow-informed interactive CTAR training system combining a modified physical device with a real-time serious game</li>
                <li>Defined interaction goals, feedback logic, and user flow; collaborated with an external game studio for implementation</li>
                <li>Co-developed a sensor-enabled CTAR prototype with a mechanical engineering professor and student</li>
                <li>Designed and executed the experimental protocol; analyzed results using structural equation modeling (SEM)</li>
              </ul>
            </div>

            <div>
              <h3>Collaborators</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li><strong>Faculty advisor (human factors / design)</strong> — Guidance on scope, study design, and interpretation</li>
                <li><strong>Speech therapists (n=4)</strong> — Input on training protocols, preventive use cases, and clinical plausibility</li>
                <li><strong>Mechanical engineering collaborators</strong> — Sensor integration and device prototyping</li>
                <li><strong>Game development studio</strong> — Game implementation based on defined interaction flows</li>
              </ul>
            </div>

            <div>
              <h3>Study scope & constraints</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li><strong>Population:</strong> Adults aged 50+, healthy or sub-healthy (preventive focus)</li>
                <li><strong>Context:</strong> Single-session, lab-based experience</li>
                <li><strong>Outcomes:</strong> Interaction experience, attitude, and continuous intention of use</li>
                <li><strong>Constraints:</strong> Intention-based outcomes, not observed long-term behavior; prototype used as research instrument</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Study Design */}
      <section>
        <Container>
          <h2>Study design</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                An exploratory, single-session study examining how interaction experience relates to
                users&apos; intention to continue using a preventive CTAR training system. Rather than
                evaluating clinical effectiveness, the study focused on how users experienced the
                interaction and how that shaped their attitudes toward continued use.
              </p>
            </div>

            <div>
              <h3>Participants</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Adults aged 50 and older</li>
                <li>No history of head or neck surgery or diagnosed swallowing disorders</li>
                <li>Recruited to reflect a preventive (pre-clinical) context rather than rehabilitation after diagnosis</li>
              </ul>
            </div>

            <div>
              <h3>Session structure</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Each session lasted approximately one hour, held across three quiet controlled settings
                (a university lab, a private office, and a community center).
              </p>
              <ol style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Study explanation and informed consent</li>
                <li>Pre-test questionnaire (demographics, EAT-10 swallowing screening, 1RM calibration)</li>
                <li>Introduction to the CTAR system — device walkthrough and learning-by-doing onboarding</li>
                <li>CTAR training tasks: isometric training → rest → isokinetic training</li>
                <li>Post-test questionnaire</li>
                <li>Semi-structured interview</li>
                <li>Compensation</li>
              </ol>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Real-time sensor data from the CTAR device controlled the game interaction throughout training.
              </p>
            </div>

            <div>
              <h3>Data collected</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                <strong>Quantitative</strong> — Post-use questionnaires measuring six flow-related experiential
                factors (intrinsic motivation, self-efficacy, unambiguous feedback, ease of use, clear goals,
                challenge–skill balance), usage attitude, and continuance intention.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Qualitative</strong> — Semi-structured interviews to unpack Likert responses, understand
                what felt satisfying or confusing, surface perceived barriers, and gather design feedback.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Methods */}
      <section>
        <Container>
          <h2>Methods</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                Mixed-methods design. Participants used a gamified, sensor-enabled CTAR prototype, completed
                a theory-driven questionnaire designed for SEM analysis, and participated in semi-structured
                interviews. The focus was on experiential factors — not clinical outcomes — to understand how
                interaction design shapes attitudes and willingness to sustain use.
              </p>
            </div>

            <div>
              <h3>Prototype and interaction setup</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                The CTAR prototype translated physical training effort into real-time game interaction
                (biofeedback), enabling clear goals, immediate feedback, and adaptive challenge during both
                isometric and isokinetic exercises. This allowed participants to experience CTAR as an
                interactive system rather than a standalone exercise.
              </p>
            </div>

            <div>
              <h3>Measurement model</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                The quantitative instrument was built around a hypothesized SEM model grounded in flow theory,
                prior literature, and therapist input: <strong>9 latent variables</strong>, <strong>27 Likert-scale items</strong> (3 per construct), all specified a priori.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Six antecedents were structured using the Person–Artifact–Task (PAT) framework:
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li><strong>Person:</strong> Intrinsic motivation, self-efficacy</li>
                <li><strong>Artifact:</strong> Unambiguous feedback, ease of use</li>
                <li><strong>Task:</strong> Clear goals, challenge–skill balance</li>
              </ul>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                These six factors were hypothesized to predict flow experience, which predicted usage attitude,
                which predicted continuance intention — a before–during–after experience structure.
              </p>
            </div>

            <div>
              <h3>Analysis</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Quantitative data was analyzed using SEM in SmartPLS, enabling simultaneous examination of
                relationships across the full model. Qualitative interview data was thematically synthesized
                to contextualize the SEM results and surface design-relevant insights.
              </p>
            </div>

            <div>
              <h3>Recruitment</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Participants were recruited through direct outreach to community centers in Taipei, where
                older adults regularly attend classes and group activities — supporting access to a preventive,
                pre-clinical population aligned with the study&apos;s goals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Insights */}
      <section>
        <Container>
          <h2>Key insights</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>1. Intrinsic motivation was the real driver — not interface factors</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                The SEM revealed a clear, theoretically coherent adoption pathway:
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Intrinsic motivation → Flow experience (β = 0.788)</li>
                <li>Flow experience → Usage attitude (β = 0.751)</li>
                <li>Usage attitude → Continuance intention (β = 0.872)</li>
              </ul>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                What surprised me was what <em>didn&apos;t</em> predict flow. Self-efficacy, ease of use,
                clear goals, unambiguous feedback, and challenge–skill balance all showed weak or unstable
                effects. In a preventive health context, whether someone already cared about proactive health
                mattered more than how polished the interaction felt.
              </p>
            </div>

            <div>
              <h3>2. Enjoyment was necessary — but not sufficient</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Participants described the biofeedback interaction as engaging and satisfying. But a
                recurring pattern emerged:
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I can see myself using it, but only if a doctor tells me to.&rdquo;
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Enjoyment did not override perceived medical necessity. The system wasn&apos;t competing on
                usability — it was competing with a person&apos;s readiness to act preventively at all.
              </p>
            </div>

            <div>
              <h3>3. Health identity shaped adoption more than game quality</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Participants who already maintained proactive health habits showed noticeably stronger interest:
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I&apos;ve been massaging my chin muscles before eating. Where can I get this?&rdquo;
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Continuance intention was shaped by whether someone already identified as a person who takes
                preventive action. In this population, intrinsic motivation was less about &ldquo;liking the
                game&rdquo; and more about health identity.
              </p>
            </div>

            <div>
              <h3>4. Trust pathways mattered more than gamification</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Participants consistently said they would adopt the system if recommended by a doctor or
                therapist. This wasn&apos;t skepticism toward the device — it reflected how this population
                makes health decisions. Professional endorsement functioned as permission to act. The adoption
                pathway likely runs through clinical relationships, not direct consumer appeal.
              </p>
            </div>

            <div>
              <h3>5. Setup complexity competed with the primary goal</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Gamification assumes engagement is the goal. For these participants, the goal was effortless
                training that fits daily routines. Even participants who enjoyed the experience flagged setup
                as a barrier:
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I might need my kids to help me with this.&rdquo;
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Some preferred a simpler mechanical device they could use while watching TV. The system
                optimized for engagement. Users optimized for minimal disruption.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Limitations & Reflection */}
      <section>
        <Container>
          <h2>Limitations & reflection</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>Study limitations</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                This was a single-session exploratory study with n=30, using a 27-item SEM model. While the
                core pathway was strong, a larger sample would provide greater statistical stability. Outcomes
                were intention-based rather than observed long-term behavior.
              </p>
            </div>

            <div>
              <h3>What I&apos;d do differently</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Conduct exploratory interviews with the target user group earlier, and let those insights shape the model and prototype before formal testing</li>
                <li>Treat prototype feedback and formal testing as distinct phases, allowing therapist and user input to drive iteration before confirmatory data collection begins</li>
                <li>Run longitudinal testing to examine actual adherence rather than post-use intention</li>
                <li>Include individuals experiencing early-stage swallowing difficulty alongside healthy preventive users</li>
              </ul>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The most significant lesson was upstream: a theoretically grounded model can still reflect the
                designer&apos;s assumptions if discovery and iteration are compressed by time constraints.
              </p>
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
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Contributed to a lab research publication presented at IEEE-ICASI 2025</li>
                <li>Received &ldquo;Excellent&rdquo; rating in a government-funded research project</li>
              </ul>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                More importantly, the findings reframed the direction of the work — from optimizing interface
                engagement to examining adoption readiness, trust, and lifestyle integration.
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
