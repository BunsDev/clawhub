import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star, Download, GitFork, Sparkles, Terminal, Zap } from "lucide-react";
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
  {
    id: "6",
    type: "star",
    user: "code_ninja",
    userInitial: "N",
    skillName: "mcp-connector",
    skillOwner: "dev-tools",
    timeAgo: "45 min ago",
  },
];

function getActivityIcon(type: ActivityItem["type"]) {
  switch (type) {
    case "star":
      return <Star size={12} />;
    case "download":
      return <Download size={12} />;
    case "fork":
      return <GitFork size={12} />;
    case "comment":
      return <MessageCircle size={12} />;
    case "publish":
      return <Sparkles size={12} />;
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
            {item.skillName}
          </Link>
        </>
      );
    case "download":
      return (
        <>
          <strong>{item.user}</strong> downloaded{" "}
          <Link to="/$owner/$slug" params={{ owner: item.skillOwner, slug: item.skillName }}>
            {item.skillName}
          </Link>
        </>
      );
    case "fork":
      return (
        <>
          <strong>{item.user}</strong> forked{" "}
          <Link to="/$owner/$slug" params={{ owner: item.skillOwner, slug: item.skillName }}>
            {item.skillName}
          </Link>
        </>
      );
    case "comment":
      return (
        <>
          <strong>{item.user}</strong> commented on{" "}
          <Link to="/$owner/$slug" params={{ owner: item.skillOwner, slug: item.skillName }}>
            {item.skillName}
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
    <section className="community-section-full">
      <div className="community-section-inner">
        {/* Left: Activity Stream */}
        <div className="community-activity-panel">
          <div className="community-panel-header">
            <Terminal size={16} aria-hidden="true" />
            <span>Live Activity</span>
          </div>
          <div className="community-activity-stream">
            {SAMPLE_ACTIVITY.map((item) => (
              <div key={item.id} className="community-activity-row">
                <span className="community-activity-icon">
                  {getActivityIcon(item.type)}
                </span>
                <span className="community-activity-text">{getActivityText(item)}</span>
                <span className="community-activity-time">{item.timeAgo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Call to Action */}
        <div className="community-cta-panel">
          <div className="community-cta-content">
            <div className="community-cta-icon">
              <Zap size={24} aria-hidden="true" />
            </div>
            <h3 className="community-cta-title">Create & Share</h3>
            <p className="community-cta-desc">
              Join thousands of developers building and sharing tools for the AI ecosystem.
            </p>
            <div className="community-cta-buttons">
              <Link to="/upload" className="community-cta-btn primary">
                <Sparkles size={14} aria-hidden="true" />
                Publish a Skill
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
                className="community-cta-btn secondary"
              >
                Browse All
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
