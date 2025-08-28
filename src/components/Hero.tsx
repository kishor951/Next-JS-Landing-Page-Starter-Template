export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-48 text-center motion-safe:animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 py-8 motion-safe:animate-slide-up">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Lift Your <span className="text-blue-400">Productivity.</span> Lightly.
        </h1>
        <p className="text-lg mb-8 text-gray-300">We craft apps, tools, videos, and blogs to help you unlock your productivity and live your best work-life.</p>
        <div className="flex justify-center gap-4 mt-6 mb-2">
          <a
            href="/timvis"
            className="bg-gray-700 border border-gray-600 text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transform transition-transform duration-200 motion-safe:hover:scale-105 motion-reduce:transform-none"
            aria-label="Learn more about Timvis focus timer"
          >
            Try Timvis
          </a>
        </div>
      </div>
    </section>
  );
}
