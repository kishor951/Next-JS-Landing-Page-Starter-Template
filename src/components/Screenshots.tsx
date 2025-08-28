export default function Screenshots() {
  return (
    <section className="py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">See ProductiveLift in Action</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div>
          <img src="/images/screenshot1.png" alt="Focus Timer screen" className="rounded-lg shadow" />
          <p className="text-center mt-2 text-gray-400">Focus Timer</p>
        </div>
        <div>
          <img src="/images/screenshot2.png" alt="Task List screen" className="rounded-lg shadow" />
          <p className="text-center mt-2 text-gray-400">Task Lists</p>
        </div>
        <div>
          <img src="/images/screenshot3.png" alt="Routine Builder screen" className="rounded-lg shadow" />
          <p className="text-center mt-2 text-gray-400">Routine Builder</p>
        </div>
      </div>
    </section>
  );
}
