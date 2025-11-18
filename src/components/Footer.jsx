import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <span className="font-semibold text-lg">Ikshana Z Inc.</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              U.S. tax, accounting, and compliance specialists. We help companies operate with confidence across borders and regulations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow</h4>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bgwhite/10 bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Ikshana Z Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
