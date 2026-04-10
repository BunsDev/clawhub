import type { ClawdisSkillMetadata } from "clawhub-schema";
import {
  PLATFORM_SKILL_LICENSE,
  PLATFORM_SKILL_LICENSE_SUMMARY,
} from "clawhub-schema/licenseConstants";
import { Calendar, Clock, Download, GitBranch, Package, Star, Tag } from "lucide-react";
import type { Id } from "../../convex/_generated/dataModel";
import { formatCompactStat } from "../lib/numberFormat";
import type { PublicPublisher, PublicSkill } from "../lib/publicUser";
import { getRuntimeEnv } from "../lib/runtimeEnv";
import { timeAgo } from "../lib/timeAgo";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { UserBadge } from "./UserBadge";

type SkillMetadataBarProps = {
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

export function SkillMetadataBar({
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
}: SkillMetadataBarProps) {
  const convexSiteUrl = getRuntimeEnv("VITE_CONVEX_SITE_URL") ?? "https://clawhub.ai";

  return (
    <div className="skill-metadata-bar">
      {/* Download / Install */}
      {!nixPlugin && !isMalwareBlocked && !isRemoved ? (
        <div className="metadata-bar-download">
          <Button asChild variant="primary" size="sm">
            <a href={`${convexSiteUrl}/api/v1/download?slug=${skill.slug}`}>
              <Download size={14} aria-hidden="true" />
              Download zip
            </a>
          </Button>
        </div>
      ) : null}

      {/* Stats */}
      <div className="metadata-bar-stats">
        <div className="metadata-bar-stat">
          <Package size={14} aria-hidden="true" />
          <span className="metadata-bar-stat-value">{formatCompactStat(skill.stats.downloads)}</span>
          <span className="metadata-bar-stat-label">Downloads</span>
        </div>
        <div className="metadata-bar-stat">
          <Star size={14} aria-hidden="true" />
          <span className="metadata-bar-stat-value">{formatCompactStat(skill.stats.stars)}</span>
          <span className="metadata-bar-stat-label">Stars</span>
        </div>
        <div className="metadata-bar-stat">
          <GitBranch size={14} aria-hidden="true" />
          <span className="metadata-bar-stat-value">{formatCompactStat(skill.stats.versions ?? 0)}</span>
          <span className="metadata-bar-stat-label">Versions</span>
        </div>
      </div>

      {/* Details */}
      <div className="metadata-bar-details">
        <div className="metadata-bar-detail">
          <Clock size={12} aria-hidden="true" />
          <span>Updated {timeAgo(skill.updatedAt)}</span>
        </div>
        <div className="metadata-bar-detail">
          <Calendar size={12} aria-hidden="true" />
          <span>Created {timeAgo(skill.createdAt)}</span>
        </div>
        {latestVersion?.version ? (
          <div className="metadata-bar-detail">
            <Tag size={12} aria-hidden="true" />
            <span>v{latestVersion.version}</span>
          </div>
        ) : null}
        <div className="metadata-bar-detail metadata-bar-license">
          <span>{PLATFORM_SKILL_LICENSE}</span>
        </div>
        {osLabels.length ? (
          <div className="metadata-bar-detail">
            <span>{osLabels.join(", ")}</span>
          </div>
        ) : null}
      </div>

      {/* Tags */}
      {tagEntries.length > 0 ? (
        <div className="metadata-bar-tags">
          {tagEntries.map(([tag]) => (
            <Badge key={tag} variant="compact">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      {/* Publisher */}
      <div className="metadata-bar-publisher">
        <UserBadge
          user={owner}
          fallbackHandle={ownerHandle}
          prefix=""
          size="sm"
          showName
        />
      </div>
    </div>
  );
}
