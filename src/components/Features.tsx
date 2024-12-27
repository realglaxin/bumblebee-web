import {
  Shield,
  UserCog,
  Settings,
  MessageSquare,
  Bot,
  MessageCircleQuestion,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Shield,
    title: "Advanced Moderation",
    description:
      "Keep your server safe with powerful moderation tools and auto-moderation features.",
  },
  {
    icon: UserCog,
    title: "Autorole System",
    description:
      "Automatically assign server roles to new members, streamlining your discord server experience.",
  },
  {
    icon: Settings,
    title: "Custom Commands",
    description:
      "Easily manage custom roles, voice roles, and temporary voice channels for a dynamic discord experience.",
  },
  {
    icon: MessageSquare,
    title: "Welcome System",
    description:
      "Create a personalized welcome system with automated greetings for new members that join your server.",
  },
  {
    icon: Bot,
    title: "Auto Responses",
    description:
      "Automate responses to frequently asked questions, providing instant answers and improving user experience.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Sticky Messages",
    description:
      "Pin important messages that stay visible across channels, ensuring key information is always accessible.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Packed with Powerful Features
          </h2>
          <p className="mt-4 text-xl text-text-secondary">
            Everything you need to manage and enhance your discord community
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
