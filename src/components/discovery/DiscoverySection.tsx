import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Sparkles, Star, TrendingUp, Zap } from "lucide-react";
import type { ReactNode } from "react";

type DiscoverySectionProps = {
  title: string;
  icon?: "trending" | "new" | "featured" | "popular" | "community";
  linkTo?: string;
  linkSearch?: Record<string, unknown>;
  linkLabel?: string;
  children: ReactNode;
  className?: string;
};

const SECTION_ICONS = {
  trending: TrendingUp,
  new: Sparkles,
  featured: Zap,
  popular: Flame,
  community: Star,
};

export function DiscoverySection({
  title,
  icon,
  linkTo,
  linkSearch,
  linkLabel = "See all",
  children,
  className = "",
}: DiscoverySectionProps) {
  const Icon = icon ? SECTION_ICONS[icon] : null;

  return (
    <section className={`discovery-section ${className}`}>
      <div className="discovery-section-header">
        <h2 className="discovery-section-title">
          {Icon && <Icon aria-hidden="true" />}
          {title}
        </h2>
        {linkTo && (
          <Link
            to={linkTo}
            search={linkSearch ?? {}}
            className="discovery-section-link"
          >
            {linkLabel} <ArrowRight aria-hidden="true" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

type DiscoveryGridProps = {
  children: ReactNode;
  featured?: boolean;
};

export function DiscoveryGrid({ children, featured = false }: DiscoveryGridProps) {
  return (
    <div className={`discovery-grid ${featured ? "discovery-grid-featured" : ""}`}>
      {children}
    </div>
  );
}
