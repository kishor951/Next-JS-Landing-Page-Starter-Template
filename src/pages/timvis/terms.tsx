import Head from 'next/head';

import TimVisFooter from '../../components/TimVisFooter';
import TimVisNavigation from '../../components/TimVisNavigation';

export default function TimVisTerms() {
  return (
    <>
      <Head>
        <title>TimVis Terms & Conditions — ProductiveLift</title>
        <meta name="description" content="Terms and conditions for TimVis." />
        <meta property="og:title" content="TimVis Terms & Conditions" />
        <meta
          property="og:description"
          content="Terms and conditions for TimVis."
        />
        <link rel="canonical" href="https://productivelift.site/timvis/terms" />
      </Head>

      <TimVisNavigation />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-6 text-3xl font-bold">Terms &amp; Conditions</h1>
        <p className="mb-4 text-gray-700">
          These Terms &amp; Conditions govern your use of TimVis. By using the
          service you agree to these terms.
        </p>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">License</h2>
          <p className="mb-2">
            TimVis is provided under the terms outlined here. You may use it for
            personal use.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">
            Limitation of Liability
          </h2>
          <p className="mb-2">
            ProductiveLift is not liable for indirect damages arising from use
            of the app.
          </p>
        </section>

        <p className="text-sm text-gray-600">Last updated: August 2025</p>
      </main>

      <TimVisFooter />
    </>
  );
}

export const getServerSideProps = async () => ({ props: {} });
