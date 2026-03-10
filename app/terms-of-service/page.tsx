import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "March 2, 2026";

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-white dark:bg-slate-950">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-col items-start gap-6">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-slate-800 dark:text-slate-200" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4 leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-bold">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">1.</span>{" "}
              Introduction
            </h2>
            <p>
              Welcome to Path Menties. These Terms & Conditions outline the
              rules and regulations for the use of Path Menties's Website and AI
              services. By accessing this website, we assume you accept these
              terms and conditions. Do not continue to use Path Menties if you
              do not agree to take all of the terms and conditions stated on
              this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">2.</span>{" "}
              Description of Service
            </h2>
            <p>
              Path Menties provides an AI-powered service designed to generate
              personalized learning roadmaps based on user goals, skills, and
              time constraints. Our learning content suggestions are generated
              computationally and provided "as is". We aim for high accuracy but
              cannot guarantee that all generated paths perfectly reflect
              real-world learning nuances or current industry standards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">3.</span>{" "}
              License
            </h2>
            <p>
              Unless otherwise stated, Path Menties and/or its licensors own the
              intellectual property rights for all material on the platform. All
              intellectual property rights are reserved. You may access this
              from Path Menties for your own personal use subjected to
              restrictions set in these terms and conditions.
            </p>
            <p className="mt-2 font-bold text-slate-800 dark:text-slate-200">
              You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-emerald-600">
              <li>Republish material from Path Menties without credit.</li>
              <li>
                Sell, rent, or sub-license generated learning roadmaps for
                widespread commercial gain without agreement.
              </li>
              <li>
                Reproduce, duplicate, or copy significant structural material
                from the platform.
              </li>
              <li>
                Attempt to reverse-engineer the roadmap generation systems.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">4.</span>{" "}
              User Accounts
            </h2>
            <p>
              When you create an account with us, you must provide us with
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our service.
              You are responsible for safeguarding the password that you use to
              access the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">5.</span>{" "}
              Disclaimer
            </h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties, and conditions relating to our
              website and the use of this website. Our AI-generated study plans,
              roadmaps, and content suggestions are for informational and
              educational purposes only. We are not liable for any delays,
              outcomes, or financial losses resulting from following the
              learning paths.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">6.</span>{" "}
              Limit of Liability
            </h2>
            <p>
              In no event shall Path Menties, nor any of its officers, directors
              and employees, be held liable for anything arising out of or in
              any way connected with your use of this Website. We shall not be
              held liable for any indirect, consequential or special liability
              arising out of or in any way related to your use of this Website.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
