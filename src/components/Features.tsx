const features = [
  {
    icon: '/images/feature-focus-timer.svg',
    title: 'Timvis - Focus Timer',
    desc: 'Our flagship focus app with customizable Pomodoro sessions, break reminders, and productivity tracking. Block distractions and stay in the zone.',
  },
  {
    icon: '/images/feature-task-list.svg',
    title: 'Task Management',
    desc: 'Organize your day with intelligent task lists. Prioritize, categorize, and never lose track of what matters most across all your projects.',
  },
  {
    icon: '/images/feature-routines.svg',
    title: 'Routine Builder',
    desc: 'Build powerful daily and weekly routines. Create custom sequences, set reminders, and automate your path to better habits.',
  },
  {
    icon: '/images/feature-timeline.svg',
    title: 'Analytics & Insights',
    desc: 'Visualize your productivity trends with detailed analytics. Track your focus sessions, completed tasks, and routine adherence over time.',
  },
  {
    icon: '/images/feature-ai.svg',
    title: 'AI Assistant',
    desc: 'Get smart suggestions for task prioritization, routine optimization, and productivity insights. Voice-to-text input makes capturing ideas effortless.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-4 text-white">ProductiveLift Suite</h2>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        A comprehensive productivity platform with specialized tools for every aspect of your workflow
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center">
            <img src={f.icon} alt="" className="w-16 h-16 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
