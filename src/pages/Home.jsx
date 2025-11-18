import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PreviewSections from '../components/PreviewSections'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-black">About Ikshana Z Inc.</h2>
            <p className="mt-3 text-black/70 leading-relaxed">
              We are a U.S.-based advisory firm specializing in tax, accounting, and cross-border compliance for modern enterprises. Our team brings public accounting rigor and in-house operator pragmatism to deliver clear, actionable outcomes.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <h3 className="font-semibold text-black">Why clients choose us</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>Partner-led delivery with global perspective</li>
              <li>Technology-enabled workflows and reporting</li>
              <li>Clear fees, responsive support, consistent quality</li>
            </ul>
          </div>
        </div>
      </section>
      <PreviewSections />
      <Footer />
    </div>
  )
}
