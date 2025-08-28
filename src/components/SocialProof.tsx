export default function SocialProof() {
  return (
    <section className="py-12 bg-gray-800">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Trusted by Productive People</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
        <blockquote className="max-w-sm mx-auto text-gray-300 italic">&ldquo;ProductiveLift helped me finally stick to my routines and get more done every day!&rdquo;<br /><span className="font-semibold text-white">— Alex, Freelancer</span></blockquote>
        <blockquote className="max-w-sm mx-auto text-gray-300 italic">&ldquo;The focus timer and AI suggestions are game changers for my workflow.&rdquo;<br /><span className="font-semibold text-white">— Jamie, Student</span></blockquote>
      </div>
      <div className="flex justify-center gap-6">
        <img src="/images/partner1.svg" alt="Partner 1" className="h-8" />
        <img src="/images/partner2.svg" alt="Partner 2" className="h-8" />
      </div>
    </section>
  );
}
