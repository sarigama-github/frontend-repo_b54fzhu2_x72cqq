import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold text-black">Contact Us</h2>
          <p className="mt-2 text-black/70">We typically respond within one business day.</p>

          <div className="mt-6 space-y-2 text-sm text-black/80">
            <p><span className="font-medium">Address:</span> 300 Market Street, Suite 1200, San Francisco, CA 94105</p>
            <p><span className="font-medium">Email:</span> hello@ikshanaz.com</p>
            <p><span className="font-medium">Phone:</span> (415) 555-0199</p>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="p-6 rounded-2xl bg-blue-50 text-blue-800 border border-blue-200">Thanks for reaching out. Well get back to you shortly.</div>
          ) : (
            <form onSubmit={onSubmit} className="p-6 rounded-2xl border border-black/5 shadow-sm bg-white">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-black/70 mb-1">Name</label>
                  <input type="text" name="name" value={form.name} onChange={onChange} required className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-black/70 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-black/70 mb-1">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-black/70 mb-1">Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows="4" required className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center px-5 py-3 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors">Send Message</button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-2xl overflow-hidden border border-black/5">
          <iframe title="Map" className="w-full h-64" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4194%2C37.7749%2C-122.3894%2C37.8049&layer=mapnik" />
        </div>
      </div>
    </section>
  )
}
