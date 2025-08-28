export default function TimVisPricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-4 text-white">TimVis Pricing</h2>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        Choose the plan that fits your focus and productivity needs
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow p-6 flex-1 border border-gray-700">
          <h3 className="text-xl font-semibold mb-2 text-white">Free</h3>
          <div className="text-2xl font-bold mb-4 text-white">$0<span className="text-sm font-normal text-gray-400">/month</span></div>
          <ul className="mb-6 text-gray-400 space-y-2">
            <li>✔ TimVis focus timer (unlimited)</li>
            <li>✔ Basic task lists</li>
            <li>✔ Simple routines</li>
            <li>✔ Local data storage</li>
            <li>✔ 7-day session history</li>
          </ul>
          <button className="w-full bg-gray-700 text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
            Get Started Free
          </button>
        </div>
        <div className="bg-blue-600 text-white rounded-lg shadow p-6 flex-1 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <div className="text-2xl font-bold mb-4">$4.99<span className="text-sm font-normal opacity-80">/month</span></div>
          <ul className="mb-6 space-y-2">
            <li>✔ Everything in Free</li>
            <li>✔ Advanced AI assistant</li>
            <li>✔ Unlimited cloud sync</li>
            <li>✔ Custom routine templates</li>
            <li>✔ Detailed analytics & insights</li>
            <li>✔ Cross-device synchronization</li>
            <li>✔ Priority support</li>
            <li>✔ Early access to new tools</li>
          </ul>
          <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Pro Trial
          </button>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        All plans include access to TimVis. Cancel anytime.
      </div>
    </section>
  );
}
