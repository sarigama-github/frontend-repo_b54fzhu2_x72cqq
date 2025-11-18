import Navbar from '../components/Navbar'
import ServicesGrid from '../components/ServicesGrid'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="bg-white">
      <Navbar />
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-semibold text-black">Services</h1>
          <p className="mt-2 text-black/70 max-w-3xl">
            Comprehensive tax, assurance, and advisory solutions tailored to the needs of global organizations, investors, and founders.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <Footer />
    </div>
  )
}
