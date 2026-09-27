type CaseStudyHeaderProps = {
  title: string;
  role: string;
  timeline: string;
  team?: string;
  tags: string[];
};

export function CaseStudyHeader({
  title,
  role,
  timeline,
  team,
  tags,
}: CaseStudyHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <div
        style={{
          marginTop: "var(--spacing-block)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-inline)",
        }}
      >
        <p style={{ fontSize: "1.125rem" }}>{role}</p>
        <p style={{ color: "var(--foreground-muted)" }}>{timeline}</p>
        {team && <p style={{ color: "var(--foreground-muted)" }}>{team}</p>}
      </div>
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
        {tags.map((tag) => (
          <li
            key={tag}
            style={{
              fontSize: "0.875rem",
              color: "var(--foreground-muted)",
              padding: "0.5rem 1rem",
              border: "1px solid var(--border)",
            }}
          >
            {tag}
          </li>
        ))}
      </ul>
    </header>
  );
}
