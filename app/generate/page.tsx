"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  Map,
  Target,
  Clock,
  BarChart,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GeneratePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    level: "Beginner",
    timeline: "",
  });
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    // Check local storage for limits
    const saved = localStorage.getItem("pathfinder_saved_roadmaps");
    if (saved) {
      try {
        const roadmaps = JSON.parse(saved);
        if (roadmaps.length >= 5) {
          setLimitReached(true);
        }
      } catch (e) {}
    }
  }, []);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (limitReached) return;
    router.push(
      `/roadmap?goal=${encodeURIComponent(formData.goal)}&level=${formData.level}&timeline=${encodeURIComponent(formData.timeline)}`,
    );
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans flex flex-col items-center transition-colors duration-300">
      {/* Header */}
      <Navbar className="max-w-4xl">
        <div className="text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800">
          Step {step} of 3
        </div>
      </Navbar>

      <div className="flex-1 w-full max-w-xl mx-auto px-6 py-12 flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full mb-10 overflow-hidden border border-slate-300 dark:border-slate-700">
          <div
            className="h-full bg-emerald-600 transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <form
          onSubmit={
            step === 3
              ? handleSubmit
              : (e) => {
                  e.preventDefault();
                  if (limitReached && step === 2) {
                    // prevent going to step 3 if limit reached
                  }
                  nextStep();
                }
          }
          className="flex-1 flex flex-col"
        >
          {limitReached && (
            <div className="mb-6 bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-2xl p-5 flex flex-col items-center text-center animate-in fade-in duration-500">
              <h3 className="font-extrabold text-amber-900 dark:text-amber-100 flex items-center gap-2 mb-2">
                <BarChart className="w-5 h-5" /> Roadmap Limit Reached (5/5)
              </h3>
              <p className="text-sm text-amber-800 dark:text-amber-200/80 mb-3 font-medium">
                You have reached the maximum number of saved roadmaps. You can
                view or manage your past roadmaps in your history.
              </p>
              <Link
                href="/history"
                className="text-sm font-bold text-amber-900 dark:text-amber-100 underline decoration-amber-300 dark:decoration-amber-700 underline-offset-4 hover:decoration-amber-500 dark:hover:decoration-amber-500 transition-colors"
              >
                View History
              </Link>
            </div>
          )}

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 border border-emerald-200 dark:border-emerald-800">
                <Target className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                What do you want to learn?
              </h1>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Be as specific as you like. The more details you provide, the
                better the roadmap.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g., Become a Full-Stack Next.js Developer"
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData({ ...formData, goal: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100 font-medium transition-colors"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 border border-emerald-200 dark:border-emerald-800">
                <BarChart className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                What is your current level?
              </h1>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                We will adjust the starting point of your roadmap based on what
                you already know.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {[
                  "Absolute Beginner",
                  "Beginner",
                  "Intermediate",
                  "Advanced",
                ].map((lvl) => (
                  <label
                    key={lvl}
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.level === lvl ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-900/20" : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-emerald-400 dark:hover:border-emerald-600"}`}
                  >
                    <input
                      type="radio"
                      name="level"
                      value={lvl}
                      checked={formData.level === lvl}
                      onChange={(e) =>
                        setFormData({ ...formData, level: e.target.value })
                      }
                      className="hidden"
                    />
                    <div className="flex-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                      {lvl}
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.level === lvl ? "border-emerald-600" : "border-slate-300 dark:border-slate-700"}`}
                    >
                      {formData.level === lvl && (
                        <div className="w-3 h-3 bg-emerald-600 rounded-full" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 border border-emerald-200 dark:border-emerald-800">
                <Clock className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                What is your time commitment?
              </h1>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Tell us how much time you can dedicate and your overall
                deadline.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g., 10 hours/week for 6 months"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100 font-medium transition-colors"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-auto pt-10 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-bold transition-all hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
            ) : (
              <div /> // Spacer
            )}

            <button
              type="submit"
              disabled={limitReached}
              className={`flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold transition-all active:scale-95 ml-auto border-2 ${
                limitReached
                  ? "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border-slate-300 dark:border-slate-700"
                  : "bg-emerald-600 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 text-white border-emerald-700 dark:border-emerald-700"
              }`}
            >
              <span>{step === 3 ? "Generate Roadmap" : "Continue"}</span>
              {step !== 3 && <ArrowRight className="w-5 h-5" />}
              {step === 3 && <Sparkles className="w-5 h-5 ml-1" />}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
