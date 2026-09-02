import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For trying out CodeFlow on your personal projects.",
    features: [
      "120 completions / day",
      "1 language workspace",
      "Community support",
    ],
    highlighted: false,
    cta: "Start for free",
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For developers who want AI help across all their work.",
    features: [
      "Unlimited completions",
      "All languages & frameworks",
      "Bug detection & PR summaries",
      "Priority support",
    ],
    highlighted: true,
    cta: "Upgrade to Pro",
  },
  {
    name: "Team",
    price: "$29",
    period: "/user/month",
    description: "For teams that want shared insights and admin controls.",
    features: [
      "Everything in Pro",
      "Team-wide analytics",
      "Codebase chat for large repos",
      "SSO & admin controls",
      "Dedicated support",
    ],
    highlighted: false,
    cta: "Contact sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Simple, honest{" "}
            <span className="bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Start free and scale as your team grows. No hidden fees — cancel
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                plan.highlighted
                  ? "border-purple-500/60 bg-purple-500/10 shadow-lg shadow-purple-500/10"
                  : "border-slate-700/60 bg-slate-900/60 hover:border-slate-500/50"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-3 py-1 text-xs font-medium text-white">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">{plan.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 mt-0.5 text-purple-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl py-2.5 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white hover:opacity-90"
                    : "border border-slate-600 text-white hover:border-slate-400"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
