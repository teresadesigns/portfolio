import Link from "next/link";
import { Container } from "@/components/container";

// This will be replaced with dynamic data fetching
export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <article>
      <section>
        <Container>
          <header>
            <h1>Designing for Cognitive Load</h1>
            <p style={{ marginTop: "var(--spacing-element)", color: "var(--foreground-muted)" }}>
              December 10, 2024 · 5 min read
            </p>
            <ul
              style={{
                marginTop: "var(--spacing-block)",
                display: "flex",
                gap: "var(--spacing-inline)",
                flexWrap: "wrap",
                listStyle: "none",
                padding: 0,
              }}
            >
              <li
                style={{
                  fontSize: "0.875rem",
                  color: "var(--foreground-muted)",
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                }}
              >
                UX Research
              </li>
              <li
                style={{
                  fontSize: "0.875rem",
                  color: "var(--foreground-muted)",
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                }}
              >
                Cognitive Science
              </li>
              <li
                style={{
                  fontSize: "0.875rem",
                  color: "var(--foreground-muted)",
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                }}
              >
                Design Principles
              </li>
            </ul>
          </header>
        </Container>
      </section>

      <section>
        <Container>
          <div style={{ marginTop: "var(--spacing-section)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <p style={{ fontSize: "1.125rem" }}>
              How reducing mental effort in complex interfaces improves task completion
              and user confidence. Exploring the relationship between cognitive load theory
              and practical interface design.
            </p>

            <div>
              <h2>Understanding Cognitive Load</h2>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Cognitive load theory, developed by John Sweller in the 1980s, describes how our working memory
                processes information. Working memory is limited—it can only hold about 4–7 chunks of information
                at once. When an interface exceeds this capacity, users experience cognitive overload, leading to
                errors, frustration, and task abandonment.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                There are three types of cognitive load: intrinsic (the inherent difficulty of the task), extraneous
                (unnecessary mental effort caused by poor design), and germane (productive mental effort that helps
                learning). As designers, we can&apos;t change intrinsic load much, but we can dramatically reduce
                extraneous load through thoughtful interface design.
              </p>
            </div>

            <div>
              <h2>Common Sources of Extraneous Load</h2>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Information density</strong><br />
                Cramming too much information on one screen forces users to process everything at once. Dense layouts
                with small text, tight spacing, and competing visual elements increase cognitive load unnecessarily.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Unclear visual hierarchy</strong><br />
                When everything looks equally important, users waste mental effort figuring out where to look first.
                Weak typography, inconsistent spacing, and unclear affordances all add cognitive load.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Jargon and unfamiliar terminology</strong><br />
                Using internal terminology or industry jargon forces users to translate language in their heads.
                This translation takes mental effort that could be spent on the actual task.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Complex navigation</strong><br />
                When navigation is inconsistent or unpredictable, users spend mental energy figuring out how to
                move through the interface instead of accomplishing their goals.
              </p>
            </div>

            <div>
              <h2>Practical Strategies to Reduce Cognitive Load</h2>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>1. Progressive disclosure</strong><br />
                Show only what&apos;s needed for the current step. Break complex tasks into sequential screens or
                reveal advanced options only when needed. This keeps working memory focused on one thing at a time.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>2. Chunking information</strong><br />
                Group related information together. Our brains process chunks more efficiently than individual items.
                Use whitespace, borders, or color to create clear visual groups.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>3. Clear visual hierarchy</strong><br />
                Use size, weight, color, and spacing to guide attention. Primary actions should be visually prominent.
                Metadata and secondary information should recede visually.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>4. Consistent patterns</strong><br />
                Once users learn a pattern, they can rely on muscle memory instead of conscious thought. Consistent
                navigation, button placement, and interaction patterns reduce mental effort.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>5. Plain language</strong><br />
                Use language your users already understand. Avoid jargon, acronyms, and internal terminology unless
                your users are domain experts who expect it.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>6. Forgiving design</strong><br />
                Make it easy to undo actions, provide clear error messages, and offer suggestions when users get stuck.
                Anxiety about making mistakes increases cognitive load.
              </p>
            </div>

            <div>
              <h2>Real-World Example: Form Design</h2>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Consider a checkout form. A high-cognitive-load version might:
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Show all fields at once (billing, shipping, payment, preferences)</li>
                <li>Use unclear labels (&quot;Billing Address Line 1&quot; vs &quot;Street address&quot;)</li>
                <li>Lack inline validation (users only discover errors after submitting)</li>
                <li>Mix required and optional fields without distinction</li>
              </ul>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                A low-cognitive-load version would:
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Break the form into steps (shipping → payment → review)</li>
                <li>Show clear, plain-language labels</li>
                <li>Validate inline and provide helpful error messages immediately</li>
                <li>Mark required fields clearly and eliminate unnecessary optional fields</li>
                <li>Remember user data (autofill, &quot;same as shipping address&quot; checkbox)</li>
              </ul>
            </div>

            <div>
              <h2>When Cognitive Load Is Appropriate</h2>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Not all cognitive load is bad. Germane load—mental effort that helps users learn and build
                understanding—can be valuable. Educational interfaces, onboarding flows, and tools for experts
                might intentionally require deeper cognitive engagement.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The key is matching cognitive load to user goals. If the goal is quick task completion (scheduling
                an appointment, refilling a prescription), minimize load. If the goal is learning (educational
                software, creative tools), some germane load is productive.
              </p>
            </div>

            <div>
              <h2>Key Takeaways</h2>
              <ul style={{ marginTop: "var(--spacing-element)" }}>
                <li>Working memory is limited—design interfaces that respect this constraint</li>
                <li>Reduce extraneous cognitive load through progressive disclosure, chunking, and clear hierarchy</li>
                <li>Use plain language and consistent patterns to minimize mental translation</li>
                <li>Test with users to identify sources of cognitive overload you might not see</li>
                <li>Match cognitive load to user goals—minimize for task completion, accept some for learning</li>
              </ul>
            </div>

            <div style={{ fontSize: "0.875rem", color: "var(--foreground-muted)", marginTop: "var(--spacing-block)" }}>
              <p>
                Further reading: <em>Cognitive Load Theory</em> by John Sweller,
                <em>Don&apos;t Make Me Think</em> by Steve Krug
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <nav
            style={{
              marginTop: "var(--spacing-section)",
              paddingTop: "var(--spacing-block)",
              borderTop: "1px solid var(--border)",
            }}
          >
            <Link href="/thinking">← Back to thinking</Link>
          </nav>
        </Container>
      </section>
    </article>
  );
}
