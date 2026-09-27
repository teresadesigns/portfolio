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

export default function DeskesCaseStudy() {
  return (
    <article>
      {/* Header */}
      <section>
        <Container>
          <CaseStudyHeader
            title="Də'skəs Usability Study"
            role="UX Researcher | Sponsored Course Project, Real Client"
            timeline="Jan 2026 – Mar 2026"
            tags={["UX Research", "Usability Testing", "Mixed Methods", "Health Tech"]}
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
                I contributed equally across all phases of the study — from study design and recruitment
                through data analysis, synthesis, and presentation — and individually owned the observation
                protocol design, participant account setup, and bug documentation and remediation
                coordination.
              </p>
            </div>

            <div>
              <h3>Team</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Four first-year MS HCDE students at UW. Contributions were distributed evenly across the
                full process.
              </p>
            </div>

            <div>
              <h3>Client</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>Consulting in Health Informatics</p>
            </div>

            <div>
              <h3>Context</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                End-to-end usability evaluation of Də&apos;skəs, a social media platform built to support
                mental wellness for young people aged 18–24 in Kenya. The platform includes peer-generated
                content, community forums, and an AI-powered chatbot designed to act as a mental wellness
                consultant and partner for users.
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
                Də&apos;skəs was developed under the Imarisha Afya ya Akili (Enhancing Mental Wellness)
                initiative, addressing a real gap: mental health stigma, limited access to professional
                services, and shortage of trained practitioners for young people in Kenya. The platform
                was in active development as part of a broader research program, and the client needed to
                understand whether it actually worked in users&apos; hands before continuing to build.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The evaluation aimed to answer 3 questions: Do users understand what the platform is for
                and what the AI Assistant does? Can they interact with it successfully? Do they find
                content that feels relevant and supportive?
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                These questions sound straightforward. But for a platform handling sensitive mental wellness
                content, they are harder to answer than they look. Whether someone can technically complete
                a task tells you very little about whether they would ever actually use the feature. And
                whether someone feels comfortable enough to share about their mental health is shaped by
                trust, safety, and cultural context — none of which task completion rates capture on their
                own. The gap between what people can do and what they will do was the core challenge of
                this evaluation.
              </p>
            </div>
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
                I used a mixed-methods approach, combining behavioral and attitudinal data to understand
                not just whether users could interact with the platform, but whether they would — and why.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                For a platform like this, the choice of mixed methods was deliberate. Mental wellness is
                personal and trust-dependent. A user might rate ease of posting highly and still never
                post, because the barrier is not ability — it is whether they trust the platform with
                something vulnerable. Behavioral observation alone misses the reasoning. Self-reported
                ratings alone miss the behavior. Bringing both into conversation with each other was the
                only way to understand what was actually happening.
              </p>
            </div>

            <div>
              <h3>Study design</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  Defined 3 research questions around understanding, interaction, and content resonance,
                  which shaped task design and data collection instruments
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  Developed 3 tasks covering content exploration, content creation, and AI Assistant
                  interaction. Rather than asking participants to act as a generic user, Tasks 1 and 2
                  asked them to interact based on their own lives and interests, grounding the tasks in
                  personal context to surface more authentic behavior and reactions. Task 3 included a
                  scenario to give participants context for engaging with the AI Assistant. Each task was
                  followed by post-task Likert scale rating questions covering a range of dimensions
                  including perceived ease, satisfaction, value, and trust, varying by task
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  Designed the observation protocol to define what observers should capture and at what
                  level of detail, keeping note takers focused on watching participants rather than making
                  real-time decisions about what mattered, and ensuring observational data would be
                  comparable across sessions
                </li>
              </ul>
            </div>

            <div>
              <h3>Data collection</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Across 9 remote, 60-minute sessions conducted via Zoom with screen sharing, I collected:
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Behavioral data</strong>
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Task success scores (binary: completed or not, across 8 success criteria per participant)</li>
                <li>Think-aloud transcripts and observation notes capturing real-time behavior, navigation choices, and verbal reactions</li>
              </ul>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                <strong>Attitudinal data</strong>
              </p>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li>Post-task Likert scale ratings after each task, covering perceived ease, satisfaction, value, and trust depending on the task</li>
                <li>System Usability Scale (SUS) administered verbally post-session, consistent with the client&apos;s existing research methodology within the broader Imarisha Afya ya Akili initiative</li>
                <li>Post-test qualitative interview transcripts capturing overall experience, desired feature usage, and trust-related concerns</li>
              </ul>
            </div>

            <div>
              <h3>Analysis</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                For quantitative data, I compiled task success scores, Likert ratings, and SUS responses
                into a matrix and examined patterns using descriptive statistics — looking at overall
                results as well as subgroup comparisons by location (Seattle and Kenya) and modality
                (mobile and desktop). This was particularly important for surfacing where self-reported
                ratings and observed behavior diverged across groups.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                For qualitative data, I conducted thematic analysis using Atlas.ti with an inductive coding
                approach. Each transcript was coded by 2 team members to support consistency. Analysis drew
                on think-aloud transcripts, post-test interview responses, and observation notes.
              </p>
            </div>

            <div>
              <h3>Recruitment and sessions</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Recruited a total of 10 participants ages 18–24 across Seattle (6) and Kenya (4), tested
                on mobile and desktop. 1 Kenyan participant&apos;s data was excluded due to technical
                difficulties and possible language barriers, leaving 9 in the final sample. Seattle
                participants were recruited through team connections; Kenyan participants were brought in
                by the client based on screening criteria.
              </p>
              <p style={{ marginTop: "var(--spacing-element)", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
                Note: 5 desktop-specific and 4 mobile-specific platform bugs were identified and documented
                prior to testing. The most critical could not be remediated without risking system
                instability. This is noted as a study constraint that shaped the testing environment.
              </p>
            </div>

            <Placeholder label="Placeholder: Research process overview — timeline, methods, and participant breakdown." />
          </div>
        </Container>
      </section>

      {/* Cross-Cultural Data Interpretation */}
      <section>
        <Container>
          <h2>A note on cross-cultural data interpretation</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                One of the most methodologically significant challenges in this study was interpreting the
                Kenyan participants&apos; data. Kenyan participants had lower task completion rates than
                Seattle participants, yet consistently gave higher self-reported ratings. P6, for example,
                rated ease of task completion a 5 out of 5 for the posting task despite not completing it.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Rather than treating either measure as definitive, I triangulated every self-reported rating
                against observed behavior. Where they diverged, the discrepancy itself became the finding.
                The likely contributor was social desirability bias — a well-documented pattern in
                cross-cultural research where participants respond in ways they believe the researcher wants
                to hear, particularly when power dynamics, language barriers, or unfamiliarity with the
                research context are present.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                This is a real limitation of the study design, and I named it clearly in the report. It
                also confirmed why the mixed-methods approach was essential. The Likert ratings and SUS
                scores alone would have suggested a smooth experience for Kenyan users. The behavioral
                data told a different story. The combination made it possible to report honestly on what
                I actually observed.
              </p>
            </div>

            <Placeholder label="Placeholder: Chart showing task completion scores alongside SUS scores per participant, highlighting the divergence for Kenyan participants." />
          </div>
        </Container>
      </section>

      {/* Key Findings */}
      <section>
        <Container>
          <h2>Key findings</h2>

          <div style={{ marginTop: "var(--spacing-block)", display: "flex", flexDirection: "column", gap: "var(--spacing-block)" }}>
            <div>
              <p>
                The overall SUS mean was 77.78, above the average usability benchmark of 68. But this did
                not reflect what I observed in sessions. The gap between what participants reported and
                what they actually did was one of the most consistent patterns across all 9 sessions.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                I assigned severity ratings to all 20 findings using Nordstrom&apos;s usability severity
                scale, ranging from High (prevents task completion) to Opportunity (points to future
                enhancement), to make the findings directly actionable for the client&apos;s development
                priorities. The 5 findings below represent those rated High or Medium severity, selected
                because they most directly connect to whether the platform can deliver on its core purpose.
              </p>
            </div>

            <div>
              <h3>1. Users did not understand what the AI Assistant was for [High]</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                Most participants assumed the AI Assistant was a site navigation or search tool rather than
                a mental wellness consultant. Among mobile participants, 2 out of 5 expected it to help
                them navigate the platform. Among desktop participants, 3 out of 4 held the same
                expectation. Because they misunderstood its role, many disengaged — closing the window or
                ignoring it entirely. In several sessions, when participants were prompted to engage with
                the AI Assistant in Task 3, several expressed frustration that it did not help with
                navigation and said they would not return to it.
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I think it should help me navigate the platform, that&apos;s all I&apos;d need
                from an embedded AI assistant.&rdquo; (P4, Seattle, mobile)
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I think it&apos;s to find... like, navigate through this space. I hope, and I think
                it&apos;s not like a therapist of sorts.&rdquo; (P3, Seattle, desktop)
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The positioning matters as much as the labeling. On mobile, the AI Assistant dominates the
                home screen on login, occupying nearly half the visible area. On desktop it is less
                prominent but still present. A highly visible chatbot embedded in a social media interface
                sends a strong signal about what it does — and that signal was consistently misread.
                Clarifying the AI Assistant&apos;s purpose through its opening message and home page
                branding could help align user expectations before they disengage.
              </p>
            </div>

            <div>
              <h3>2. Privacy uncertainty limited users&apos; sense of safety in sharing [High]</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                The platform&apos;s value depends on users feeling comfortable sharing their lived
                experiences and engaging with others&apos; — the peer-generated content and community
                interactions are what make it meaningful. But 3 out of 6 Seattle participants expressed
                confusion about who could see their posts, specifically what distinguished
                &ldquo;private,&rdquo; &ldquo;friends,&rdquo; and &ldquo;logged in users&rdquo; in the
                privacy settings. 2 out of 9 participants specifically called out wanting an anonymous
                posting option, especially for sensitive mental wellness content.
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I think one thing I do wish, especially if I were in a more sensitive topic, is I
                wish there was an option to make an anonymous post.&rdquo; (P3, Seattle, desktop)
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                On a platform handling sensitive mental wellness content, ambiguity about audience does not
                just create friction — it undermines the sense of safety that sharing requires. If users
                are not confident about who sees their posts, they hesitate to share. And if they hesitate
                to share, the peer community the platform depends on does not form. Providing clearer
                definitions for privacy settings and an anonymous posting option could meaningfully lower
                this barrier.
              </p>
            </div>

            <div>
              <h3>3. Posting was hard to find [High]</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                The platform&apos;s value depends on users actively contributing content — peer-generated
                posts, blogs, and discussion topics are what give the community its substance. But 3 out
                of 9 participants did not know how to post and remained on the home page throughout the
                entire posting task. An additional 2 participants who eventually did post verbally expressed
                frustration or confusion while looking for where to do so.
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;There&apos;s no way I can post here.&rdquo; (P6, Kenya, mobile)
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;Because of how I&apos;m used to other platforms, I would have expected to be able
                to actually write a blog post directly from here.&rdquo; (P5, Seattle, mobile)
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                What made this finding especially telling was the cross-group pattern. All 3 Kenyan
                participants did not post and stayed on the home page throughout the task — yet their
                Likert ratings for ease of finding the desired destination yielded a median of 4 out of 5.
                That discrepancy between self-reported ease and observed behavior is consistent with the
                social desirability dynamic noted in the cross-cultural section, and it is why I did not
                rely on the ratings alone. The behavioral data told a clearer story: the posting function
                was not discoverable from the home page, regardless of how participants reported the
                experience.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The issue appeared across both mobile and desktop, which suggests it reflects a broader
                discoverability gap in the information architecture rather than a device-specific problem.
                A platform built around peer contribution cannot afford to make contributing hard to find.
                Adding a persistent posting entry point accessible from any page would directly address this.
              </p>
            </div>

            <div>
              <h3>4. Home page navigation limited content discovery [High]</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                The home page surfaced only small previews of each content category with no visible path
                to explore further. On desktop, full content listings were buried under navigation tabs.
                On mobile, the hamburger menu obscured navigation options entirely. 2 participants were
                unable to find any content that resonated with them at all, and an additional 3 who did
                find content encountered meaningful friction along the way.
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;It shows just a small set of blogs and it&apos;s not necessary that something I
                resonate with is there, and I did not see an option for looking more.&rdquo; (P5, Seattle,
                mobile)
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                When 1 participant who could not find content was asked whether there were other places to
                look, she said: &ldquo;I don&apos;t have any other way.&rdquo; Content discovery is not
                just a navigation problem here — it is directly tied to whether the platform can deliver
                on its core promise of peer support and community. Surfacing content previews with direct
                access links and introducing a bottom navigation bar for mobile could significantly reduce
                this barrier.
              </p>
            </div>

            <div>
              <h3>5. Distinction between content features was unclear [Medium]</h3>
              <p style={{ marginTop: "var(--spacing-inline)" }}>
                3 out of 9 participants struggled to distinguish between the platform&apos;s content
                features. Blogs, discussion topics, groups, and pages felt like they served the same
                purpose, with no clear signals about what distinguished one from another or which was most
                appropriate for different kinds of sharing. The confusion persisted even after time
                exploring the platform, suggesting it reflects an information architecture issue rather
                than a first-impression problem.
              </p>
              <p style={{ marginTop: "var(--spacing-element)", paddingLeft: "1.5rem", borderLeft: "2px solid var(--border)" }}>
                &ldquo;I think it comes back to the blogs versus discussion topics... I still am confused
                on the difference, and I think that would affect what do I share.&rdquo; (P3, Seattle,
                desktop)
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                On a mental wellness platform, not knowing where a post will land adds friction that users
                are already sensitive to. It compounds the privacy concerns above: if you are unsure who
                can see your post and also unsure which space it belongs in, the path of least resistance
                is not to post at all. Introducing distinct icons, contextual feature descriptions, and
                potentially reducing the number of features could reduce this confusion at the point of
                decision.
              </p>
            </div>

            <Placeholder label="Placeholder: Summary table of all 20 findings with severity ratings and corresponding design considerations." />
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
                The most important lesson from this study was about what self-reported data can and cannot
                tell you — and how that gap is shaped not just by individual honesty but by how questions
                are framed, how they are understood across cultural and linguistic contexts, and what
                participants believe the researcher wants to hear.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                A concrete example: the median Likert rating for clarity of the AI Assistant&apos;s
                purpose was 4 out of 5, suggesting most participants understood what it was for. But the
                observational and qualitative data showed most participants fundamentally misidentified its
                purpose. A rating of 4 on &ldquo;how clear is the AI Assistant&apos;s purpose&rdquo; does
                not mean users understood its purpose correctly. It means they felt clear about their own,
                incorrect interpretation. That is a question design issue as much as a usability issue,
                and it changed how I read all the attitudinal data in this study.
              </p>
            </div>

            <div>
              <h3>If this study were to continue</h3>
              <ul style={{ marginTop: "var(--spacing-inline)" }}>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  I would conduct in-person testing with Kenyan participants, or include a Kenyan cultural
                  liaison in remote sessions, to reduce the power dynamics that likely shaped self-reported
                  responses in this round
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  I would run a card sorting exercise with users to understand how they conceptualize the
                  content features before any redesign of the information architecture
                </li>
                <li style={{ marginTop: "var(--spacing-inline)" }}>
                  I would explore what specific trust signals — professional verification, community
                  guidelines, onboarding — would meaningfully shift users&apos; willingness to share about
                  mental health in a semi-public space
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
                This study delivered a full usability report to Consulting in Health Informatics, covering
                20 findings across four severity levels with corresponding design considerations. The client
                responded positively and confirmed the findings would inform the platform&apos;s next
                development cycle. Addressing these findings — from clarifying the AI Assistant&apos;s
                purpose to strengthening privacy controls and improving navigation — would help create a
                more intuitive, trustworthy, and safer environment where young people can genuinely seek
                and offer support. That is what Də&apos;skəs was built to do, and usability is what
                determines whether it can.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                Beyond the specific usability issues, the study surfaced a more fundamental product question
                that the findings alone do not resolve: what is the primary feature of Də&apos;skəs — the
                AI Assistant or the peer community? Participants interacted with both but held consistently
                different expectations for each, and the current design does not signal which is central.
                That ambiguity runs underneath several of the findings in this study. Clarifying the
                platform&apos;s identity — not just its interface — is likely a prerequisite for the next
                round of design work to be effective.
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
                This project sharpened something I had understood in theory but not yet seen so clearly in
                practice: the gap between what people say and what they do is not a data quality problem
                to resolve. It is often where the most important findings live. And bridging that gap —
                understanding why behavior and self-report diverge — is where the real design opportunities
                are.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                The moment that made this concrete was the AI Assistant clarity ratings. The median
                perceived clarity was 4 out of 5. The dominant pattern in the sessions was fundamental
                misunderstanding of what the feature was for. Those 2 things together point not to a
                labeling problem but to a deeper structural question: what is the interface communicating
                before a user reads a single word? That kind of reframe — from surface fix to root cause
                — is what becomes visible only when behavioral and attitudinal data are read against each
                other rather than in isolation.
              </p>
              <p style={{ marginTop: "var(--spacing-element)" }}>
                On a platform built around vulnerable, trust-dependent sharing, that space between what
                someone says they would do and what they actually do is not just a methodological
                inconvenience. It is exactly where the design work needs to happen. That is something I
                want to bring into every research role I take on.
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
