import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="bg-white">
      <Navbar />
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-semibold text-black">Get in Touch</h1>
          <p className="mt-2 text-black/70 max-w-3xl">
            Tell us about your needs. Our team will follow up with next steps and availability.
          </p>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  )
}
