import { 
  Zap, 
  TrendingUp, 
  Sparkles, 
  Terminal, 
  GitBranch, 
  Package, 
  Code2, 
  Rocket, 
  FlaskConical, 
  Star,
  Download,
  Heart,
  Clock,
  Users,
  Activity,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Check,
  AlertTriangle,
  X,
  ChevronRight,
  Flame,
  Eye
} from "lucide-react";

export function ChaoticStyleGuide() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Header */}
      <header className="border-b border-line bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[var(--page-max)] mx-auto px-space-4 py-space-3 flex items-center justify-between">
          <div className="flex items-center gap-space-3">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent-fg" />
            </div>
            <span className="font-display text-fs-lg font-semibold text-ink">Chaotic Dev Playground</span>
            <span className="px-space-2 py-0.5 bg-[#ff6b35]/15 text-[#ff6b35] text-fs-xs font-mono rounded-sm border border-[#ff6b35]/30">STYLE GUIDE</span>
          </div>
          <nav className="flex items-center gap-space-4">
            <a href="#colors" className="text-ink-soft hover:text-ink text-fs-sm transition-colors">Colors</a>
            <a href="#typography" className="text-ink-soft hover:text-ink text-fs-sm transition-colors">Type</a>
            <a href="#cards" className="text-ink-soft hover:text-ink text-fs-sm transition-colors">Cards</a>
            <a href="#tags" className="text-ink-soft hover:text-ink text-fs-sm transition-colors">Tags</a>
            <a href="#interactions" className="text-ink-soft hover:text-ink text-fs-sm transition-colors">Motion</a>
          </nav>
        </div>
      </header>

      <main className="max-w-[var(--page-max)] mx-auto px-space-4 py-space-6">
        {/* Philosophy Section */}
        <section className="mb-space-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-6">
            <div>
              <h1 className="font-display text-fs-3xl font-bold text-ink mb-space-3 leading-tight">
                Visual Style Guide
              </h1>
              <p className="text-ink-soft text-fs-md leading-relaxed mb-space-4">
                A design system for experimental developer ecosystems. Inspired by Hugging Face, 
                old-school Product Hunt, and fast-moving AI communities. Dense, energetic, builder-centric.
              </p>
              <div className="flex flex-wrap gap-space-2">
                <PrincipleBadge icon={<Activity className="w-3.5 h-3.5" />} label="Lively over pristine" />
                <PrincipleBadge icon={<Eye className="w-3.5 h-3.5" />} label="Dense but navigable" />
                <PrincipleBadge icon={<FlaskConical className="w-3.5 h-3.5" />} label="Experimental" />
                <PrincipleBadge icon={<Users className="w-3.5 h-3.5" />} label="Community-driven" />
                <PrincipleBadge icon={<Zap className="w-3.5 h-3.5" />} label="Controlled chaos" />
              </div>
            </div>
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h3 className="font-display text-fs-sm font-semibold text-ink mb-space-3 flex items-center gap-space-2">
                <Terminal className="w-4 h-4 text-ink-soft" />
                Design Philosophy
              </h3>
              <div className="space-y-space-2 text-fs-sm text-ink-soft font-mono">
                <p className="border-l-2 border-[#22c55e] pl-space-3 text-[#22c55e]">// Active, exploratory, hacker-friendly</p>
                <p className="border-l-2 border-[#3b82f6] pl-space-3 text-[#3b82f6]">// High-signal, high-energy</p>
                <p className="border-l-2 border-[#f59e0b] pl-space-3 text-[#f59e0b]">// Community ecosystem over storefront polish</p>
                <p className="border-l-2 border-[#ec4899] pl-space-3 text-[#ec4899]">// Controlled chaos, not careless</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section id="colors" className="mb-space-8">
          <SectionHeader 
            title="Color System" 
            subtitle="Neutral base with bright accents. Functional, not decorative."
            icon={<Sparkles className="w-5 h-5" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-4">
            {/* Core Palette */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Core Palette</h4>
              <div className="space-y-space-2">
                <ColorSwatch name="Background" value="#0a0a0a" className="bg-bg" />
                <ColorSwatch name="Surface" value="#141414" className="bg-surface" />
                <ColorSwatch name="Surface Muted" value="#1a1a1a" className="bg-surface-muted" />
                <ColorSwatch name="Ink" value="#e0e0e0" className="bg-ink" />
                <ColorSwatch name="Ink Soft" value="#818181" className="bg-ink-soft" />
              </div>
            </div>

            {/* Accent Colors */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Accent Colors</h4>
              <div className="space-y-space-2">
                <ColorSwatch name="Primary" value="#ffffff" className="bg-accent" />
                <ColorSwatch name="Hot" value="#ff6b35" className="bg-[#ff6b35]" />
                <ColorSwatch name="Electric" value="#3b82f6" className="bg-[#3b82f6]" />
                <ColorSwatch name="Lime" value="#22c55e" className="bg-[#22c55e]" />
                <ColorSwatch name="Amber" value="#f59e0b" className="bg-[#f59e0b]" />
              </div>
            </div>

            {/* Tag Colors */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Tag Palette</h4>
              <div className="space-y-space-2">
                <ColorSwatch name="AI/ML" value="#8b5cf6" className="bg-[#8b5cf6]" />
                <ColorSwatch name="Tools" value="#06b6d4" className="bg-[#06b6d4]" />
                <ColorSwatch name="Experimental" value="#ec4899" className="bg-[#ec4899]" />
                <ColorSwatch name="Community" value="#10b981" className="bg-[#10b981]" />
                <ColorSwatch name="Trending" value="#ef4444" className="bg-[#ef4444]" />
              </div>
            </div>
          </div>

          {/* Status Colors */}
          <div className="mt-space-4 bg-surface border border-line rounded-md p-space-4">
            <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Status Indicators</h4>
            <div className="flex flex-wrap gap-space-3">
              <StatusIndicator type="success" label="Success / Active" />
              <StatusIndicator type="warning" label="Warning / Beta" />
              <StatusIndicator type="error" label="Error / Breaking" />
              <StatusIndicator type="info" label="Info / New" />
            </div>
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="mb-space-8">
          <SectionHeader 
            title="Typography" 
            subtitle="Internet-native, crisp, functional. Slightly nerdy, high-clarity."
            icon={<Code2 className="w-5 h-5" />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-4">
            {/* Type Scale */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-4">Type Scale</h4>
              <div className="space-y-space-4">
                <TypeSample size="fs-3xl" label="3XL / 2rem" sample="Dense Discovery" />
                <TypeSample size="fs-2xl" label="2XL / 1.5rem" sample="Trending Now" />
                <TypeSample size="fs-xl" label="XL / 1.25rem" sample="Category Header" />
                <TypeSample size="fs-lg" label="LG / 1.1rem" sample="Card Title" />
                <TypeSample size="fs-md" label="MD / 1rem" sample="Body Text Default" />
                <TypeSample size="fs-base" label="Base / 0.88rem" sample="Description text that explains tools" />
                <TypeSample size="fs-sm" label="SM / 0.82rem" sample="Metadata, timestamps, counts" />
                <TypeSample size="fs-xs" label="XS / 0.72rem" sample="BADGE · TAG · LABEL" />
              </div>
            </div>

            {/* Font Families */}
            <div className="space-y-space-4">
              <div className="bg-surface border border-line rounded-md p-space-4">
                <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Font Families</h4>
                <div className="space-y-space-4">
                  <div>
                    <span className="text-fs-xs text-ink-soft font-mono block mb-space-1">--font-display</span>
                    <p className="font-display text-fs-lg text-ink">IBM Plex Mono</p>
                    <p className="text-fs-sm text-ink-soft">Headlines, navigation, emphasis</p>
                  </div>
                  <div className="border-t border-line pt-space-4">
                    <span className="text-fs-xs text-ink-soft font-mono block mb-space-1">--font-body</span>
                    <p className="font-body text-fs-lg text-ink">IBM Plex Mono</p>
                    <p className="text-fs-sm text-ink-soft">Body text, descriptions, content</p>
                  </div>
                  <div className="border-t border-line pt-space-4">
                    <span className="text-fs-xs text-ink-soft font-mono block mb-space-1">--font-mono</span>
                    <p className="font-mono text-fs-lg text-ink">IBM Plex Mono</p>
                    <p className="text-fs-sm text-ink-soft">Code, metadata, badges</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-line rounded-md p-space-4">
                <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Hierarchy Rules</h4>
                <ul className="space-y-space-2 text-fs-sm text-ink-soft">
                  <li className="flex items-start gap-space-2">
                    <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    <span>Strong browse labels with clear contrast</span>
                  </li>
                  <li className="flex items-start gap-space-2">
                    <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    <span>Visible metadata hierarchy in cards</span>
                  </li>
                  <li className="flex items-start gap-space-2">
                    <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    <span>Concise descriptions, no walls of text</span>
                  </li>
                  <li className="flex items-start gap-space-2">
                    <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    <span>Tags always visible and scannable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tags & Badges */}
        <section id="tags" className="mb-space-8">
          <SectionHeader 
            title="Tags & Badges" 
            subtitle="Abundant, clickable, ecosystem-native. Fast navigation into rabbit holes."
            icon={<Filter className="w-5 h-5" />}
          />

          <div className="space-y-space-4">
            {/* Category Tags */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Category Tags</h4>
              <div className="flex flex-wrap gap-space-2">
                <CategoryTag label="AI/ML" color="purple" count={2847} />
                <CategoryTag label="Developer Tools" color="cyan" count={1923} />
                <CategoryTag label="CLI" color="green" count={892} />
                <CategoryTag label="APIs" color="blue" count={1456} />
                <CategoryTag label="Databases" color="amber" count={634} />
                <CategoryTag label="Security" color="red" count={421} />
                <CategoryTag label="Infrastructure" color="slate" count={788} />
                <CategoryTag label="Frontend" color="pink" count={1102} />
              </div>
            </div>

            {/* Status Tags */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Status & Activity Tags</h4>
              <div className="flex flex-wrap gap-space-2">
                <StatusTag icon={<Flame className="w-3 h-3" />} label="Trending" variant="hot" />
                <StatusTag icon={<Sparkles className="w-3 h-3" />} label="New" variant="new" />
                <StatusTag icon={<FlaskConical className="w-3 h-3" />} label="Experimental" variant="experimental" />
                <StatusTag icon={<Check className="w-3 h-3" />} label="Verified" variant="verified" />
                <StatusTag icon={<Star className="w-3 h-3" />} label="Featured" variant="featured" />
                <StatusTag icon={<AlertTriangle className="w-3 h-3" />} label="Beta" variant="beta" />
                <StatusTag icon={<GitBranch className="w-3 h-3" />} label="Fork" variant="fork" />
                <StatusTag icon={<Clock className="w-3 h-3" />} label="Updated" variant="updated" />
              </div>
            </div>

            {/* Compact Pills */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Compact Pills</h4>
              <div className="flex flex-wrap gap-space-2">
                <CompactPill label="typescript" />
                <CompactPill label="rust" />
                <CompactPill label="python" />
                <CompactPill label="go" />
                <CompactPill label="javascript" />
                <CompactPill label="llm" />
                <CompactPill label="rag" />
                <CompactPill label="vector-db" />
                <CompactPill label="embeddings" />
                <CompactPill label="fine-tuning" />
                <CompactPill label="inference" />
                <CompactPill label="agents" />
              </div>
            </div>
          </div>
        </section>

        {/* Card System */}
        <section id="cards" className="mb-space-8">
          <SectionHeader 
            title="Card System" 
            subtitle="Dense, metadata-rich, quick recognition. Lots of interesting stuff to inspect."
            icon={<Package className="w-5 h-5" />}
          />

          <div className="space-y-space-6">
            {/* Standard Cards */}
            <div>
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3 flex items-center gap-space-2">
                <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                Standard Discovery Cards
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-3">
                <ToolCard 
                  name="vector-forge"
                  description="High-performance vector similarity search with HNSW indexing"
                  icon={<Package className="w-5 h-5" />}
                  tags={["rust", "embeddings", "search"]}
                  stars={2341}
                  downloads="45.2k"
                  status="trending"
                />
                <ToolCard 
                  name="prompt-lab"
                  description="Interactive prompt engineering playground with version control"
                  icon={<Terminal className="w-5 h-5" />}
                  tags={["llm", "prompts", "testing"]}
                  stars={1892}
                  downloads="28.1k"
                  status="new"
                />
                <ToolCard 
                  name="model-zoo"
                  description="Curated collection of pre-trained models with one-line imports"
                  icon={<FlaskConical className="w-5 h-5" />}
                  tags={["ml", "models", "inference"]}
                  stars={3420}
                  downloads="89.3k"
                  status="verified"
                />
              </div>
            </div>

            {/* Compact Cards */}
            <div>
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3 flex items-center gap-space-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                Compact Result Cards
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-2">
                <CompactCard 
                  name="tiny-llm"
                  description="Lightweight LLM inference for edge devices"
                  downloads="12.4k"
                  updated="2h ago"
                />
                <CompactCard 
                  name="data-pipe"
                  description="Stream processing for ML pipelines"
                  downloads="8.9k"
                  updated="5h ago"
                />
                <CompactCard 
                  name="cache-storm"
                  description="Distributed caching with smart invalidation"
                  downloads="15.2k"
                  updated="1d ago"
                />
                <CompactCard 
                  name="auth-kit"
                  description="Drop-in authentication for any framework"
                  downloads="32.1k"
                  updated="3h ago"
                />
              </div>
            </div>

            {/* Trending Card */}
            <div>
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3 flex items-center gap-space-2">
                <span className="w-2 h-2 rounded-full bg-[#ff6b35]" />
                Trending / Highlighted Cards
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-4">
                <TrendingCard 
                  name="neural-search"
                  description="Semantic search infrastructure that combines dense and sparse retrieval methods for production-grade search systems"
                  tags={["search", "nlp", "production"]}
                  stars={8234}
                  downloads="234.5k"
                  growth="+42%"
                  creator="openai-labs"
                />
                <TrendingCard 
                  name="agent-runtime"
                  description="Universal runtime for AI agents with built-in tool calling, memory management, and multi-step reasoning"
                  tags={["agents", "llm", "autonomous"]}
                  stars={6891}
                  downloads="156.2k"
                  growth="+89%"
                  creator="autonomy-collective"
                />
              </div>
            </div>

            {/* Experimental Card */}
            <div>
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3 flex items-center gap-space-2">
                <span className="w-2 h-2 rounded-full bg-[#ec4899]" />
                Experimental / Niche Cards
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-3">
                <ExperimentalCard 
                  name="quantum-sim"
                  description="Quantum circuit simulator in pure JS"
                  category="Quantum Computing"
                  status="Alpha"
                />
                <ExperimentalCard 
                  name="neuro-morph"
                  description="Neuromorphic computing primitives"
                  category="Bio-Inspired"
                  status="Research"
                />
                <ExperimentalCard 
                  name="zkml-core"
                  description="Zero-knowledge proofs for ML inference"
                  category="Cryptography"
                  status="WIP"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search UI */}
        <section className="mb-space-8">
          <SectionHeader 
            title="Search Experience" 
            subtitle="Primary mode, not supporting feature. Fast, exploratory, gateway to ecosystem."
            icon={<Search className="w-5 h-5" />}
          />

          <div className="space-y-space-4">
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Search Bar Variants</h4>
              <div className="space-y-space-4">
                {/* Default Search */}
                <div>
                  <span className="text-fs-xs text-ink-soft mb-space-2 block">Default</span>
                  <SearchBar placeholder="Search tools, models, datasets..." />
                </div>
                {/* Focused Search */}
                <div>
                  <span className="text-fs-xs text-ink-soft mb-space-2 block">With Suggestions</span>
                  <SearchBarWithSuggestions />
                </div>
              </div>
            </div>

            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Quick Filters</h4>
              <div className="flex flex-wrap gap-space-2">
                <QuickFilter label="All" active />
                <QuickFilter label="Tools" count={2341} />
                <QuickFilter label="Models" count={892} />
                <QuickFilter label="Datasets" count={456} />
                <QuickFilter label="Spaces" count={234} />
                <QuickFilter label="Papers" count={1203} />
              </div>
            </div>
          </div>
        </section>

        {/* Interaction States */}
        <section id="interactions" className="mb-space-8">
          <SectionHeader 
            title="Motion & Interaction" 
            subtitle="Quick, light, responsive. Fast hover feedback, instant transitions."
            icon={<Zap className="w-5 h-5" />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-4">
            {/* Button States */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-4">Button States</h4>
              <div className="space-y-space-4">
                <div>
                  <span className="text-fs-xs text-ink-soft mb-space-2 block">Primary Actions</span>
                  <div className="flex flex-wrap gap-space-2">
                    <Button variant="primary">Install</Button>
                    <Button variant="primary" icon={<Download className="w-4 h-4" />}>Download</Button>
                    <Button variant="primary" icon={<Rocket className="w-4 h-4" />}>Deploy</Button>
                  </div>
                </div>
                <div>
                  <span className="text-fs-xs text-ink-soft mb-space-2 block">Secondary Actions</span>
                  <div className="flex flex-wrap gap-space-2">
                    <Button variant="secondary">View Source</Button>
                    <Button variant="secondary" icon={<Star className="w-4 h-4" />}>Star</Button>
                    <Button variant="secondary" icon={<GitBranch className="w-4 h-4" />}>Fork</Button>
                  </div>
                </div>
                <div>
                  <span className="text-fs-xs text-ink-soft mb-space-2 block">Ghost Actions</span>
                  <div className="flex flex-wrap gap-space-2">
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="ghost" icon={<Heart className="w-4 h-4" />}>Like</Button>
                    <Button variant="ghost" icon={<ExternalLink className="w-4 h-4" />}>Docs</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover States */}
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-4">Hover Feedback</h4>
              <div className="space-y-space-3">
                <HoverDemo label="Card Hover" description="Border brightens, subtle lift" />
                <HoverDemo label="Link Hover" description="Color shift, underline appears" />
                <HoverDemo label="Tag Hover" description="Background intensifies" />
                <HoverDemo label="Button Hover" description="Background shifts, cursor pointer" />
              </div>
              <div className="mt-space-4 p-space-3 bg-bg rounded-sm border border-line">
                <code className="text-fs-xs font-mono text-ink-soft">
                  transition: all 120ms ease-out;
                </code>
              </div>
            </div>
          </div>

          {/* Motion Principles */}
          <div className="mt-space-4 bg-surface border border-line rounded-md p-space-4">
            <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Motion Principles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-4">
              <MotionPrinciple 
                title="Fast" 
                description="120-200ms transitions. Never slow or cinematic."
                icon={<Zap className="w-4 h-4" />}
              />
              <MotionPrinciple 
                title="Responsive" 
                description="Immediate feedback on interaction. No delays."
                icon={<Activity className="w-4 h-4" />}
              />
              <MotionPrinciple 
                title="Minimal" 
                description="Purpose-driven motion only. No decoration."
                icon={<Check className="w-4 h-4" />}
              />
              <MotionPrinciple 
                title="Consistent" 
                description="Same easing and timing across all components."
                icon={<GitBranch className="w-4 h-4" />}
              />
            </div>
          </div>
        </section>

        {/* Spacing & Density */}
        <section className="mb-space-8">
          <SectionHeader 
            title="Spacing & Density" 
            subtitle="Tighter spacing, more content above fold. Dense but hierarchical."
            icon={<Activity className="w-5 h-5" />}
          />

          <div className="bg-surface border border-line rounded-md p-space-4">
            <h4 className="text-fs-sm font-semibold text-ink mb-space-4">Spacing Scale</h4>
            <div className="space-y-space-3">
              <SpacingSample name="space-1" value="4px" />
              <SpacingSample name="space-2" value="8px" />
              <SpacingSample name="space-3" value="12px" />
              <SpacingSample name="space-4" value="16px" />
              <SpacingSample name="space-5" value="24px" />
              <SpacingSample name="space-6" value="32px" />
              <SpacingSample name="space-7" value="48px" />
              <SpacingSample name="space-8" value="64px" />
            </div>
          </div>

          <div className="mt-space-4 grid grid-cols-1 md:grid-cols-2 gap-space-4">
            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Border Radius</h4>
              <div className="flex flex-wrap gap-space-4">
                <RadiusSample name="sm" value="1px" />
                <RadiusSample name="md" value="2px" />
                <RadiusSample name="lg" value="2px" />
                <RadiusSample name="pill" value="1px" />
              </div>
              <p className="mt-space-3 text-fs-xs text-ink-soft">
                Sharp, minimal radii. TUI-inspired aesthetic.
              </p>
            </div>

            <div className="bg-surface border border-line rounded-md p-space-4">
              <h4 className="text-fs-sm font-semibold text-ink mb-space-3">Density Rules</h4>
              <ul className="space-y-space-2 text-fs-sm text-ink-soft">
                <li className="flex items-center gap-space-2">
                  <ChevronRight className="w-3 h-3 text-[#22c55e]" />
                  More content above the fold
                </li>
                <li className="flex items-center gap-space-2">
                  <ChevronRight className="w-3 h-3 text-[#22c55e]" />
                  Strong visual grouping
                </li>
                <li className="flex items-center gap-space-2">
                  <ChevronRight className="w-3 h-3 text-[#22c55e]" />
                  Tags and categories feel plentiful
                </li>
                <li className="flex items-center gap-space-2">
                  <ChevronRight className="w-3 h-3 text-[#22c55e]" />
                  Energetic without clutter
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-Patterns */}
        <section className="mb-space-8">
          <SectionHeader 
            title="What to Avoid" 
            subtitle="Controlled chaos, not careless clutter."
            icon={<X className="w-5 h-5" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-3">
            <AntiPattern 
              title="Too Many Badges" 
              description="Cards with 8 equally weighted metadata elements"
            />
            <AntiPattern 
              title="Tag Soup" 
              description="Unstructured, unorganized tag clusters"
            />
            <AntiPattern 
              title="No Hierarchy" 
              description="Everything equally loud, nothing stands out"
            />
            <AntiPattern 
              title="Enterprise Gray" 
              description="Dashboard aesthetics, corporate blandness"
            />
            <AntiPattern 
              title="Luxury Polish" 
              description="Glass effects, cinematic transitions"
            />
            <AntiPattern 
              title="Gamer UI" 
              description="Neon overload, aggressive styling"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-line pt-space-6 mt-space-8">
          <div className="flex items-center justify-between text-fs-sm text-ink-soft">
            <span>Chaotic Dev Playground Style Guide v1.0</span>
            <span className="flex items-center gap-space-2">
              <span>Built for builders</span>
              <Zap className="w-4 h-4 text-[#ff6b35]" />
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Helper Components

function SectionHeader({ title, subtitle, icon }: { title: string; subtitle: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-space-3 mb-space-4">
      <div className="w-8 h-8 bg-surface-muted border border-line rounded-sm flex items-center justify-center text-ink-soft">
        {icon}
      </div>
      <div>
        <h2 className="font-display text-fs-xl font-semibold text-ink">{title}</h2>
        <p className="text-fs-sm text-ink-soft">{subtitle}</p>
      </div>
    </div>
  );
}

function PrincipleBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-space-1 px-space-2 py-space-1 bg-surface border border-line rounded-sm text-fs-xs text-ink-soft">
      {icon}
      {label}
    </span>
  );
}

function ColorSwatch({ name, value, className }: { name: string; value: string; className: string }) {
  return (
    <div className="flex items-center gap-space-3">
      <div className={`w-8 h-8 rounded-sm border border-line ${className}`} />
      <div>
        <span className="text-fs-sm text-ink block">{name}</span>
        <span className="text-fs-xs font-mono text-ink-soft">{value}</span>
      </div>
    </div>
  );
}

function StatusIndicator({ type, label }: { type: "success" | "warning" | "error" | "info"; label: string }) {
  const colors = {
    success: "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/30",
    warning: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30",
    error: "bg-[#ef4444]/15 text-[#ef4444] border-[#ef4444]/30",
    info: "bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/30",
  };

  const icons = {
    success: <Check className="w-3.5 h-3.5" />,
    warning: <AlertTriangle className="w-3.5 h-3.5" />,
    error: <X className="w-3.5 h-3.5" />,
    info: <Sparkles className="w-3.5 h-3.5" />,
  };

  return (
    <span className={`inline-flex items-center gap-space-1 px-space-2 py-space-1 rounded-sm border text-fs-xs ${colors[type]}`}>
      {icons[type]}
      {label}
    </span>
  );
}

function TypeSample({ size, label, sample }: { size: string; label: string; sample: string }) {
  return (
    <div className="flex items-baseline gap-space-4">
      <span className="text-fs-xs font-mono text-ink-soft w-28 shrink-0">{label}</span>
      <span className={`text-${size} text-ink font-display`}>{sample}</span>
    </div>
  );
}

function CategoryTag({ label, color, count }: { label: string; color: string; count: number }) {
  const colors: Record<string, string> = {
    purple: "bg-[#8b5cf6]/15 text-[#8b5cf6] border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/25",
    cyan: "bg-[#06b6d4]/15 text-[#06b6d4] border-[#06b6d4]/30 hover:bg-[#06b6d4]/25",
    green: "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/30 hover:bg-[#22c55e]/25",
    blue: "bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/30 hover:bg-[#3b82f6]/25",
    amber: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30 hover:bg-[#f59e0b]/25",
    red: "bg-[#ef4444]/15 text-[#ef4444] border-[#ef4444]/30 hover:bg-[#ef4444]/25",
    slate: "bg-[#64748b]/15 text-[#64748b] border-[#64748b]/30 hover:bg-[#64748b]/25",
    pink: "bg-[#ec4899]/15 text-[#ec4899] border-[#ec4899]/30 hover:bg-[#ec4899]/25",
  };

  return (
    <button className={`inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-sm border text-fs-sm transition-colors cursor-pointer ${colors[color]}`}>
      {label}
      <span className="text-fs-xs opacity-70">({count.toLocaleString()})</span>
    </button>
  );
}

function StatusTag({ icon, label, variant }: { icon: React.ReactNode; label: string; variant: string }) {
  const variants: Record<string, string> = {
    hot: "bg-[#ff6b35]/15 text-[#ff6b35] border-[#ff6b35]/30",
    new: "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/30",
    experimental: "bg-[#ec4899]/15 text-[#ec4899] border-[#ec4899]/30",
    verified: "bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/30",
    featured: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30",
    beta: "bg-[#8b5cf6]/15 text-[#8b5cf6] border-[#8b5cf6]/30",
    fork: "bg-[#64748b]/15 text-[#64748b] border-[#64748b]/30",
    updated: "bg-[#06b6d4]/15 text-[#06b6d4] border-[#06b6d4]/30",
  };

  return (
    <span className={`inline-flex items-center gap-space-1 px-space-2 py-0.5 rounded-sm border text-fs-xs ${variants[variant]}`}>
      {icon}
      {label}
    </span>
  );
}

function CompactPill({ label }: { label: string }) {
  return (
    <span className="px-space-2 py-0.5 bg-surface-muted border border-line rounded-sm text-fs-xs text-ink-soft hover:text-ink hover:border-border-ui-hover transition-colors cursor-pointer">
      {label}
    </span>
  );
}

function ToolCard({ 
  name, 
  description, 
  icon, 
  tags, 
  stars, 
  downloads, 
  status 
}: { 
  name: string; 
  description: string; 
  icon: React.ReactNode; 
  tags: string[]; 
  stars: number; 
  downloads: string; 
  status: "trending" | "new" | "verified";
}) {
  const statusConfig = {
    trending: { icon: <Flame className="w-3 h-3" />, color: "text-[#ff6b35]", label: "Trending" },
    new: { icon: <Sparkles className="w-3 h-3" />, color: "text-[#22c55e]", label: "New" },
    verified: { icon: <Check className="w-3 h-3" />, color: "text-[#3b82f6]", label: "Verified" },
  };

  return (
    <div className="bg-surface border border-line rounded-sm p-space-3 hover:border-border-ui-hover transition-colors cursor-pointer group">
      <div className="flex items-start gap-space-3 mb-space-2">
        <div className="w-10 h-10 bg-bg border border-line rounded-sm flex items-center justify-center text-ink-soft group-hover:text-ink transition-colors">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-space-2 mb-space-1">
            <h3 className="font-display text-fs-base font-medium text-ink truncate">{name}</h3>
            <span className={`flex items-center gap-0.5 text-fs-xs ${statusConfig[status].color}`}>
              {statusConfig[status].icon}
            </span>
          </div>
          <p className="text-fs-sm text-ink-soft line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-space-2 mb-space-2">
        {tags.map((tag) => (
          <span key={tag} className="px-space-1 py-0.5 bg-surface-muted rounded-sm text-fs-xs text-ink-soft">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-space-3 text-fs-xs text-ink-soft">
        <span className="flex items-center gap-space-1">
          <Star className="w-3 h-3" />
          {stars.toLocaleString()}
        </span>
        <span className="flex items-center gap-space-1">
          <Download className="w-3 h-3" />
          {downloads}
        </span>
      </div>
    </div>
  );
}

function CompactCard({ name, description, downloads, updated }: { name: string; description: string; downloads: string; updated: string }) {
  return (
    <div className="flex items-center gap-space-3 bg-surface border border-line rounded-sm p-space-2 hover:border-border-ui-hover transition-colors cursor-pointer">
      <div className="w-8 h-8 bg-bg border border-line rounded-sm flex items-center justify-center text-ink-soft">
        <Package className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-fs-sm font-medium text-ink truncate">{name}</h4>
        <p className="text-fs-xs text-ink-soft truncate">{description}</p>
      </div>
      <div className="text-right shrink-0">
        <span className="text-fs-xs text-ink-soft block">{downloads}</span>
        <span className="text-fs-xs text-ink-soft opacity-70">{updated}</span>
      </div>
    </div>
  );
}

function TrendingCard({ 
  name, 
  description, 
  tags, 
  stars, 
  downloads, 
  growth, 
  creator 
}: { 
  name: string; 
  description: string; 
  tags: string[]; 
  stars: number; 
  downloads: string; 
  growth: string; 
  creator: string;
}) {
  return (
    <div className="bg-surface border border-[#ff6b35]/30 rounded-sm p-space-4 hover:border-[#ff6b35]/50 transition-colors cursor-pointer relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ff6b35]/10 to-transparent" />
      <div className="relative">
        <div className="flex items-start justify-between mb-space-2">
          <div className="flex items-center gap-space-2">
            <div className="w-10 h-10 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-sm flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#ff6b35]" />
            </div>
            <div>
              <h3 className="font-display text-fs-lg font-medium text-ink">{name}</h3>
              <span className="text-fs-xs text-ink-soft">by {creator}</span>
            </div>
          </div>
          <span className="px-space-2 py-0.5 bg-[#ff6b35]/15 text-[#ff6b35] rounded-sm text-fs-xs font-mono">
            {growth}
          </span>
        </div>
        <p className="text-fs-sm text-ink-soft mb-space-3">{description}</p>
        <div className="flex items-center gap-space-2 mb-space-3">
          {tags.map((tag) => (
            <span key={tag} className="px-space-2 py-0.5 bg-surface-muted border border-line rounded-sm text-fs-xs text-ink-soft">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-space-4 text-fs-sm text-ink-soft">
          <span className="flex items-center gap-space-1">
            <Star className="w-3.5 h-3.5" />
            {stars.toLocaleString()}
          </span>
          <span className="flex items-center gap-space-1">
            <Download className="w-3.5 h-3.5" />
            {downloads}
          </span>
        </div>
      </div>
    </div>
  );
}

function ExperimentalCard({ name, description, category, status }: { name: string; description: string; category: string; status: string }) {
  return (
    <div className="bg-surface border border-[#ec4899]/30 border-dashed rounded-sm p-space-3 hover:border-[#ec4899]/50 transition-colors cursor-pointer">
      <div className="flex items-center gap-space-2 mb-space-2">
        <FlaskConical className="w-4 h-4 text-[#ec4899]" />
        <span className="px-space-1 py-0.5 bg-[#ec4899]/15 text-[#ec4899] rounded-sm text-fs-xs">{status}</span>
      </div>
      <h3 className="font-display text-fs-base font-medium text-ink mb-space-1">{name}</h3>
      <p className="text-fs-sm text-ink-soft mb-space-2">{description}</p>
      <span className="text-fs-xs text-[#ec4899]">{category}</span>
    </div>
  );
}

function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <Search className="absolute left-space-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft" />
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full bg-bg border border-line rounded-sm py-space-2 pl-10 pr-space-3 text-fs-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-border-ui-active"
      />
      <div className="absolute right-space-3 top-1/2 -translate-y-1/2 flex items-center gap-space-1">
        <kbd className="px-space-1 py-0.5 bg-surface-muted rounded-sm text-fs-xs text-ink-soft border border-line">/</kbd>
      </div>
    </div>
  );
}

function SearchBarWithSuggestions() {
  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-space-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft" />
        <input 
          type="text" 
          placeholder="Search tools, models, datasets..."
          defaultValue="vector"
          className="w-full bg-bg border border-border-ui-active rounded-sm py-space-2 pl-10 pr-space-3 text-fs-sm text-ink placeholder:text-ink-soft focus:outline-none"
        />
      </div>
      <div className="absolute top-full left-0 right-0 mt-space-1 bg-surface border border-line rounded-sm shadow-dialog overflow-hidden z-10">
        <div className="p-space-2 border-b border-line">
          <span className="text-fs-xs text-ink-soft">Trending searches</span>
        </div>
        <div className="p-space-1">
          <SuggestionItem label="vector-db" type="Tool" />
          <SuggestionItem label="vector embeddings" type="Topic" />
          <SuggestionItem label="vector-forge" type="Tool" hot />
          <SuggestionItem label="vector similarity search" type="Topic" />
        </div>
      </div>
    </div>
  );
}

function SuggestionItem({ label, type, hot }: { label: string; type: string; hot?: boolean }) {
  return (
    <div className="flex items-center justify-between px-space-2 py-space-1 rounded-sm hover:bg-hover-bg cursor-pointer">
      <div className="flex items-center gap-space-2">
        <Search className="w-3 h-3 text-ink-soft" />
        <span className="text-fs-sm text-ink">{label}</span>
        {hot && <Flame className="w-3 h-3 text-[#ff6b35]" />}
      </div>
      <span className="text-fs-xs text-ink-soft">{type}</span>
    </div>
  );
}

function QuickFilter({ label, count, active }: { label: string; count?: number; active?: boolean }) {
  return (
    <button 
      className={`px-space-3 py-space-1 rounded-sm text-fs-sm transition-colors cursor-pointer ${
        active 
          ? "bg-accent text-accent-fg" 
          : "bg-surface-muted border border-line text-ink-soft hover:text-ink hover:border-border-ui-hover"
      }`}
    >
      {label}
      {count && <span className="ml-space-1 opacity-70">{count}</span>}
    </button>
  );
}

function Button({ 
  children, 
  variant, 
  icon 
}: { 
  children: React.ReactNode; 
  variant: "primary" | "secondary" | "ghost"; 
  icon?: React.ReactNode;
}) {
  const variants = {
    primary: "bg-accent text-accent-fg hover:bg-accent-deep",
    secondary: "bg-surface border border-line text-ink hover:border-border-ui-hover hover:bg-hover-bg",
    ghost: "text-ink-soft hover:text-ink hover:bg-hover-bg",
  };

  return (
    <button className={`inline-flex items-center gap-space-1 px-space-3 py-space-1 rounded-sm text-fs-sm transition-all cursor-pointer ${variants[variant]}`}>
      {icon}
      {children}
    </button>
  );
}

function HoverDemo({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex items-center justify-between p-space-2 bg-bg rounded-sm border border-line hover:border-border-ui-hover hover:bg-hover-bg transition-all cursor-pointer group">
      <span className="text-fs-sm text-ink group-hover:text-accent transition-colors">{label}</span>
      <span className="text-fs-xs text-ink-soft">{description}</span>
    </div>
  );
}

function MotionPrinciple({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 mx-auto mb-space-2 bg-surface-muted border border-line rounded-sm flex items-center justify-center text-ink-soft">
        {icon}
      </div>
      <h5 className="font-display text-fs-sm font-medium text-ink mb-space-1">{title}</h5>
      <p className="text-fs-xs text-ink-soft">{description}</p>
    </div>
  );
}

function SpacingSample({ name, value }: { name: string; value: string }) {
  const widths: Record<string, string> = {
    "space-1": "w-1",
    "space-2": "w-2",
    "space-3": "w-3",
    "space-4": "w-4",
    "space-5": "w-6",
    "space-6": "w-8",
    "space-7": "w-12",
    "space-8": "w-16",
  };

  return (
    <div className="flex items-center gap-space-4">
      <span className="text-fs-xs font-mono text-ink-soft w-20">{name}</span>
      <div className={`h-4 bg-[#3b82f6] rounded-sm ${widths[name]}`} />
      <span className="text-fs-xs text-ink-soft">{value}</span>
    </div>
  );
}

function RadiusSample({ name, value }: { name: string; value: string }) {
  return (
    <div className="text-center">
      <div className={`w-12 h-12 bg-surface-muted border border-line mb-space-2 rounded-${name}`} />
      <span className="text-fs-xs font-mono text-ink-soft block">{name}</span>
      <span className="text-fs-xs text-ink-soft">{value}</span>
    </div>
  );
}

function AntiPattern({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#ef4444]/5 border border-[#ef4444]/20 rounded-sm p-space-3">
      <div className="flex items-center gap-space-2 mb-space-1">
        <X className="w-4 h-4 text-[#ef4444]" />
        <h4 className="font-display text-fs-sm font-medium text-ink">{title}</h4>
      </div>
      <p className="text-fs-xs text-ink-soft">{description}</p>
    </div>
  );
}
