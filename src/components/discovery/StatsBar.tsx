import { formatCompactStat } from "../../lib/numberFormat";

type StatsBarProps = {
  skillCount?: number | null;
  downloadCount?: number | null;
  userCount?: number | null;
};

export function StatsBar({ skillCount, downloadCount, userCount }: StatsBarProps) {
  return (
    <div className="discovery-stats-banner">
      {skillCount != null && (
        <div className="discovery-stat-item">
          <span className="discovery-stat-value">
            <span>{formatCompactStat(skillCount)}</span>+
          </span>
          <span className="discovery-stat-label">Public Skills</span>
        </div>
      )}
      {downloadCount != null && (
        <div className="discovery-stat-item">
          <span className="discovery-stat-value">
            <span>{formatCompactStat(downloadCount)}</span>+
          </span>
          <span className="discovery-stat-label">Total Installs</span>
        </div>
      )}
      {userCount != null && (
        <div className="discovery-stat-item">
          <span className="discovery-stat-value">
            <span>{formatCompactStat(userCount)}</span>+
          </span>
          <span className="discovery-stat-label">Builders</span>
        </div>
      )}
    </div>
  );
}
