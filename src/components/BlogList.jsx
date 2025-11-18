import { useState } from 'react'

const initialPosts = [
  {
    id: 'post-1',
    title: '2025 U.S. Corporate Tax Outlook: Key Changes to Watch',
    excerpt: 'A practical summary of federal and state updates impacting planning for the next fiscal year.',
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200&auto=format&fit=crop',
    date: 'Jan 6, 2025',
    author: 'Ikshana Z Insights'
  },
  {
    id: 'post-2',
    title: 'Transfer Pricing Essentials for High-Growth Companies',
    excerpt: 'How to design efficient models that scale internationally while meeting documentation standards.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    date: 'Dec 18, 2024',
    author: 'Advisory Team'
  },
  {
    id: 'post-3',
    title: 'R&D Credits: Capturing Value Without the Risk',
    excerpt: 'Documentation best practices and audit considerations for maximizing incentives.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    date: 'Nov 30, 2024',
    author: 'Tax Services'
  }
]

export default function BlogList() {
  const [posts] = useState(initialPosts)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a key={post.id} href={`/blog/${post.id}`} className="group rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
              </div>
              <div className="p-5">
                <div className="text-xs text-black/60">{post.date} · {post.author}</div>
                <h3 className="mt-1 font-semibold text-black group-hover:text-blue-700 transition-colors">{post.title}</h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
