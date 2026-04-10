import { createFileRoute, Link } from "@tanstack/react-router";
import { useAction, useQuery } from "convex/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { api } from "../../convex/_generated/api";
import { SkillCard } from "../components/SkillCard";
import { SkillListItem } from "../components/SkillListItem";
import { SkillStatsTripletLine } from "../components/SkillStats";
import { SoulCard } from "../components/SoulCard";
import { SoulStatsTripletLine } from "../components/SoulStats";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { UserBadge } from "../components/UserBadge";
import { convexHttp } from "../convex/client";
import { getSkillBadges } from "../lib/badges";
import { formatCompactStat } from "../lib/numberFormat";
import type { PublicPublisher, PublicSkill, PublicSoul } from "../lib/publicUser";
import { getSiteMode } from "../lib/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const mode = getSiteMode();
  return mode === "souls" ? <OnlyCrabsHome /> : <SkillsHome />;
}

function SkillsHome() {
  type SkillPageEntry = {
    skill: PublicSkill;
    ownerHandle?: string | null;
    owner?: PublicPublisher | null;
    latestVersion?: unknown;
  };

  const [highlighted, setHighlighted] = useState<SkillPageEntry[]>([]);
  const [trending, setTrending] = useState<SkillPageEntry[]>([]);
  const [recent, setRecent] = useState<SkillPageEntry[]>([]);
  const [skillCount, setSkillCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      convexHttp.query(api.skills.listHighlightedPublic, { limit: 6 }),
      convexHttp.query(api.skills.listPublicPageV4, {
        numItems: 8,
        sort: "downloads",
        dir: "desc",
        nonSuspiciousOnly: true,
      }),
      convexHttp.query(api.skills.listPublicPageV4, {
        numItems: 8,
        sort: "updated",
        dir: "desc",
        nonSuspiciousOnly: true,
      }),
      convexHttp.query(api.skills.countPublicSkills, {}),
    ])
      .then(([h, t, r, c]) => {
        if (cancelled) return;
        setHighlighted(h as SkillPageEntry[]);
        setTrending((t as { page: SkillPageEntry[] }).page);
        setRecent((r as { page: SkillPageEntry[] }).page);
        setSkillCount(c as number);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <div className="home-hero-kicker">Editorial App Marketplace</div>
              <h1 className="home-hero-title">
                Discover exceptional apps crafted for the modern creator
              </h1>
              <p className="home-hero-subtitle">
                {skillCount != null
                  ? `Explore ${formatCompactStat(skillCount)} curated apps, plugins, and creative tools. Hand-picked quality, seamless discovery.`
                  : "Explore curated apps, plugins, and creative tools. Hand-picked quality, seamless discovery."}
              </p>
              <div className="home-hero-actions">
                <Button asChild variant="primary">
                  <Link
                    to="/skills"
                    search={{
                      q: undefined,
                      sort: undefined,
                      dir: undefined,
                      highlighted: undefined,
                      nonSuspicious: true,
                      view: undefined,
                      focus: undefined,
                    }}
                  >
                    Explore Apps
                  </Link>
                </Button>
                <Button asChild className="home-hero-publish-btn">
                  <Link
                    to="/publish-skill"
                    search={{ updateSlug: undefined }}
                  >
                    Submit Your App
                  </Link>
                </Button>
              </div>
              <p className="home-hero-explainer">
                A refined marketplace experience where quality meets discovery.
                Browse with intention, find with ease.
              </p>
            </div>

            <div className="home-hero-panels" id="home-discovery">
              <Link
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
                className="home-hero-panel"
              >
                <span className="home-hero-panel-label">Featured</span>
                <strong>Top-Rated Apps</strong>
                <span>Discover the most loved apps by our community of creators.</span>
              </Link>
              <Link to="/plugins" className="home-hero-panel">
                <span className="home-hero-panel-label">Extensions</span>
                <strong>Powerful Plugins</strong>
                <span>Extend your workflow with verified, production-ready plugins.</span>
              </Link>
              <Link to="/users" search={{ q: undefined }} className="home-hero-panel">
                <span className="home-hero-panel-label">Community</span>
                <strong>Meet Creators</strong>
                <span>Connect with the talented developers behind your favorite apps.</span>
              </Link>
              <Link
                to="/souls"
                search={{
                  q: undefined,
                  sort: undefined,
                  dir: undefined,
                  view: undefined,
                  focus: undefined,
                }}
                className="home-hero-panel"
              >
                <span className="home-hero-panel-label">Coming Soon</span>
                <strong>AI Companions</strong>
                <span>Intelligent assistants designed to enhance your creative process.</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending */}
      {trending.length > 0 ? (
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Trending Now</h2>
            <Link
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
              className="home-section-link"
            >
              View All
            </Link>
          </div>
          <div className="results-list">
            {trending.map((entry) => (
              <SkillListItem
                key={entry.skill._id}
                skill={entry.skill}
                ownerHandle={entry.ownerHandle}
                owner={entry.owner}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* Recently updated */}
      {recent.length > 0 ? (
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Fresh Releases</h2>
            <Link
              to="/skills"
              search={{
                q: undefined,
                sort: "updated" as const,
                dir: "desc" as const,
                highlighted: undefined,
                nonSuspicious: true,
                view: undefined,
                focus: undefined,
              }}
              className="home-section-link"
            >
              View All
            </Link>
          </div>
          <div className="results-list">
            {recent.map((entry) => (
              <SkillListItem
                key={entry.skill._id}
                skill={entry.skill}
                ownerHandle={entry.ownerHandle}
                owner={entry.owner}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* Staff picks */}
      {highlighted.length > 0 ? (
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Editor&apos;s Choice</h2>
            <Link
              to="/skills"
              search={{
                q: undefined,
                sort: undefined,
                dir: undefined,
                highlighted: true,
                nonSuspicious: undefined,
                view: undefined,
                focus: undefined,
              }}
              className="home-section-link"
            >
              View All
            </Link>
          </div>
          <div className="grid">
            {
            highlighted.map((entry) => (
              <SkillCard
                key={entry.skill._id}
                skill={entry.skill}
                badge={getSkillBadges(entry.skill)}
                summaryFallback="A fresh skill bundle."
                meta={
                  <div className="skill-card-footer-rows">
                    <UserBadge
                      user={entry.owner}
                      fallbackHandle={entry.ownerHandle ?? null}
                      prefix="by"
                      link={false}
                    />
                    <div className="stat">
                      <SkillStatsTripletLine stats={entry.skill.stats} />
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* Quick links */}
      <section className="home-section">
        <div className="home-quick-links">
          <Link
            to="/skills"
            search={{ q: undefined, sort: "stars" as const, dir: "desc" as const, highlighted: undefined, nonSuspicious: true, view: undefined, focus: undefined }}
            className="home-quick-link"
          >
            Most Popular
          </Link>
          <Link
            to="/skills"
            search={{ q: undefined, sort: "newest" as const, dir: undefined, highlighted: undefined, nonSuspicious: true, view: undefined, focus: undefined }}
            className="home-quick-link"
          >
            New This Week
          </Link>
          <Link to="/plugins" className="home-quick-link">
            All Plugins
          </Link>
          <Link to="/users" search={{ q: undefined }} className="home-quick-link">
            Creators
          </Link>
          <Link
            to="/souls"
            search={{ q: undefined, sort: undefined, dir: undefined, view: undefined, focus: undefined }}
            className="home-quick-link"
          >
            AI Companions
          </Link>
          <Link
            to="/skills"
            search={{ q: undefined, sort: undefined, dir: undefined, highlighted: true, nonSuspicious: undefined, view: undefined, focus: undefined }}
            className="home-quick-link"
          >
            Editor&apos;s Choice
          </Link>
        </div>
      </section>
    </main>
  );
}


function OnlyCrabsHome() {
  const navigate = Route.useNavigate();
  const ensureSoulSeeds = useAction(api.seed.ensureSoulSeeds);
  const latest = (useQuery(api.souls.list, { limit: 12 }) as PublicSoul[]) ?? [];
  const [query, setQuery] = useState("");
  const seedEnsuredRef = useRef(false);
  const trimmedQuery = useMemo(() => query.trim(), [query]);

  useEffect(() => {
    if (seedEnsuredRef.current) return;
    seedEnsuredRef.current = true;
    void ensureSoulSeeds({});
  }, [ensureSoulSeeds]);

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <div className="home-hero-kicker">OnlyCrabs</div>
              <h1 className="home-hero-title">SoulHub, where system lore lives.</h1>
              <p className="home-hero-subtitle">
                Share SOUL.md bundles, version them like docs, and keep personal system lore in one
                public place.
              </p>
              <form
                className="home-hero-search"
                onSubmit={(event) => {
                  event.preventDefault();
                  void navigate({
                    to: "/souls",
                    search: {
                      q: trimmedQuery || undefined,
                      sort: undefined,
                      dir: undefined,
                      view: undefined,
                      focus: undefined,
                    },
                  });
                }}
              >
                <input
                  className="home-hero-search-input"
                  type="text"
                  placeholder="Search souls, prompts, or lore"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">Latest souls</h2>
          <Link
            to="/souls"
            search={{
              q: undefined,
              sort: undefined,
              dir: undefined,
              view: undefined,
              focus: undefined,
            }}
            className="home-section-link"
          >
            See all
          </Link>
        </div>
        <div className="grid">
          {latest.length === 0 ? (
            <Card>No souls yet. Be the first.</Card>
          ) : (
            latest.map((soul) => (
              <SoulCard
                key={soul._id}
                soul={soul}
                summaryFallback="A SOUL.md bundle."
                meta={
                  <div className="stat">
                    <SoulStatsTripletLine stats={soul.stats} />
                  </div>
                }
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
