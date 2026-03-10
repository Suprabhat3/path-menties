"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  Heart,
  X,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [showPricingAlert, setShowPricingAlert] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (showPricingAlert) {
      const timer = setTimeout(() => setShowPricingAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showPricingAlert]);

  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 pt-20 pb-10 px-6 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 pr-4">
            <div className="bg-white dark:bg-slate-950 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm inline-block">
              <Logo showText={true} />
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] font-medium max-w-[360px]">
              Craft an industry-standard, well-optimized roadmap in minutes.
              Stop guessing, start achieving. Let AI build your perfect learning
              journey from absolute zero to mastery.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="https://x.com/Suprabhat_3"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-sm transition-all shadow-sm"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/Suprabhat3"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-sm transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/suprabhatt"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-sm transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
            {/* Product Column */}
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 tracking-wide uppercase text-sm">
                Product
              </h4>
              <ul className="space-y-4 text-[15px] font-medium text-slate-600 dark:text-slate-400">
                <li>
                  <Link
                    href="/generate"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block"
                  >
                    Roadmap Builder
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ats-checker"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block"
                  >
                    ATS Checker
                  </Link>
                </li>
                <li>
                  <Link
                    href="#templates"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPricingAlert(true);
                    }}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block cursor-pointer text-left focus:outline-none"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 tracking-wide uppercase text-sm">
                Resources
              </h4>
              <ul className="space-y-4 text-[15px] font-medium text-slate-600 dark:text-slate-400">
                <li>
                  <Link
                    href="https://blog.suprabhat.site"
                    target="_blank"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block"
                  >
                    Career Advice
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://hirementis.site"
                    target="_blank"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block"
                  >
                    Interview Prep
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help-center"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6 col-span-2 sm:col-span-1">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 tracking-wide uppercase text-sm">
                Contact
              </h4>
              <ul className="space-y-4 text-[15px] font-medium text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>suprabhat.work@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <a href="https://new.suprabhat.site" target="_blank">
                      Portfolio
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    in a quiet place
                    <br />
                    somewhere on Earth
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-bold">
            © {currentYear} Path Menties. Built for excellence.
          </p>
          <div className="flex items-center gap-6 text-sm font-bold text-slate-600 dark:text-slate-400">
            <Link
              href="/privacy-policy"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Alert Toast */}
      {showPricingAlert && (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 animate-in slide-in-from-bottom-8 fade-in duration-500">
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl p-4 sm:p-5 flex items-start gap-4 max-w-sm relative overflow-hidden group">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl shrink-0 relative z-10 border border-slate-200 dark:border-slate-700">
              <Heart className="w-6 h-6 fill-emerald-500 text-emerald-600 dark:text-emerald-400" />
            </div>

            <div className="flex-1 pr-6 relative z-10">
              <h4 className="text-slate-900 dark:text-slate-100 font-extrabold text-sm sm:text-base mb-1 tracking-tight">
                100% Free Forever
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed font-semibold">
                PathFinder is an open initiative built for the community. Enjoy
                full access without any paywalls or hidden fees!
              </p>
            </div>

            <button
              onClick={() => setShowPricingAlert(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg p-1 transition-colors z-20"
              aria-label="Close alert"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
