import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "March 2, 2026";

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-white dark:bg-slate-950">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-col items-start gap-6">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-slate-800 dark:text-slate-200" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-bold">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm font-medium">
          <section className="space-y-4">
            <p>
              At Path Menties, accessible from pathmenties.com, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by Path Menties and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">1.</span>{" "}
              Information We Collect
            </h2>
            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-emerald-600">
              <li>
                <strong className="text-slate-800 dark:text-slate-200">
                  Account Information:
                </strong>{" "}
                If you create an account, we may require details such as your
                name, email address, and password.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">
                  Usage Data:
                </strong>{" "}
                We automatically collect information about how you interact with
                our platform to improve our learning roadmaps and user
                experience.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">
                  Input Data:
                </strong>{" "}
                Information you provide when generating roadmaps (e.g., goals,
                timelines, current skill levels).
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">2.</span>{" "}
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-emerald-600">
              <li>
                Provide, operate, and maintain our website and AI systems.
              </li>
              <li>
                Improve, personalize, and expand our educational services.
              </li>
              <li>
                Understand and analyze how you use our platform to generate
                better learning paths.
              </li>
              <li>
                Develop new products, services, features, and functionality.
              </li>
              <li>
                Communicate with you for customer service, updates, and other
                information relating to the website.
              </li>
              <li>
                Find and prevent fraud and abuse of our generation limits.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">3.</span>{" "}
              Data Security
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. However, please be aware that no
              storage system or transmission of data over the internet can be
              guaranteed to be 100% secure. We strive to use commercially
              acceptable means to protect your personal information but cannot
              guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">4.</span>{" "}
              Third-Party Privacy Policies
            </h2>
            <p>
              Path Menties's Privacy Policy does not apply to other advertisers
              or websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-emerald-600 dark:text-emerald-500">5.</span>{" "}
              Changes To This Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
