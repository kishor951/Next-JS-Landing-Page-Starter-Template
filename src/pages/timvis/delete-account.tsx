import Head from 'next/head';
import { useState } from 'react';

import TimVisFooter from '../../components/TimVisFooter';
import TimVisNavigation from '../../components/TimVisNavigation';

export default function TimVisDeleteAccount() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('no-longer-use');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const resp = await fetch('/api/timvis/delete-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, reason, details }),
      });
      if (!resp.ok) {
        const json = await resp.json().catch(() => ({}));
        // eslint-disable-next-line no-alert
        alert(`Failed to submit request: ${json?.error || resp.statusText}`);
        return;
      }
      setSubmitted(true);
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Network error submitting request');
    }
  }

  return (
    <>
      <Head>
        <title>Delete Account — TimVis</title>
        <meta
          name="description"
          content="Instructions to delete your TimVis account and data."
        />
        <meta property="og:title" content="Delete Account — TimVis" />
        <meta
          property="og:description"
          content="Instructions to delete your TimVis account and data."
        />
        <link
          rel="canonical"
          href="https://productivelift.site/timvis/delete-account"
        />
      </Head>

      <TimVisNavigation />

      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-6 text-3xl font-bold">Delete Account</h1>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg bg-gray-900 p-6"
          >
            <p className="text-gray-300">
              Submit your request to delete your TimVis account. After
              submitting, your account will be scheduled for deletion and
              removed within 48 hours.
            </p>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-200"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@domain.com"
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="mb-1 block text-sm font-medium text-gray-200"
              >
                Reason for deletion
              </label>
              <select
                id="reason"
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white"
              >
                <option value="no-longer-use">I no longer use the app</option>
                <option value="privacy-concerns">Privacy concerns</option>
                <option value="found-alternative">Found an alternative</option>
                <option value="other">Other (please explain)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="details"
                className="mb-1 block text-sm font-medium text-gray-200"
              >
                Tell us more (optional)
              </label>
              <textarea
                id="details"
                name="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white"
                placeholder="Any details you'd like to share (helpful but optional)"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="rounded bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
              >
                Request Deletion
              </button>
              <div className="text-sm text-gray-400">
                We will email a confirmation to you.
              </div>
            </div>
          </form>
        ) : (
          <div className="rounded-lg bg-green-900 p-6 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-white">
              Request Received
            </h2>
            <p className="mb-4 text-gray-200">
              Thanks &mdash; we&apos;ve received your deletion request for{' '}
              <strong>{email}</strong>.
            </p>
            <p className="text-gray-200">
              Your account and associated data will be deleted within 48 hours.
              If you change your mind, return to this page within that window to
              cancel the request, or open the TimVis app and use Account
              Settings to reverse the deletion.
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-600">Last updated: August 2025</p>
      </main>

      <TimVisFooter />
    </>
  );
}

export const getServerSideProps = async () => ({ props: {} });
