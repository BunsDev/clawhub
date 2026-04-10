import { Link } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";

type TrendingItem = {
  label: string;
  query: string;
};

const DEFAULT_TRENDING: TrendingItem[] = [
  { label: "claude-skills", query: "claude" },
  { label: "mcp-tools", query: "mcp tools" },
  { label: "workflow-automation", query: "workflow automation" },
  { label: "code-generation", query: "code generation" },
  { label: "api-wrappers", query: "api wrapper" },
  { label: "llm-prompts", query: "llm prompt" },
];

type TrendingBarProps = {
  items?: TrendingItem[];
};

export function TrendingBar({ items = DEFAULT_TRENDING }: TrendingBarProps) {
  return (
    <div className="discovery-trending-bar">
      <span className="discovery-trending-label">
        <TrendingUp aria-hidden="true" />
        Trending
      </span>
      <span className="discovery-trending-divider" aria-hidden="true" />
      <div className="discovery-trending-items">
        {items.map((item) => (
          <Link
            key={item.label}
            to="/search"
            search={{ q: item.query, type: undefined }}
            className="discovery-trending-item"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
