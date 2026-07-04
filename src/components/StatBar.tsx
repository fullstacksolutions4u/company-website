import Icon from "@/components/Icon";
import { stats } from "@/lib/data";

export default function StatBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-start gap-8 overflow-x-auto rounded-full border border-border bg-surface-2 px-8 py-6 shadow-2xl backdrop-blur sm:justify-between sm:gap-4 ${className}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex shrink-0 items-center gap-3 text-left">
          <Icon name="laurel" className="h-9 w-9 shrink-0 text-muted" />
          <div>
            <p className="whitespace-nowrap text-lg font-bold text-foreground">{stat.value}</p>
            <p className="max-w-34 text-xs leading-snug text-muted">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
