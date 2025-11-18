import Navbar from '../components/Navbar'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'

export default function Blog() {
  return (
    <div className="bg-white">
      <Navbar />
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-semibold text-black">Insights & Updates</h1>
          <p className="mt-2 text-black/70 max-w-3xl">
            Research-backed guidance on U.S. tax, accounting, and cross-border compliance.
          </p>
        </div>
      </section>
      <BlogList />
      <Footer />
    </div>
  )
}
