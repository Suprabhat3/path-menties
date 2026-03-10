import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Cookie } from "lucide-react";

export default function CookiesPolicy() {
  const lastUpdated = "March 2, 2026";

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-white dark:bg-slate-950">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-col items-start gap-6">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center">
            <Cookie className="w-8 h-8 text-slate-800 dark:text-slate-200" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-bold">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm font-medium">
          <section className="space-y-4">
            <p>
              This Cookie Policy explains what cookies are and how we use them.
              You should read this policy so you can understand what type of
              cookies we use, or the information we collect using cookies and
              how that information is used.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">1.</span>{" "}
              What Are Cookies?
            </h2>
            <p>
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Path Menties) are
              called "first party cookies". Cookies set by parties other than
              the website owner are called "third party cookies". Third party
              cookies enable third party features or functionality to be
              provided on or through the website (e.g. like advertising,
              interactive content and analytics).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">2.</span>{" "}
              How We Use Cookies
            </h2>
            <p>
              We use first party and third party cookies for several reasons.
              Some cookies are required for technical reasons in order for our
              Websites to operate, and we refer to these as "essential" or
              "strictly necessary" cookies.
            </p>

            <div className="mt-4 grid gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Essential Cookies
                </h3>
                <p className="text-sm">
                  These cookies are strictly necessary to provide you with
                  services available through our website and to use some of its
                  features, such as maintaining form states across generation
                  steps and session authentication.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Analytics and Preferences Cookies
                </h3>
                <p className="text-sm">
                  These cookies collect information that is used either in
                  aggregate form to help us understand how our website is being
                  used or how effective our generated roadmaps are, or to help
                  us customize our website for you.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">3.</span>{" "}
              Local Storage
            </h2>
            <p>
              In addition to cookies, we also use browser local storage to save
              your generated roadmaps, your roadmap viewing history, and
              specific app preferences (such as dark mode settings). Local
              storage data remains on your device until you manually clear your
              browser data or application limits are met.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">4.</span>{" "}
              How to Control Cookies
            </h2>
            <p>
              You have the right to decide whether to accept or reject cookies.
              You can exercise your cookie rights by setting your preferences in
              your web browser controls. If you choose to reject cookies, you
              may still use our website though your access to some functionality
              and areas of our website may be restricted.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
