import Head from 'next/head';

import PlayStoreButton from '../components/PlayStoreButton';
import TimVisFooter from '../components/TimVisFooter';
import TimVisNavigation from '../components/TimVisNavigation';

const timvisFeatures = [
  {
    icon: '⏱️',
    title: 'Focus Sessions',
    description:
      'Customizable Pomodoro timers with 25/5 minute defaults or create your own intervals. Perfect for deep work sessions.',
  },
  {
    icon: '🔔',
    title: 'Smart Breaks',
    description:
      'Intelligent break reminders with guided breathing exercises and quick stretches to maintain your energy.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description:
      'Detailed analytics and insights into your productivity patterns, helping you optimize your workflow over time.',
  },
];

export const dynamic = 'force-dynamic';

export default function TimVis() {
  return (
    <>
      <Head>
        <title>TimVis — Focus & Time Tracking | ProductiveLift</title>
        <meta
          name="description"
          content="TimVis is the premier focus and time tracking app for students and knowledge workers. Beat distractions, build focus habits, and visualize your productivity with the flagship app from ProductiveLift."
        />
        <meta property="og:title" content="TimVis — Focus & Time Tracking" />
        <meta
          property="og:description"
          content="TimVis is the premier focus and time tracking app for students and knowledge workers. Beat distractions, build focus habits, and visualize your productivity."
        />
        <meta property="og:image" content="/timvis_logo.png" />
        <meta property="og:url" content="https://productivelift.site/timvis" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://productivelift.site/timvis" />
      </Head>

      <TimVisNavigation />

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <img
            src="/timvis_logo.png"
            alt="TimVis logo"
            className="mx-auto mb-6 size-32"
          />
          <h1 className="mb-4 text-5xl font-bold text-white">Timvis AI</h1>
          <h2 className="mb-6 text-2xl text-purple-400">
            Focus & Time Tracking Made Simple
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            The flagship productivity app from ProductiveLift. Built for
            students, developers, and knowledge workers who want to master their
            focus and track their productive time.
          </p>
          <div className="flex justify-center gap-4">
            <PlayStoreButton />
            <button className="rounded-lg border-2 border-purple-500 bg-gray-700 px-8 py-3 font-semibold text-purple-400 transition-colors hover:bg-gray-600">
              Coming soon on Google Playstore!
            </button>
          </div>
        </div>
      </header>

      {/* Problem Statement */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white">
            Why TimVis Exists
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-red-400">
                Constant Distractions
              </h3>
              <p className="text-gray-400">
                Social media, notifications, and endless browser tabs break your
                concentration every few minutes.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-red-400">
                Fragmented Work
              </h3>
              <p className="text-gray-400">
                Switching between tasks without structure leads to shallow work
                and decreased productivity.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-red-400">
                No Visibility
              </h3>
              <p className="text-gray-400">
                You can&apos;t improve what you don&apos;t measure. Most people
                have no idea where their productive time actually goes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-900 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            What Makes Timvis Special
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {timvisFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-800 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Pricing
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-lg border border-gray-700 bg-gray-900 p-6 text-left">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Free — Always
                </h3>
                <p className="mb-4 text-gray-400">
                  Get started with core focus tools and local storage — no
                  credit card required.
                </p>
                <ul className="mb-4 list-inside list-disc space-y-1 text-gray-400">
                  <li>Pomodoro & Focus Sessions</li>
                  <li>Basic session summaries</li>
                  <li>3 days of session history</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-lg border border-purple-600 bg-gradient-to-b from-purple-800 to-purple-700 p-6 text-left text-white">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Pro — Power User</h3>
                <p className="mb-4 opacity-90">
                  Unlock AI-powered insights, unlimited history, and cloud sync
                  to make every session count.
                </p>
                <ul className="mb-4 list-inside list-disc space-y-1">
                  <li>AI session summaries & smart suggestions</li>
                  <li>Unlimited session history + export</li>
                  <li>Secure cloud sync across devices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-900 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Master Your Focus?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Join thousands of focused professionals who&apos;ve transformed
            their productivity with TimVis.
          </p>
          <div className="flex justify-center gap-4">
            <PlayStoreButton />
            <a
              href=""
              className="rounded-lg bg-gray-700 px-8 py-3 font-semibold text-purple-300 transition-colors hover:bg-gray-600"
            >
              Coming Soon!
            </a>
          </div>
        </div>
      </section>

      <TimVisFooter />
    </>
  );
}
