import { Link } from "@tanstack/react-router";
import { MessageCircle, Star, Download, GitFork, Users } from "lucide-react";
import { Button } from "../ui/button";

type ActivityItem = {
  id: string;
  type: "star" | "download" | "fork" | "comment" | "publish";
  user: string;
  userInitial: string;
  skillName: string;
  skillOwner: string;
  timeAgo: string;
};

// Sample activity data - in production this would come from an API
const SAMPLE_ACTIVITY: ActivityItem[] = [
  {
    id: "1",
    type: "star",
    user: "alex_dev",
    userInitial: "A",
    skillName: "ai-assistant-toolkit",
    skillOwner: "toolsmith",
    timeAgo: "2 min ago",
  },
  {
    id: "2",
    type: "download",
    user: "maria_codes",
    userInitial: "M",
    skillName: "workflow-automator",
    skillOwner: "automation-labs",
    timeAgo: "5 min ago",
  },
  {
    id: "3",
    type: "fork",
    user: "dev_ninja",
    userInitial: "D",
    skillName: "api-connector-pro",
    skillOwner: "integration-hub",
    timeAgo: "12 min ago",
  },
  {
    id: "4",
    type: "publish",
    user: "creative_coder",
    userInitial: "C",
    skillName: "data-viz-helper",
    skillOwner: "creative_coder",
    timeAgo: "25 min ago",
  },
  {
    id: "5",
    type: "comment",
    user: "tech_explorer",
    userInitial: "T",
    skillName: "llm-prompt-kit",
    skillOwner: "ai-enthusiast",
    timeAgo: "32 min ago",
  },
];

function getActivityIcon(type: ActivityItem["type"]) {
  switch (type) {
    case "star":
      return <Star size={14} />;
    case "download":
      return <Download size={14} />;
    case "fork":
      return <GitFork size={14} />;
    case "comment":
      return <MessageCircle size={14} />;
    case "publish":
      return <Users size={14} />;
    default:
      return null;
  }
}

function getActivityText(item: ActivityItem) {
  switch (item.type) {
    case "star":
      return (
        <>
          <strong>{item.user}</strong> starred{" "}
          <Link to="/$owner/$slug" params={{ owner: item.skillOwner, slug: item.skillName }}>
            {item.skillOwner}/{item.skillName}
          </Link>
        </>
      );
    case "download":
      return (
        <>
          <strong>{item.user}</strong> downloaded{" "}
          <Link to="/$owner/$slug" params={{ owner: item.skillOwner, slug: item.skillName }}>
            {item.skillOwner}/{item.skillName}
          </Link>
        </>
      );
    case "fork":
      return (
        <>
          <strong>{item.user}</strong> forked{" "}
          <Link to="/$owner/$slug" params={{ owner: item.skillOwner, slug: item.skillName }}>
            {item.skillOwner}/{item.skillName}
          </Link>
        </>
      );
    case "comment":
      return (
        <>
          <strong>{item.user}</strong> commented on{" "}
          <Link to="/$owner/$slug" params={{ owner: item.skillOwner, slug: item.skillName }}>
            {item.skillOwner}/{item.skillName}
          </Link>
        </>
      );
    case "publish":
      return (
        <>
          <strong>{item.user}</strong> published{" "}
          <Link to="/$owner/$slug" params={{ owner: item.skillOwner, slug: item.skillName }}>
            {item.skillName}
          </Link>
        </>
      );
    default:
      return null;
  }
}

export function CommunitySection() {
  return (
    <section className="discovery-community-section">
      <div className="discovery-community-inner">
        <header className="discovery-community-header">
          <h2 className="discovery-community-title">Community Activity</h2>
          <p className="discovery-community-subtitle">
            See what developers are building, sharing, and discovering in real-time.
          </p>
        </header>

        <div className="discovery-activity-feed">
          {SAMPLE_ACTIVITY.map((item) => (
            <div key={item.id} className="discovery-activity-item">
              <div className="discovery-activity-avatar">{item.userInitial}</div>
              <div className="discovery-activity-content">
                <p className="discovery-activity-text">{getActivityText(item)}</p>
                <div className="discovery-activity-meta">
                  {getActivityIcon(item.type)}
                  <span className="discovery-activity-time">{item.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="discovery-community-join">
          <p>Join the community and share your creations</p>
          <div className="discovery-community-actions">
            <Link to="/upload">
              <Button variant="primary">Publish Your Skill</Button>
            </Link>
            <Link
              to="/skills"
              search={{
                q: undefined,
                sort: "newest" as const,
                dir: undefined,
                highlighted: undefined,
                nonSuspicious: true,
                view: undefined,
                focus: undefined,
              }}
            >
              <Button variant="secondary">Explore Latest</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
