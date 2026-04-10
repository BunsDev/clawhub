import { Skeleton } from "../ui/skeleton";

export function SkillListItemSkeleton() {
  return (
    <div className="skill-list-item skill-list-item-skeleton">
      {/* Icon placeholder */}
      <Skeleton className="h-10 w-10 flex-shrink-0 rounded-[var(--r-md)]" />
      <div className="skill-list-item-body">
        <div className="skill-list-item-main">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-3 w-full max-w-[400px]" />
        <div className="skill-list-item-meta">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </div>
  );
}

export function SkillListItemSkeletonList({ count = 8 }: { count?: number }) {
  return (
    <div className="results-list">
      {Array.from({ length: count }, (_, i) => (
        <SkillListItemSkeleton key={i} />
      ))}
    </div>
  );
}
