import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Engineer",
    quote:
      "CodeFlow feels like it reads my mind. The completions are fast and the bug hints have genuinely cut down our review cycles.",
    initials: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "Full-stack Developer",
    quote:
      "I've tried a lot of AI coding tools, but the PR summaries alone sold me. My team ships way faster now.",
    initials: "MR",
  },
  {
    name: "Aiko Tanaka",
    role: "Independent Builder",
    quote:
      "The 'chat with your codebase' feature is a game changer. I can ask questions about my own project and get real answers.",
    initials: "AT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Loved by{" "}
            <span className="bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Developers
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Here's what people are saying about building with CodeFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-purple-400/50 mb-3" />
              <p className="text-sm text-gray-300 leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-sm font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
