import Link from "next/link";

type WorkCardProps = {
  title: string;
  slug: string;
  role: string;
  timeline?: string;
  context: string;
  excerpt: string;
  tags?: string[];
};

export function WorkCard({
  title,
  slug,
  role,
  timeline,
  context,
  excerpt,
  tags,
}: WorkCardProps) {
  return (
    <article
      style={{
        paddingTop: "var(--spacing-block)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <h3>
        <Link href={`/work/${slug}`}>{title}</Link>
      </h3>
      <p
        style={{
          marginTop: "var(--spacing-inline)",
          color: "var(--foreground-muted)",
          fontSize: "0.875rem",
        }}
      >
        {role} {timeline && `| ${timeline}`} | {context}
      </p>
      <p style={{ marginTop: "var(--spacing-element)" }}>{excerpt}</p>
      {tags && tags.length > 0 && (
        <ul
          style={{
            marginTop: "var(--spacing-element)",
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
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
