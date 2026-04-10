import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Package, Search, Sparkles, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { MarketplaceIcon } from "../MarketplaceIcon";
import { formatCompactStat } from "../../lib/numberFormat";
import type { PublicPublisher, PublicSkill } from "../../lib/publicUser";

type DiscoveryHeroProps = {
  skillCount?: number | null;
  featuredSkills?: Array<{
    skill: PublicSkill;
    ownerHandle?: string | null;
    owner?: PublicPublisher | null;
  }>;
};

export function DiscoveryHero({ skillCount, featuredSkills = [] }: DiscoveryHeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    void navigate({
      to: "/search",
      search: { q, type: undefined },
    });
  };

  const trendingTags = [
    { label: "AI Agents", query: "ai agents" },
    { label: "Automation", query: "automation" },
    { label: "MCP Tools", query: "mcp tools" },
    { label: "Dev Tools", query: "developer tools" },
    { label: "Workflows", query: "workflow" },
    { label: "LLM", query: "llm" },
  ];

  return (
    <section className="discovery-hero">
      <div className="discovery-hero-inner">
        <div className="discovery-hero-content">
          <div className="discovery-hero-badge">
            <Sparkles aria-hidden="true" />
            Discovery Hub
          </div>
          
          <h1 className="discovery-hero-title">
            Discover <span>powerful tools</span> built by the community
          </h1>
          
          <p className="discovery-hero-subtitle">
            {skillCount != null
              ? `Browse ${formatCompactStat(skillCount)}+ curated skills, plugins, and automation tools. Find hidden gems, get inspired, and build something amazing.`
              : "Browse curated skills, plugins, and automation tools. Find hidden gems, get inspired, and build something amazing."}
          </p>

          <form className="discovery-hero-search" onSubmit={handleSearch}>
            <Search size={18} className="discovery-hero-search-icon" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search skills, plugins, users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search skills and plugins"
            />
            <button type="submit">
              Explore
            </button>
          </form>

          <div className="discovery-hero-tags">
            {trendingTags.map((tag) => (
              <Link
                key={tag.label}
                to="/search"
                search={{ q: tag.query, type: undefined }}
                className="discovery-hero-tag"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="discovery-hero-mosaic">
          {featuredSkills.slice(0, 4).map((entry, index) => {
            const handle = entry.ownerHandle ?? entry.owner?.handle ?? null;
            const ownerSegment = handle?.trim() || String(entry.skill.ownerPublisherId ?? entry.skill.ownerUserId);
            const href = `/${encodeURIComponent(ownerSegment)}/${encodeURIComponent(entry.skill.slug)}`;
            const isFeatured = index === 0;

            return (
              <Link
                key={entry.skill._id}
                to={href}
                className={`discovery-mosaic-card ${isFeatured ? "featured" : ""}`}
              >
                {index === 0 && <span className="discovery-mosaic-badge">Featured</span>}
                {index === 1 && <span className="discovery-mosaic-badge">Trending</span>}
                
                <div className="discovery-mosaic-icon">
                  <MarketplaceIcon kind="skill" label={entry.skill.displayName} size="md" />
                </div>
                
                <div className="discovery-mosaic-body">
                  <h3 className="discovery-mosaic-title">{entry.skill.displayName}</h3>
                  <p className="discovery-mosaic-desc">
                    {entry.skill.summary ?? "A powerful skill bundle."}
                  </p>
                  <div className="discovery-mosaic-meta">
                    <span className="discovery-mosaic-stat">
                      <Star size={14} aria-hidden="true" />
                      {formatCompactStat(entry.skill.stats.stars)}
                    </span>
                    <span className="discovery-mosaic-stat">
                      <Package size={14} aria-hidden="true" />
                      {formatCompactStat(entry.skill.stats.downloads)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Fill remaining slots if we have fewer than 4 skills */}
          {featuredSkills.length < 4 && Array.from({ length: 4 - featuredSkills.length }).map((_, i) => (
            <Link
              key={`placeholder-${i}`}
              to="/skills"
              search={{
                q: undefined,
                sort: "downloads" as const,
                dir: "desc" as const,
                highlighted: undefined,
                nonSuspicious: true,
                view: undefined,
                focus: undefined,
              }}
              className="discovery-mosaic-card"
            >
              <div className="discovery-mosaic-icon">
                <Sparkles size={24} aria-hidden="true" />
              </div>
              <div className="discovery-mosaic-body">
                <h3 className="discovery-mosaic-title">Discover More</h3>
                <p className="discovery-mosaic-desc">
                  Browse the full catalog of skills and plugins
                </p>
                <div className="discovery-mosaic-meta">
                  <span className="discovery-mosaic-stat">
                    <ArrowRight size={14} aria-hidden="true" />
                    Explore all
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
