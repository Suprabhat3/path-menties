"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Trash2,
  MapIcon,
  Clock,
  Target,
  CalendarDays,
} from "lucide-react";

interface SavedRoadmap {
  id: string;
  goal: string;
  level: string;
  timeline: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [roadmaps, setRoadmaps] = useState<SavedRoadmap[]>([]);
  const [mounted, setMounted] = useState(false);
  const MAX_LIMIT = 5;

  useEffect(() => {
    setMounted(true);
    loadHistory();
  }, []);

  const loadHistory = () => {
    try {
      const saved = localStorage.getItem("pathfinder_saved_roadmaps");
      if (saved) {
        setRoadmaps(JSON.parse(saved).reverse()); // newest first
      }
    } catch (e) {
      console.error("Failed to load history", e);
    }
  };

  const deleteRoadmap = (id: string) => {
    try {
      const updated = roadmaps.filter((r) => r.id !== id);
      setRoadmaps(updated);
      localStorage.setItem(
        "pathfinder_saved_roadmaps",
        JSON.stringify(updated.reverse()),
      ); // put back in orig order
    } catch (e) {
      console.error("Failed to delete roadmap", e);
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
              Your Learning History
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl font-medium">
              Access your previously generated roadmaps. We save them locally on
              your device for quick access.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-5 min-w-[240px]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Storage Used
              </span>
              <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                {roadmaps.length} / {MAX_LIMIT}
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700">
              <div
                className={`h-full transition-all duration-500 rounded-full ${roadmaps.length >= MAX_LIMIT ? "bg-amber-500" : "bg-emerald-500"}`}
                style={{ width: `${(roadmaps.length / MAX_LIMIT) * 100}%` }}
              />
            </div>
            {roadmaps.length >= MAX_LIMIT && (
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 font-bold">
                Free tier limit reached.
              </p>
            )}
          </div>
        </div>

        {roadmaps.length === 0 ? (
          <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 border-dashed rounded-3xl p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <MapIcon className="w-10 h-10 text-slate-500 dark:text-slate-400" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-3">
              No roadmaps yet
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto font-medium">
              You haven't generated any learning paths. Create your first
              roadmap to start achieving your goals.
            </p>
            <Link
              href="/generate"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all active:scale-95"
            >
              <span>Generate Roadmap Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="group relative bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col transition-all hover:border-emerald-500 dark:hover:border-emerald-500"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      confirm("Are you sure you want to delete this roadmap?")
                    ) {
                      deleteRoadmap(roadmap.id);
                    }
                  }}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/40 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 border border-transparent hover:border-red-200 dark:hover:border-red-800"
                  aria-label="Delete roadmap"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                <div className="mb-6 pr-10">
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 line-clamp-2 leading-tight">
                    {roadmap.goal}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700">
                      <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      {roadmap.level}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700">
                      <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      {roadmap.timeline.length > 20
                        ? roadmap.timeline.substring(0, 20) + "..."
                        : roadmap.timeline}
                    </span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t-2 border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-bold">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(roadmap.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <Link
                    href={`/roadmap?goal=${encodeURIComponent(roadmap.goal)}&level=${encodeURIComponent(roadmap.level)}&timeline=${encodeURIComponent(roadmap.timeline)}`}
                    className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500 font-extrabold hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  >
                    View Path <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
