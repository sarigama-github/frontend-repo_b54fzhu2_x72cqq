import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-8">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              U.S. Tax, Accounting, and Compliance for Modern Businesses
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-black/70 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Ikshana Z Inc. partners with corporations, investors, and founders to navigate complex regulations with clarity—across borders and at scale.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a href="/services" className="inline-flex items-center px-5 py-3 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors">
                Explore Services
              </a>
              <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-black text-white shadow hover:bg-black/90 transition-colors">
                Contact Us
              </a>
            </motion.div>
          </div>

          <div className="h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl border border-black/5">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </section>
  )
}
