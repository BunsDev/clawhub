import { createFileRoute, Link } from "@tanstack/react-router";
import { useAction, useQuery } from "convex/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { api } from "../../convex/_generated/api";
import {
  CategoryTiles,
  CommunitySection,
  DiscoveryCard,
  DiscoveryGrid,
  DiscoveryHero,
  DiscoverySection,
  DiscoverySpotlight,
  StatsBar,
  TrendingBar,
} from "../components/discovery";
import { SoulCard } from "../components/SoulCard";
import { SoulStatsTripletLine } from "../components/SoulStats";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { convexHttp } from "../convex/client";
import type { PublicPublisher, PublicSkill, PublicSoul } from "../lib/publicUser";
import { getSiteMode } from "../lib/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const mode = getSiteMode();
  return mode === "souls" ? <OnlyCrabsHome /> : <DiscoveryHome />;
}

function DiscoveryHome() {
  type SkillPageEntry = {
    skill: PublicSkill;
    ownerHandle?: string | null;
    owner?: PublicPublisher | null;
    latestVersion?: unknown;
  };

  const [featured, setFeatured] = useState<SkillPageEntry[]>([]);
  const [trending, setTrending] = useState<SkillPageEntry[]>([]);
  const [recent, setRecent] = useState<SkillPageEntry[]>([]);
  const [staffPicks, setStaffPicks] = useState<SkillPageEntry[]>([]);
  const [skillCount, setSkillCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setLoadError(null);

    Promise.all([
      convexHttp.query(api.skills.listHighlightedPublic, { limit: 8 }).catch(() => []),
      convexHttp.query(api.skills.listPublicPageV4, {
        numItems: 8,
        sort: "downloads",
        dir: "desc",
        nonSuspiciousOnly: true,
      }).catch(() => ({ page: [] })),
      convexHttp.query(api.skills.listPublicPageV4, {
        numItems: 8,
        sort: "updated",
        dir: "desc",
        nonSuspiciousOnly: true,
      }).catch(() => ({ page: [] })),
      convexHttp.query(api.skills.countPublicSkills, {}).catch(() => null),
    ])
      .then(([h, t, r, c]) => {
        if (cancelled) return;
        const highlighted = (h ?? []) as SkillPageEntry[];
        setFeatured(highlighted.slice(0, 4));
        setStaffPicks(highlighted.slice(4, 8));
        setTrending(((t as { page: SkillPageEntry[] })?.page ?? []));
        setRecent(((r as { page: SkillPageEntry[] })?.page ?? []));
        setSkillCount(c as number | null);
        setIsLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setLoadError("Failed to load content. Please try again.");
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Pick the best item for spotlight
  const spotlightItem = featured[0] ?? trending[0];

  // Show loading state
  if (isLoading) {
    return (
      <main>
        <DiscoveryHero skillCount={null} featuredSkills={[]} />
        <section className="discovery-section">
          <div className="discovery-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="discovery-card" style={{ opacity: 0.5, pointerEvents: "none" }}>
                <div className="discovery-card-header">
                  <div className="discovery-card-icon" style={{ background: "var(--surface-muted)" }} />
                  <div className="discovery-card-info">
                    <div style={{ width: "60%", height: 16, background: "var(--surface-muted)", borderRadius: 4 }} />
                    <div style={{ width: "40%", height: 12, background: "var(--surface-muted)", borderRadius: 4, marginTop: 4 }} />
                  </div>
                </div>
                <div style={{ width: "100%", height: 32, background: "var(--surface-muted)", borderRadius: 4 }} />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  // Show error state
  if (loadError) {
    return (
      <main>
        <DiscoveryHero skillCount={null} featuredSkills={[]} />
        <section className="discovery-section">
          <Card className="text-center" style={{ padding: "var(--space-6)" }}>
            <p style={{ color: "var(--ink-soft)", marginBottom: "var(--space-4)" }}>{loadError}</p>
            <Button variant="primary" onClick={() => window.location.reload()}>
              Retry
            </Button>
          </Card>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Discovery Hero with mosaic */}
      <DiscoveryHero skillCount={skillCount} featuredSkills={featured} />

      {/* Trending bar */}
      <DiscoverySection title="" className="discovery-section" linkTo={undefined}>
        <TrendingBar />
      </DiscoverySection>

      {/* Spotlight featured item */}
      {spotlightItem && (
        <DiscoverySection
          title="Featured Pick"
          icon="featured"
          linkTo="/skills"
          linkSearch={{
            q: undefined,
            sort: undefined,
            dir: undefined,
            highlighted: true,
            nonSuspicious: undefined,
            view: undefined,
            focus: undefined,
          }}
          linkLabel="See all picks"
        >
          <DiscoverySpotlight
            skill={spotlightItem.skill}
            ownerHandle={spotlightItem.ownerHandle}
            owner={spotlightItem.owner}
          />
        </DiscoverySection>
      )}

      {/* Trending Section */}
      {trending.length > 0 && (
        <DiscoverySection
          title="Trending Now"
          icon="trending"
          linkTo="/skills"
          linkSearch={{
            q: undefined,
            sort: "downloads" as const,
            dir: "desc" as const,
            highlighted: undefined,
            nonSuspicious: true,
            view: undefined,
            focus: undefined,
          }}
        >
          <DiscoveryGrid>
            {trending.slice(0, 8).map((entry, index) => (
              <DiscoveryCard
                key={entry.skill._id}
                skill={entry.skill}
                ownerHandle={entry.ownerHandle}
                owner={entry.owner}
                badge={index < 2 ? "trending" : null}
              />
            ))}
          </DiscoveryGrid>
        </DiscoverySection>
      )}

      {/* Categories Section */}
      <DiscoverySection
        title="Explore by Category"
        icon="community"
        linkTo="/skills"
        linkSearch={{
          q: undefined,
          sort: undefined,
          dir: undefined,
          highlighted: undefined,
          nonSuspicious: true,
          view: undefined,
          focus: undefined,
        }}
        linkLabel="Browse all"
      >
        <CategoryTiles />
      </DiscoverySection>

      {/* Recently Updated */}
      {recent.length > 0 && (
        <DiscoverySection
          title="Fresh Releases"
          icon="new"
          linkTo="/skills"
          linkSearch={{
            q: undefined,
            sort: "updated" as const,
            dir: "desc" as const,
            highlighted: undefined,
            nonSuspicious: true,
            view: undefined,
            focus: undefined,
          }}
        >
          <DiscoveryGrid>
            {recent.slice(0, 8).map((entry, index) => (
              <DiscoveryCard
                key={entry.skill._id}
                skill={entry.skill}
                ownerHandle={entry.ownerHandle}
                owner={entry.owner}
                badge={index < 3 ? "new" : null}
              />
            ))}
          </DiscoveryGrid>
        </DiscoverySection>
      )}

      {/* Staff Picks */}
      {staffPicks.length > 0 && (
        <DiscoverySection
          title="Staff Picks"
          icon="popular"
          linkTo="/skills"
          linkSearch={{
            q: undefined,
            sort: undefined,
            dir: undefined,
            highlighted: true,
            nonSuspicious: undefined,
            view: undefined,
            focus: undefined,
          }}
        >
          <DiscoveryGrid>
            {staffPicks.slice(0, 8).map((entry) => (
              <DiscoveryCard
                key={entry.skill._id}
                skill={entry.skill}
                ownerHandle={entry.ownerHandle}
                owner={entry.owner}
                badge="staff-pick"
              />
            ))}
          </DiscoveryGrid>
        </DiscoverySection>
      )}

      {/* Stats Banner */}
      <DiscoverySection title="" className="discovery-section" linkTo={undefined}>
        <StatsBar skillCount={skillCount} downloadCount={12500} userCount={850} />
      </DiscoverySection>

      {/* Full-width Community Activity Section */}
      <CommunitySection />

      {/* Community CTA */}
      <DiscoverySection title="" className="discovery-section" linkTo={undefined}>
        <div className="discovery-cta-banner">
          <div className="discovery-cta-content">
            <h3 className="discovery-cta-title">Build something amazing</h3>
            <p className="discovery-cta-desc">
              Share your skills with thousands of developers. Get feedback, collaborate, and grow your audience.
            </p>
          </div>
          <div className="discovery-cta-actions">
            <Link to="/upload" className="discovery-cta-button primary">
              Publish a Skill
            </Link>
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
              className="discovery-cta-button secondary"
            >
              Explore All
            </Link>
          </div>
        </div>
      </DiscoverySection>

      {/* Quick links footer */}
      <section className="discovery-section">
        <div className="home-quick-links">
          <Link
            to="/skills"
            search={{
              q: undefined,
              sort: "stars" as const,
              dir: "desc" as const,
              highlighted: undefined,
              nonSuspicious: true,
              view: undefined,
              focus: undefined,
            }}
            className="home-quick-link"
          >
            Most starred
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
            className="home-quick-link"
          >
            New this week
          </Link>
          <Link to="/plugins" className="home-quick-link">
            Browse plugins
          </Link>
          <Link to="/users" search={{ q: undefined }} className="home-quick-link">
            Browse users
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
            className="home-quick-link"
          >
            Souls coming soon
          </Link>
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
            className="home-quick-link"
          >
            Staff picks
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
