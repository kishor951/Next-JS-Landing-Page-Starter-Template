import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import VideoGallery from '@/components/VideoGallery';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <SEO
        title="ProductiveLift"
        description="ProductiveLift is the umbrella productivity clubplatform featuring TimVis focus timer and other productivity tools to help you focus, manage tasks, and build routines."
        url="https://productivelift.site"
        image="/images/hero-mockup.png"
      />
      <Navigation />
      <Hero />
      <section className="py-48 bg-gray-900 motion-safe:animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Explore Our Products</h2>
          <p className="text-gray-400 mb-8">
            ProductiveLift offers a suite of tools to help you stay productive and focused. Check out TimVis and Habit Cards.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l1.9 4.2L18 8l-3.6 1L12 14l-2.4-5L6 8l4.1-1.8L12 2z" fill="currentColor" />
                  <path d="M4 15.5c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v1.5c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V15.5z" fill="rgba(255,255,255,0.03)" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Timvis</h3>
              <p className="text-gray-400 mb-4">
                The ultimate focus timer app to master your productivity.
              </p>
              <Link href="/timvis" className="text-blue-400 hover:underline">
                Learn More
              </Link>
            </div>
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="6" width="18" height="3" rx="1" fill="currentColor" />
                  <rect x="3" y="11" width="18" height="3" rx="1" fill="currentColor" opacity="0.85" />
                  <rect x="3" y="16" width="12" height="3" rx="1" fill="currentColor" opacity="0.7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Habit Cards</h3>
              <p className="text-gray-400 mb-4">
                Build and track habits with our innovative card system.
              </p>
              <a href="#" className="text-blue-400 hover:underline">
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>
      <VideoGallery />
      <Footer />
    </>
  );
}