"use client";

import { useState, useEffect, Suspense } from "react";
import {
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  Map,
  Download,
  Share2,
  Sparkles,
  AlertCircle,
  Trophy,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import confetti from "canvas-confetti";

interface Resource {
  name: string;
  url: string;
}

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  resources: Resource[];
}

function RoadmapContent() {
  const searchParams = useSearchParams();
  const goalStr = searchParams.get("goal");
  const levelStr = searchParams.get("level") || "Beginner";
  const timelineStr = searchParams.get("timeline") || "";
  const goal = goalStr ? decodeURIComponent(goalStr) : "Your Learning Journey";

  const [completed, setCompleted] = useState<number[]>([]);
  const [roadmap, setRoadmap] = useState<Step[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!goalStr) return;

    // A unique key for this local storage entry to cache the AI generation
    const cacheKey = `roadmap-${goalStr}-${levelStr}-${timelineStr}`
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");
    const cachedData = localStorage.getItem(cacheKey);
    const cachedCompleted = localStorage.getItem(`${cacheKey}-completed`);

    if (cachedCompleted) {
      try {
        setCompleted(JSON.parse(cachedCompleted));
      } catch (e) {}
    }

    if (cachedData) {
      try {
        setRoadmap(JSON.parse(cachedData));
        setLoading(false);
        return;
      } catch (e) {}
    }

    // Call API if no cache
    const fetchRoadmap = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            goal: goalStr,
            level: levelStr,
            timeline: timelineStr,
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(
            errData.details || errData.error || "Failed to generate roadmap",
          );
        }

        const data = await res.json();
        if (data.roadmap && Array.isArray(data.roadmap)) {
          setRoadmap(data.roadmap);
          localStorage.setItem(cacheKey, JSON.stringify(data.roadmap));

          // Save roadmap history
          saveToHistory(goalStr, levelStr, timelineStr);
        } else {
          throw new Error("Invalid format received from AI.");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [goalStr, levelStr, timelineStr]);

  const saveToHistory = (goal: string, level: string, timeline: string) => {
    try {
      const saved = localStorage.getItem("pathfinder_saved_roadmaps");
      let roadmaps = saved ? JSON.parse(saved) : [];

      const newEntry = {
        id: `roadmap-${goal}-${level}-${timeline}`
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "-"),
        goal,
        level,
        timeline,
        createdAt: new Date().toISOString(),
      };

      // Ensure we don't save duplicates
      if (!roadmaps.find((r: any) => r.id === newEntry.id)) {
        // Keep at most 5 limit
        if (roadmaps.length >= 5) return;
        roadmaps.push(newEntry);
        localStorage.setItem(
          "pathfinder_saved_roadmaps",
          JSON.stringify(roadmaps),
        );
      }
    } catch (e) {
      console.error("Failed to save history", e);
    }
  };

  const toggleComplete = (id: number) => {
    const isCompleted = completed.includes(id);
    const newCompleted = isCompleted
      ? completed.filter((c) => c !== id)
      : [...completed, id];

    if (!isCompleted) {
      const isLastStep = roadmap && newCompleted.length === roadmap.length;

      if (isLastStep) {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = {
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          zIndex: 0,
        };

        const randomInRange = (min: number, max: number) =>
          Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          });
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          });
        }, 250);
      } else {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10b981", "#34d399", "#059669"],
        });
      }
    }

    setCompleted(newCompleted);

    // Save to localstorage
    const cacheKey = `roadmap-${goalStr}-${levelStr}-${timelineStr}`
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");
    localStorage.setItem(`${cacheKey}-completed`, JSON.stringify(newCompleted));
  };

  const currentSteps = roadmap || [];
  const progress =
    currentSteps.length > 0
      ? Math.round((completed.length / currentSteps.length) * 100)
      : 0;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans flex flex-col items-center transition-colors duration-300">
      {/* Header */}
      <Navbar className="max-w-4xl">
      </Navbar>

      <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 flex flex-col">
        {/* Title & Progress */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
            {goal}
          </h1>

          {!loading && !error && currentSteps.length > 0 && (
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Overall Progress
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden relative">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-emerald-500 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {completed.length} of {currentSteps.length} milestones
                completed. Keep going!
              </p>
            </div>
          )}

          {!loading && !error && currentSteps.length > 0 && (
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <strong>Note:</strong> AI can sometimes estimate times
                incorrectly or provide broken links. If a resource link is
                invalid, try searching for it manually on YouTube or other
                platforms by its name.
              </p>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-800 rounded-full animate-pulse"></div>
              <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent stroke-emerald-500 rounded-full animate-spin absolute top-0 left-0"></div>
              <Sparkles className="w-6 h-6 text-emerald-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-2">
              AI is crafting your roadmap...
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm">
              Analyzing your goal, adjusting for your '{levelStr}' level, and
              tailoring to your timeline.
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">
              Generation Failed
            </h3>
            <p className="text-red-700 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Timeline */}
        {!loading && !error && currentSteps.length > 0 && (
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-12 pb-10">
            {currentSteps.map((step) => {
              const isCompleted = completed.includes(step.id);

              return (
                <div
                  key={step.id}
                  className="relative pl-8 sm:pl-12 opacity-100 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${step.id * 100}ms` }}
                >
                  {/* Timeline dot/icon */}
                  <button
                    onClick={() => toggleComplete(step.id)}
                    className="absolute -left-[21px] top-6 bg-slate-50 dark:bg-slate-950 p-1 rounded-full text-slate-300 dark:text-slate-700 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors group z-10"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-500 bg-white dark:bg-slate-900 rounded-full" />
                    ) : (
                      <Circle className="w-8 h-8 text-slate-300 dark:text-slate-700 group-hover:text-emerald-400 fill-white dark:fill-slate-900" />
                    )}
                  </button>

                  {/* Step Card */}
                  <div
                    className={`bg-white dark:bg-slate-900 border p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md ${isCompleted ? "border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-900/10" : "border-slate-200 dark:border-slate-800"}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <h2
                        className={`text-xl font-bold transition-colors ${isCompleted ? "text-emerald-800 dark:text-emerald-400" : "text-slate-900 dark:text-slate-100"}`}
                      >
                        {step.title}
                      </h2>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg shrink-0">
                        <Clock className="w-4 h-4" />
                        {step.time}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Resources */}
                    {step.resources && step.resources.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                          Resources
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {step.resources.map((res, i) => (
                            <li key={i}>
                              {res.url !== "#" ? (
                                <a
                                  href={res.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors p-2 -ml-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  {res.name}
                                </a>
                              ) : (
                                <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium p-2 -ml-2 rounded-lg cursor-default">
                                  <ExternalLink className="w-4 h-4 opacity-50" />
                                  {res.name}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {progress === 100 && (
              <div
                className="relative pl-8 sm:pl-12 opacity-100 animate-in zoom-in duration-500 fill-mode-both"
                style={{ animationDelay: `${currentSteps.length * 100}ms` }}
              >
                <div className="absolute -left-[21px] top-6 bg-slate-50 dark:bg-slate-950 p-1 rounded-full z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-2xl shadow-xl shadow-emerald-500/20 text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-16 -mb-16"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30">
                      <PartyPopper className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-black tracking-tight mb-3">
                      You are a Champion! 🏆
                    </h2>
                    <p className="text-emerald-50 font-medium text-lg max-w-lg leading-relaxed">
                      You've conquered every step of this journey. All the hard
                      work and dedication has paid off. Keep pushing boundaries!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default function RoadmapPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center font-sans">
          <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent stroke-emerald-500 rounded-full animate-spin"></div>
        </div>
      }
    >
      <RoadmapContent />
    </Suspense>
  );
}
