import { Link } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";

type TrendingItem = {
  label: string;
  query: string;
};

const DEFAULT_TRENDING: TrendingItem[] = [
  { label: "Claude MCP", query: "claude mcp" },
  { label: "AI Agents", query: "ai agent" },
  { label: "Code Gen", query: "code generation" },
  { label: "Automation", query: "automation" },
  { label: "API Tools", query: "api tools" },
  { label: "Workflows", query: "workflow" },
  { label: "Chat Bots", query: "chat bot" },
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
