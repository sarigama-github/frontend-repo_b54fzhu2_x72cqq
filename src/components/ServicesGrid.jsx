import { Calculator, ShieldCheck, Globe2, Building2, Users, FileCheck2 } from 'lucide-react'

const services = [
  {
    category: 'Tax Services',
    icon: Calculator,
    items: [
      { title: 'Federal & State Tax Filings', desc: 'Preparation and review of corporate, partnership, and individual returns.' },
      { title: 'Tax Planning & Optimization', desc: 'Proactive strategies to minimize exposure and align with business goals.' },
      { title: 'R&D and Investment Credits', desc: 'Incentive identification, documentation, and claims support.' },
    ],
  },
  {
    category: 'Audit & Assurance',
    icon: ShieldCheck,
    items: [
      { title: 'Financial Statement Audits', desc: 'Independent assurance to build stakeholder confidence.' },
      { title: 'Reviews & Compilations', desc: 'Right-sized reporting for lenders, boards, and investors.' },
      { title: 'Internal Controls & SOX', desc: 'Design, testing, and remediation for scalable governance.' },
    ],
  },
  {
    category: 'International & Cross-Border Services',
    icon: Globe2,
    items: [
      { title: 'Inbound/Outbound Structuring', desc: 'Entity selection, treaty analysis, and permanent establishment planning.' },
      { title: 'Transfer Pricing', desc: 'Policy design, benchmarking, and documentation.' },
      { title: 'Global Mobility', desc: 'Expatriate tax and payroll coordination across jurisdictions.' },
    ],
  },
  {
    category: 'Corporate & Strategic Advisory',
    icon: Building2,
    items: [
      { title: 'M&A and Transaction Support', desc: 'Due diligence, tax modeling, and integration planning.' },
      { title: 'Entity Rationalization', desc: 'Simplify structures to reduce cost and risk.' },
      { title: 'CFO Advisory', desc: 'Forecasting, board reporting, and capital readiness.' },
    ],
  },
  {
    category: 'Employee, Estate & Ownership Planning',
    icon: Users,
    items: [
      { title: 'Equity Compensation', desc: 'Design and tax treatment for options, RSUs, and grants.' },
      { title: 'Estate & Gift Planning', desc: 'Strategies that protect wealth and align with family objectives.' },
      { title: 'Business Succession', desc: 'Ownership transitions with tax-efficient outcomes.' },
    ],
  },
  {
    category: 'Accounting & Compliance Support',
    icon: FileCheck2,
    items: [
      { title: 'Monthly Close & Reporting', desc: 'GAAP-compliant books with timely management reports.' },
      { title: 'Payroll & Sales Tax', desc: 'End-to-end processing and multi-state compliance.' },
      { title: 'Regulatory Filings', desc: 'From 1099s and FATCA to state registrations.' },
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {services.map(({ category, icon: Icon, items }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div>
                <h2 className="text-2xl font-semibold text-black">{category}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl border border-black/5 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="mt-2 text-sm text-black/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
