import Link from "next/link";

type ArticleCardProps = {
  title: string;
  slug: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags?: string[];
  variant?: "default" | "compact";
};

export function ArticleCard({
  title,
  slug,
  date,
  readingTime,
  excerpt,
  tags,
  variant = "default",
}: ArticleCardProps) {
  const HeadingTag = variant === "compact" ? "h3" : "h2";
  const showBorder = variant === "default";

  return (
    <article
      style={
        showBorder
          ? {
              paddingTop: "var(--spacing-block)",
              borderTop: "1px solid var(--border)",
            }
          : {}
      }
    >
      <HeadingTag>
        <Link href={`/thinking/${slug}`}>{title}</Link>
      </HeadingTag>
      <p
        style={{
          marginTop: "var(--spacing-inline)",
          color: "var(--foreground-muted)",
          fontSize: "0.875rem",
        }}
      >
        {date} · {readingTime}
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
