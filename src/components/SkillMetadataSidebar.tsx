import type { ClawdisSkillMetadata } from "clawhub-schema";
import {
  PLATFORM_SKILL_LICENSE,
  PLATFORM_SKILL_LICENSE_SUMMARY,
} from "clawhub-schema/licenseConstants";
import { Package, Star } from "lucide-react";
import type { Id } from "../../convex/_generated/dataModel";
import { formatCompactStat } from "../lib/numberFormat";
import type { PublicPublisher, PublicSkill } from "../lib/publicUser";
import { getRuntimeEnv } from "../lib/runtimeEnv";
import { timeAgo } from "../lib/timeAgo";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { UserBadge } from "./UserBadge";

type SkillMetadataSidebarProps = {
  skill: PublicSkill;
  latestVersion: { version?: string; _id: Id<"skillVersions"> } | null;
  owner: PublicPublisher | null;
  ownerHandle: string | null;
  clawdis?: ClawdisSkillMetadata;
  osLabels: string[];
  tagEntries: Array<[string, Id<"skillVersions">]>;
  isMalwareBlocked?: boolean;
  isRemoved?: boolean;
  nixPlugin?: string;
};

export function SkillMetadataSidebar({
  skill,
  latestVersion,
  owner,
  ownerHandle,
  clawdis: _clawdis,
  osLabels,
  tagEntries,
  isMalwareBlocked,
  isRemoved,
  nixPlugin,
}: SkillMetadataSidebarProps) {
  const convexSiteUrl = getRuntimeEnv("VITE_CONVEX_SITE_URL") ?? "https://clawhub.ai";

  return (
    <div className="skill-metadata-bar">
      {/* Publisher */}
      <div className="metadata-bar-section metadata-bar-publisher">
        <UserBadge
          user={owner}
          fallbackHandle={ownerHandle}
          prefix=""
          size="sm"
          showName
        />
      </div>

      {/* Stats */}
      <div className="metadata-bar-section metadata-bar-stats">
        <span className="metadata-bar-stat">
          <Package size={14} aria-hidden="true" />
          <span className="metadata-bar-stat-value">{formatCompactStat(skill.stats.downloads)}</span>
          <span className="metadata-bar-stat-label">downloads</span>
        </span>
        <span className="metadata-bar-stat">
          <Star size={14} aria-hidden="true" />
          <span className="metadata-bar-stat-value">{formatCompactStat(skill.stats.stars)}</span>
          <span className="metadata-bar-stat-label">stars</span>
        </span>
        <span className="metadata-bar-stat">
          <span className="metadata-bar-stat-value">{formatCompactStat(skill.stats.versions ?? 0)}</span>
          <span className="metadata-bar-stat-label">versions</span>
        </span>
      </div>

      {/* Details */}
      <div className="metadata-bar-section metadata-bar-details">
        {latestVersion?.version ? (
          <span className="metadata-bar-detail">
            <span className="metadata-bar-detail-label">v</span>
            <span className="metadata-bar-detail-value">{latestVersion.version}</span>
          </span>
        ) : null}
        <span className="metadata-bar-detail">
          <span className="metadata-bar-detail-label">updated</span>
          <span className="metadata-bar-detail-value">{timeAgo(skill.updatedAt)}</span>
        </span>
        <span className="metadata-bar-detail">
          <span className="metadata-bar-detail-label">license</span>
          <span className="metadata-bar-detail-value">{PLATFORM_SKILL_LICENSE}</span>
        </span>
      </div>

      {/* Tags */}
      {tagEntries.length > 0 ? (
        <div className="metadata-bar-section metadata-bar-tags">
          {tagEntries.slice(0, 3).map(([tag]) => (
            <Badge key={tag} variant="compact">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      {/* Download */}
      {!nixPlugin && !isMalwareBlocked && !isRemoved ? (
        <div className="metadata-bar-section metadata-bar-download">
          <Button asChild variant="primary" size="sm">
            <a href={`${convexSiteUrl}/api/v1/download?slug=${skill.slug}`}>
              Download
            </a>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
