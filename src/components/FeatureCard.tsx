import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative">
      <div className="relative rounded-xl border border-transparent bg-background p-6 transition-all duration-200 hover:border-yellow-400/50 hover:shadow-lg">
        <Icon className="h-12 w-12 text-yellow-400" />
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-text-secondary">{description}</p>
      </div>
    </div>
  );
}
