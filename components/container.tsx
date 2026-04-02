import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "default" | "wide";
  className?: string;
};

export function Container({ children, size = "default", className = "" }: ContainerProps) {
  const maxWidth = size === "wide" ? "var(--content-width-wide)" : "var(--content-width)";

  return (
    <div
      style={{
        maxWidth,
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
