import Head from 'next/head';
import TimVisNavigation from '../components/TimVisNavigation';
import PlayStoreButton from '../components/PlayStoreButton';
import TimVisFooter from '../components/TimVisFooter';

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
		title: 'Time Analytics',
		description:
			'Detailed insights into your focus patterns, productive hours, and session streaks with beautiful visualizations.',
	},
	{
		icon: '🎯',
		title: 'Goal Tracking',
		description:
			'Set daily focus goals and track your progress with streak counters and achievement badges.',
	},
	{
		icon: '🔇',
		title: 'Distraction Blocking',
		description:
			'Built-in website blocker and notification silence during focus sessions to eliminate distractions.',
	},
	{
		icon: '☁️',
		title: 'Cloud Sync',
		description:
			'Sync your sessions and settings across all devices with optional Supabase integration.',
	},
];



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
			<header className="py-16 text-center bg-gradient-to-b from-gray-900 to-gray-800">
				<div className="max-w-4xl mx-auto px-4">
					<img
						src="/timvis_logo.png"
						alt="TimVis logo"
						className="mx-auto mb-6 w-32 h-32"
					/>
					<h1 className="text-5xl font-bold mb-4 text-white">Timvis AI</h1>
					<h2 className="text-2xl text-purple-400 mb-6">
						Focus & Time Tracking Made Simple
					</h2>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						The flagship productivity app from ProductiveLift. Built for students,
						developers, and knowledge workers who want to master their focus and
						track their productive time.
					</p>
					<div className="flex justify-center gap-4">
						<PlayStoreButton />
						<button className="bg-gray-700 border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
							Coming soon on Google Playstore!
						</button>
					</div>
				</div>
			</header>

			{/* Problem Statement */}
			<section className="py-16 bg-gray-800">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-8 text-white">
						Why TimVis Exists
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-xl font-semibold mb-4 text-red-400">
								Constant Distractions
							</h3>
							<p className="text-gray-400">
								Social media, notifications, and endless browser tabs break your
								concentration every few minutes.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4 text-red-400">
								Fragmented Work
							</h3>
							<p className="text-gray-400">
								Switching between tasks without structure leads to shallow work and
								decreased productivity.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4 text-red-400">
								No Visibility
							</h3>
							<p className="text-gray-400">
								You can&apos;t improve what you don&apos;t measure. Most people have no idea
								where their productive time actually goes.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section id="features" className="py-16 bg-gray-900">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-white">
						What Makes Timvis Special
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{timvisFeatures.map((feature, index) => (
							<div
								key={index}
								className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow"
							>
								<div className="text-4xl mb-4">{feature.icon}</div>
								<h3 className="text-xl font-semibold mb-3 text-white">
									{feature.title}
								</h3>
								<p className="text-gray-400">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>


			{/* Pricing */}
			<section id="pricing" className="py-16 bg-gray-800">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-white">Pricing</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-left flex flex-col justify-between">
							<div>
								<h3 className="text-xl font-semibold mb-2 text-white">Free — Always</h3>
								<p className="text-gray-400 mb-4">Get started with core focus tools and local storage — no credit card required.</p>
								<ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
									<li>Pomodoro & Focus Sessions</li>
									<li>Basic session summaries</li>
									<li>3 days of session history</li>
								</ul>
							</div>
						</div>

						<div className="bg-gradient-to-b from-purple-800 to-purple-700 p-6 rounded-lg border border-purple-600 text-left text-white flex flex-col justify-between">
							<div>
								<h3 className="text-xl font-semibold mb-2">Pro — Power User</h3>
								<p className="mb-4 opacity-90">Unlock AI-powered insights, unlimited history, and cloud sync to make every session count.</p>
								<ul className="list-disc list-inside mb-4 space-y-1">
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
			<section className="py-16 bg-purple-900 text-white text-center">
				<div className="max-w-4xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Master Your Focus?
					</h2>
					<p className="text-xl mb-8 opacity-90">
						Join thousands of focused professionals who've transformed their
						productivity with TimVis.
					</p>
					<div className="flex justify-center gap-4">
						<PlayStoreButton />
						<a
							href=""
							className="bg-gray-700 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
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
