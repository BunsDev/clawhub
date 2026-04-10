import { Link } from "@tanstack/react-router";
import { ArrowRight, Package, Star, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { MarketplaceIcon } from "../MarketplaceIcon";
import { formatCompactStat } from "../../lib/numberFormat";
import type { PublicPublisher, PublicSkill } from "../../lib/publicUser";

type DiscoveryCardProps = {
  skill: PublicSkill;
  ownerHandle?: string | null;
  owner?: PublicPublisher | null;
  badge?: "trending" | "new" | "featured" | "staff-pick" | null;
};

export function DiscoveryCard({ skill, ownerHandle, owner, badge }: DiscoveryCardProps) {
  const handle = ownerHandle ?? owner?.handle ?? null;
  const ownerSegment = handle?.trim() || String(skill.ownerPublisherId ?? skill.ownerUserId);
  const href = `/${encodeURIComponent(ownerSegment)}/${encodeURIComponent(skill.slug)}`;

  const getBadgeClass = () => {
    if (badge === "trending") return "discovery-card-badge trending";
    if (badge === "new") return "discovery-card-badge new";
    return "discovery-card-badge";
  };

  const getBadgeLabel = () => {
    if (badge === "trending") return "Trending";
    if (badge === "new") return "New";
    if (badge === "featured") return "Featured";
    if (badge === "staff-pick") return "Staff Pick";
    return null;
  };

  return (
    <Link to={href} className="discovery-card">
      <div className="discovery-card-header">
        <div className="discovery-card-icon">
          <MarketplaceIcon kind="skill" label={skill.displayName} size="md" />
        </div>
        <div className="discovery-card-info">
          <h3 className="discovery-card-title">{skill.displayName}</h3>
          {handle ? <span className="discovery-card-owner">@{handle}</span> : null}
        </div>
        {badge ? (
          <div className="discovery-card-badges">
            <span className={getBadgeClass()}>{getBadgeLabel()}</span>
          </div>
        ) : null}
      </div>

      <p className="discovery-card-summary">
        {skill.summary ?? "A powerful skill bundle ready to enhance your workflow."}
      </p>

      <div className="discovery-card-footer">
        <div className="discovery-card-stats">
          <span className="discovery-card-stat">
            <Star size={14} aria-hidden="true" />
            {formatCompactStat(skill.stats.stars)}
          </span>
          <span className="discovery-card-stat">
            <Package size={14} aria-hidden="true" />
            {formatCompactStat(skill.stats.downloads)}
          </span>
        </div>
        <span className="discovery-card-cta">
          View <ArrowRight size={12} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

type DiscoverySpotlightProps = {
  skill: PublicSkill;
  ownerHandle?: string | null;
  owner?: PublicPublisher | null;
};

export function DiscoverySpotlight({ skill, ownerHandle, owner }: DiscoverySpotlightProps) {
  const handle = ownerHandle ?? owner?.handle ?? null;
  const ownerSegment = handle?.trim() || String(skill.ownerPublisherId ?? skill.ownerUserId);
  const href = `/${encodeURIComponent(ownerSegment)}/${encodeURIComponent(skill.slug)}`;

  return (
    <Link to={href} className="discovery-spotlight">
      <div className="discovery-spotlight-content">
        <span className="discovery-spotlight-badge">
          <Zap size={14} aria-hidden="true" />
          Featured Pick
        </span>
        <h2 className="discovery-spotlight-title">{skill.displayName}</h2>
        <p className="discovery-spotlight-desc">
          {skill.summary ?? "Discover this powerful skill bundle that can transform your development workflow."}
        </p>
        <div className="discovery-spotlight-meta">
          {handle ? (
            <span className="discovery-spotlight-stat">
              by @{handle}
            </span>
          ) : null}
          <span className="discovery-spotlight-stat">
            <Star size={16} aria-hidden="true" />
            {formatCompactStat(skill.stats.stars)} stars
          </span>
          <span className="discovery-spotlight-stat">
            <Package size={16} aria-hidden="true" />
            {formatCompactStat(skill.stats.downloads)} installs
          </span>
        </div>
      </div>
      <div className="discovery-spotlight-visual">
        <div className="discovery-spotlight-icon">
          <MarketplaceIcon kind="skill" label={skill.displayName} size="lg" />
        </div>
      </div>
    </Link>
  );
}
