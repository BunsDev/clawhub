import { Link } from "@tanstack/react-router";
import {
  Bot,
  Code2,
  Database,
  FileCode,
  Globe,
  MessageSquare,
  Settings,
  Wand2,
  Workflow,
  Zap,
} from "lucide-react";

type Category = {
  id: string;
  label: string;
  query: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: "coral" | "seafoam" | "amber" | "violet";
  count?: number;
};

const CATEGORIES: Category[] = [
  { id: "ai-agents", label: "AI Agents", query: "ai agent", icon: Bot, color: "coral" },
  { id: "automation", label: "Automation", query: "automation", icon: Workflow, color: "seafoam" },
  { id: "developer-tools", label: "Dev Tools", query: "developer tools", icon: Code2, color: "amber" },
  { id: "integrations", label: "Integrations", query: "integration", icon: Zap, color: "violet" },
  { id: "chat", label: "Chat & LLM", query: "chat llm", icon: MessageSquare, color: "coral" },
  { id: "api-tools", label: "API Tools", query: "api", icon: Globe, color: "seafoam" },
  { id: "data", label: "Data & Storage", query: "data", icon: Database, color: "amber" },
  { id: "utilities", label: "Utilities", query: "utility", icon: Settings, color: "violet" },
];

type CategoryTilesProps = {
  categories?: Category[];
};

export function CategoryTiles({ categories = CATEGORIES }: CategoryTilesProps) {
  return (
    <div className="discovery-categories">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link
            key={category.id}
            to="/search"
            search={{ q: category.query, type: undefined }}
            className="discovery-category"
            data-color={category.color}
          >
            <div className="discovery-category-icon">
              <Icon size={24} aria-hidden="true" />
            </div>
            <span className="discovery-category-label">{category.label}</span>
            {category.count != null && (
              <span className="discovery-category-count">
                {category.count} skills
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
