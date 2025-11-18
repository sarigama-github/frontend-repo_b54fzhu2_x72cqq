import { Link, useParams } from 'react-router-dom'

const posts = {
  'post-1': {
    title: '2025 U.S. Corporate Tax Outlook: Key Changes to Watch',
    content: `
      In 2025, several federal and state changes will influence corporate forecasting and compliance. 
      This overview highlights key provisions, timelines, and practical steps for finance and tax leaders.

      Topics include: minimum taxes, state apportionment trends, and the evolving treatment of credits.
    `,
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200&auto=format&fit=crop',
    date: 'Jan 6, 2025',
    author: 'Ikshana Z Insights'
  },
  'post-2': {
    title: 'Transfer Pricing Essentials for High-Growth Companies',
    content: `
      As companies scale globally, transfer pricing becomes a strategic lever. 
      We cover how to approach policy design, benchmarking, documentation, and governance to stay compliant while enabling growth.
    `,
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    date: 'Dec 18, 2024',
    author: 'Advisory Team'
  },
  'post-3': {
    title: 'R&D Credits: Capturing Value Without the Risk',
    content: `
      Incentives can be powerful—but require discipline. We outline documentation best practices,
      audit considerations, and how to align claims with your operating model.
    `,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    date: 'Nov 30, 2024',
    author: 'Tax Services'
  }
}

export default function BlogPost() {
  const { id } = useParams()
  const post = posts[id]

  if (!post) return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-black/60">Article not found.</p>
        <Link to="/blog" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg">Back to Blog</Link>
      </div>
    </div>
  )

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <img src={post.image} alt={post.title} className="rounded-2xl mb-6 shadow" />
          <h1 className="text-3xl font-semibold text-black">{post.title}</h1>
          <div className="text-sm text-black/60 mt-1">{post.date} · {post.author}</div>
          <div className="prose prose-slate max-w-none mt-6">
            <p>{post.content}</p>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="p-6 rounded-2xl border border-black/5 shadow-sm">
            <h3 className="font-semibold text-black">Related Articles</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {Object.entries(posts).filter(([pid]) => pid !== id).map(([pid, p]) => (
                <li key={pid}>
                  <Link to={`/blog/${pid}`} className="text-blue-700 hover:underline">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
