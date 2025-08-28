import Link from 'next/link';

export default function TimVisFooter() {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-700 text-center text-gray-400 text-sm">
      <div className="mb-4">
        <img src="/timvis_logo.png" alt="TimVis" className="mx-auto w-16 h-16 mb-2" />
        <div className="text-white font-semibold">TimVis</div>
      </div>
      <div className="mb-2">© {new Date().getFullYear()} TimVis — ProductiveLift</div>
      <div className="flex justify-center gap-4 mb-2">
        <Link href="/timvis/privacy" className="hover:underline hover:text-gray-300">Privacy Policy</Link>
        <Link href="/timvis/terms" className="hover:underline hover:text-gray-300">Terms &amp; Conditions</Link>
        <Link href="/timvis/delete-account" className="hover:underline hover:text-gray-300">Delete Account</Link>
      </div>
    </footer>
  );
}
