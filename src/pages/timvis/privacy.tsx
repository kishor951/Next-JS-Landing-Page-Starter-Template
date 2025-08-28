import Head from 'next/head';
import TimVisNavigation from '../../components/TimVisNavigation';
import TimVisFooter from '../../components/TimVisFooter';

export default function TimVisPrivacy() {
  return (
    <>
      <Head>
        <title>TimVis Privacy Policy — ProductiveLift</title>
        <meta name="description" content="Privacy policy for TimVis — how we handle user data and privacy." />
        <meta property="og:title" content="TimVis Privacy Policy" />
        <meta property="og:description" content="Privacy policy for TimVis — how we handle user data and privacy." />
        <link rel="canonical" href="https://productivelift.site/timvis/privacy" />
      </Head>

      <TimVisNavigation />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          This Privacy Policy explains how TimVis (a ProductiveLift app) collects,
          uses, and discloses information when you use our services.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data We Collect</h2>
          <p className="mb-2">We collect minimal data necessary to provide core features:</p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Local session data stored on-device (focus sessions, timers)</li>
            <li>Optional account info if you enable cloud sync</li>
            <li>Anonymous usage metrics if you opt-in</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How We Use Data</h2>
          <p className="mb-2">We use data to power features, provide sync, and improve the app.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Choices</h2>
          <p className="mb-2">You can export or delete your local data at any time.</p>
        </section>

        <p className="text-sm text-gray-600">Last updated: August 2025</p>
      </main>

      <TimVisFooter />
    </>
  );
}
