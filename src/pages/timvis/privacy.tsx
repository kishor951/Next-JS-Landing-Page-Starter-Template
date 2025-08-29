import Head from 'next/head';

import TimVisFooter from '../../components/TimVisFooter';
import TimVisNavigation from '../../components/TimVisNavigation';

export default function TimVisPrivacy() {
  return (
    <>
      <Head>
        <title>TimVis Privacy Policy — ProductiveLift</title>
        <meta
          name="description"
          content="Privacy policy for TimVis — how we handle user data and privacy."
        />
        <meta property="og:title" content="TimVis Privacy Policy" />
        <meta
          property="og:description"
          content="Privacy policy for TimVis — how we handle user data and privacy."
        />
        <link
          rel="canonical"
          href="https://productivelift.site/timvis/privacy"
        />
      </Head>

      <TimVisNavigation />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">
          This Privacy Policy explains how TimVis (a ProductiveLift app)
          collects, uses, and discloses information when you use our services.
        </p>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Data We Collect</h2>
          <p className="mb-2">
            We collect minimal data necessary to provide core features:
          </p>
          <ul className="ml-4 list-inside list-disc text-gray-700">
            <li>
              Local session data stored on-device (focus sessions, timers)
            </li>
            <li>Optional account info if you enable cloud sync</li>
            <li>Anonymous usage metrics if you opt-in</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">How We Use Data</h2>
          <p className="mb-2">
            We use data to power features, provide sync, and improve the app.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Your Choices</h2>
          <p className="mb-2">
            You can export or delete your local data at any time.
          </p>
        </section>

        <p className="text-sm text-gray-600">Last updated: August 2025</p>
      </main>

      <TimVisFooter />
    </>
  );
}

export const getServerSideProps = async () => ({ props: {} });
