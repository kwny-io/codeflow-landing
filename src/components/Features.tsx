import {
  Zap,
  Bug,
  LineChart,
  Code2,
  GitPullRequest,
  MessageSquareText,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Code Completion",
    description:
      "Intelligent suggestions that learn from your coding style. Get real-time assistance with syntax, logic, and best practices as you type.",
  },
  {
    icon: Bug,
    title: "Automated Bug Detection",
    description:
      "Spot errors and warnings before they ship. CodeFlow scans your changes and flags issues with clear, actionable explanations.",
  },
  {
    icon: LineChart,
    title: "Performance Insights",
    description:
      "Understand your code's health at a glance. Track complexity, coverage, and runtime hotspots across every commit.",
  },
  {
    icon: Code2,
    title: "Multi-Language Support",
    description:
      "Work seamlessly across JavaScript, TypeScript, Python, and dozens of other languages with context-aware assistance.",
  },
  {
    icon: GitPullRequest,
    title: "Smarter Pull Requests",
    description:
      "Get instant summaries and review hints for every PR, so your team spends less time reading and more time shipping.",
  },
  {
    icon: MessageSquareText,
    title: "Chat with Your Codebase",
    description:
      "Ask questions about your project in plain language and receive answers grounded in your actual repository.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Your Complete Development{" "}
            <span className="bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to write, review, and ship better code — powered
            by AI and designed to fit right into your daily flow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-800/60"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-5 transition-colors group-hover:bg-purple-500/20">
                  <Icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
