import Link from "next/link";
import { Container } from "@/components/container";
import { CaseStudyHeader } from "@/components/case-study-header";

// This will be replaced with dynamic data fetching
export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <article>
      <section>
        <Container>
          <CaseStudyHeader
            title="Healthcare Portal Redesign"
            role="Lead UX Researcher"
            timeline="6 months | 2024"
            team="2 designers, 3 engineers, 1 PM"
            tags={["UX Research", "Healthcare", "Accessibility", "Enterprise"]}
          />
        </Container>
      </section>

      {/* Overview */}
      <section>
        <Container>
          <h2>Overview</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>Context</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                A regional healthcare provider serving 200,000+ patients needed to redesign their patient portal.
                Analytics showed 65% of users over 60 were abandoning critical tasks like appointment scheduling and
                prescription refills. Support calls related to portal navigation had increased 40% year-over-year.
              </p>
            </div>

            <div>
              <h3>Problem</h3>
              <p style={{ marginTop: "var(--spacing-inline)", fontSize: "1.125rem" }}>
                Elderly patients were abandoning critical health tasks due to confusing navigation,
                information overload, and interfaces designed without considering age-related cognitive changes.
              </p>
            </div>

            <div>
              <h3>My role</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Led end-to-end research strategy and execution</li>
                <li>Conducted 18 in-depth user interviews with patients aged 55–75</li>
                <li>Facilitated 12 usability testing sessions across 3 design iterations</li>
                <li>Synthesized findings into actionable design principles and IA recommendations</li>
                <li>Collaborated with design and engineering throughout implementation</li>
              </ul>
            </div>

            <div>
              <h3>Outcomes</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Task completion rate increased from 42% to 78% for users over 60</li>
                <li>Average time-on-task decreased by 35% for common workflows</li>
                <li>SUS (System Usability Scale) score improved from 58 to 82</li>
                <li>Support calls related to navigation dropped 52% in first 3 months post-launch</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Research & Discovery */}
      <section>
        <Container>
          <h2>Research & Discovery</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>Research questions</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                I started by defining clear research questions to guide the study:
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>What tasks are elderly patients trying to complete, and where do they get stuck?</li>
                <li>How do age-related cognitive changes affect interaction with the portal?</li>
                <li>What mental models do users have for organizing health information?</li>
                <li>What level of digital literacy can we assume for this user group?</li>
              </ul>
            </div>

            <div>
              <h3>Methods</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                I used a mixed-methods approach to understand both behavior and context:
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li><strong>Analytics analysis</strong> — Identified drop-off points and high-abandonment flows</li>
                <li><strong>Contextual interviews (n=18)</strong> — Observed users in their homes attempting real tasks</li>
                <li><strong>Cognitive walkthrough</strong> — Evaluated existing interface against cognitive load principles</li>
                <li><strong>Competitive analysis</strong> — Reviewed 6 healthcare portals for age-friendly patterns</li>
              </ul>
            </div>

            <div>
              <h3>Key findings</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Three major themes emerged from research:
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>1. Navigation overwhelm</strong><br />
                Users were presented with 12+ top-level navigation items on login. They didn&apos;t know where to start
                and often clicked the wrong category, leading to frustration and abandonment.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>2. Cognitive load from healthcare jargon</strong><br />
                Labels like &quot;Care Coordination&quot; and &quot;Clinical Summary&quot; were meaningless to users.
                They wanted task-based language: &quot;Schedule appointment,&quot; &quot;Refill prescription,&quot; &quot;View test results.&quot;
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>3. Visual density and small text</strong><br />
                Information was packed densely with 11px font sizes. Users with declining vision struggled to scan
                and often missed critical information or calls-to-action.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Synthesis & Insights */}
      <section>
        <Container>
          <h2>Synthesis & Insights</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                I synthesized findings through affinity mapping with the design team, grouping observations
                into themes and translating them into design principles.
              </p>
            </div>

            <div>
              <h3>Design principles</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                These principles guided all design decisions:
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li><strong>Task-first navigation</strong> — Organize by what users want to do, not by internal systems</li>
                <li><strong>Progressive disclosure</strong> — Show only what&apos;s needed for the current step</li>
                <li><strong>Plain language</strong> — Use patient-facing language, not clinical terminology</li>
                <li><strong>Generous spacing and scale</strong> — Optimize for readability and touch targets</li>
                <li><strong>Clear next actions</strong> — Every screen should have one obvious next step</li>
              </ul>
            </div>

            <div>
              <h3>Information architecture shifts</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Based on research, I proposed restructuring navigation from 12 department-based categories to
                5 task-based categories: Appointments, Medications, Messages, Health Records, and Billing.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                I validated this IA through card sorting sessions with 8 users, which confirmed the mental model
                and surfaced a few labeling adjustments (e.g., &quot;Medications&quot; → &quot;My Medications&quot;
                for clarity of ownership).
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Design & Iteration */}
      <section>
        <Container>
          <h2>Design & Iteration</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                I worked closely with the design team to translate research insights into interface patterns.
                We iterated through three major rounds of design and testing.
              </p>
            </div>

            <div>
              <h3>Key design decisions</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                <strong>Simplified homepage</strong><br />
                Instead of a dashboard showing everything, we designed a focused landing with the 3 most common
                tasks (based on analytics) and a clear path to all other features.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Scannable appointment cards</strong><br />
                We redesigned appointment listings as large, high-contrast cards with date, time, doctor, and
                location as distinct visual elements. Users could scan quickly without reading dense text.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Step-by-step prescription refills</strong><br />
                We broke the refill flow into single-purpose screens (select medications → confirm pharmacy → review)
                instead of one complex form. This reduced errors and completion time.
              </p>
            </div>

            <div>
              <h3>Collaboration with engineering</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                I involved engineers early to discuss technical feasibility of IA changes. Some backend systems
                were organized by department, so we worked together to define a content mapping layer that wouldn&apos;t
                require rebuilding core systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Validation & Testing */}
      <section>
        <Container>
          <h2>Validation & Testing</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                I conducted usability testing at three points: low-fidelity wireframes, mid-fidelity prototypes,
                and final pre-launch build. Each round informed the next iteration.
              </p>
            </div>

            <div>
              <h3>Testing approach</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li><strong>Participants:</strong> 4 users per round, ages 58–72, mix of tech comfort levels</li>
                <li><strong>Tasks:</strong> Schedule appointment, refill prescription, view test results, message doctor</li>
                <li><strong>Metrics:</strong> Task completion, time-on-task, error rate, subjective satisfaction</li>
              </ul>
            </div>

            <div>
              <h3>What testing revealed</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                <strong>Round 1 (wireframes):</strong> IA was solid, but &quot;Health Records&quot; label confused users.
                We changed it to &quot;Test Results & Documents.&quot; Users also wanted a clearer logout button.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Round 2 (mid-fi prototype):</strong> Visual hierarchy wasn&apos;t strong enough—users missed
                the primary CTA on several screens. We increased button size and contrast. Step indicators in
                multi-step flows were unclear; we added &quot;Step 1 of 3&quot; labels.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Round 3 (pre-launch):</strong> Minor refinements to error messaging and confirmation screens.
                Overall task success rate was 85%, up from 42% on the old portal.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Reflection */}
      <section>
        <Container>
          <h2>Reflection</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <h3>What worked</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Involving engineers early in research prevented scope creep and ensured technical constraints
                informed design decisions from the start. This saved weeks of rework and built trust across the team.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Testing at multiple fidelity levels helped us catch issues early when they were cheap to fix,
                rather than discovering them in final QA.
              </p>
            </div>

            <div>
              <h3>What I learned</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                I learned to balance user needs with technical constraints earlier in the design phase.
                In previous projects, I&apos;d design the &quot;ideal&quot; solution and then negotiate with engineering.
                This time, I brought constraints into the ideation process, which led to more realistic, shippable designs.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                I also learned that cognitive load principles (chunking, progressive disclosure, clear affordances)
                apply universally, but they&apos;re especially critical when designing for users with declining
                cognitive flexibility.
              </p>
            </div>

            <div>
              <h3>What I&apos;d do differently</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                I would have conducted more usability tests mid-process instead of waiting until high-fidelity
                designs were complete. We caught some issues in round 2 that could have been identified earlier
                with paper prototypes or low-fi clickable wireframes.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                I&apos;d also involve customer support earlier. They had valuable insights about common pain points
                that I only discovered late in the project when reviewing support tickets.
              </p>
            </div>

            <div>
              <h3>Impact</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Post-launch, the portal saw sustained improvements in task completion and satisfaction scores.
                The healthcare provider is now using the design principles and research insights to guide redesigns
                of other patient-facing tools.
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
            <Link href="/work/mobile-banking">Next project →</Link>
          </nav>
        </Container>
      </section>
    </article>
  );
}
