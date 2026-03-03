import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Self-Taught Developer",
      quote:
        "I wanted to switch to an IT career but didn't know where to start. PathFinder gave me a perfect 6-month React roadmap. I just cracked my first Junior Developer role!",
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=256&h=256&auto=format&fit=crop",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "B.Tech Student",
      quote:
        "Preparing for campus placements was chaotic with so many resources out there. PathFinder organized exactly what I needed to study week-by-week. Absolute absolute lifesaver.",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&h=256&auto=format&fit=crop",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Senior Data Analyst",
      quote:
        "Even as an experienced professional, finding a structured path to upskill in AI and Rust is tough. This tool stripped away the noise and gave me the exact premium resources I needed.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 mb-6 bg-emerald-50 dark:bg-emerald-900/30 px-5 py-2 rounded-full border border-emerald-200/50 dark:border-emerald-800/50 shadow-sm">
            <span className="flex gap-0.5 mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-emerald-500 text-emerald-500 dark:fill-emerald-400 dark:text-emerald-400"
                />
              ))}
            </span>
            <span className="font-bold tracking-wide text-sm uppercase">
              Loved by thousands across India
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Real people.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              Real results.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            See how PathFinder is transforming the way students and
            professionals achieve their learning goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 dark:border-slate-800/50 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-900/20 transition-all duration-500 ease-out"
            >
              <div className="absolute top-8 right-8 text-emerald-100 dark:text-slate-800 transition-colors duration-500 group-hover:text-emerald-200 dark:group-hover:text-slate-700">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-sm"
                  />
                ))}
              </div>

              <p className="text-slate-800 dark:text-slate-200 text-lg leading-relaxed mb-10 font-medium relative z-10">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-slate-800/50 pt-6 relative z-10">
                <div className="w-14 h-14 rounded-full overflow-hidden relative ring-4 ring-emerald-50 dark:ring-emerald-900/20 group-hover:ring-emerald-100 dark:group-hover:ring-emerald-900/40 transition-all duration-500">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                    {review.name}
                  </h4>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Subtle hover glow effect behind the card */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
