export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-700 text-center text-gray-400 text-sm">
      <div className="mb-2">&copy; {new Date().getFullYear()} ProductiveLift. All rights reserved.</div>
      <div className="flex justify-center gap-4 mb-2">
        <a href="/privacy" className="hover:underline hover:text-gray-300">Privacy Policy</a>
        <a href="/support" className="hover:underline hover:text-gray-300">Support</a>
        <a href="/faq" className="hover:underline hover:text-gray-300">FAQ</a>
        <a href="/sitemap.xml" className="hover:underline hover:text-gray-300">Sitemap</a>
      </div>
      <div className="flex justify-center gap-4">
        <a href="https://twitter.com/productivelift" aria-label="Twitter" className="hover:text-blue-400">Twitter</a>
        <a href="https://facebook.com/productivelift" aria-label="Facebook" className="hover:text-blue-500">Facebook</a>
        <a href="https://instagram.com/productivelift" aria-label="Instagram" className="hover:text-pink-400">Instagram</a>
      </div>
    </footer>
  );
}
