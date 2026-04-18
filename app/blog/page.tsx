export default function BlogPage() {
  const posts = [
    { id: 1, title: 'Types of Industrial Fasteners: Complete Guide for Oman Construction', slug: 'types-industrial-fasteners' },
    { id: 2, title: 'PPE Requirements for Oil & Gas Workers in Oman', slug: 'ppe-requirements-oil-gas' },
    { id: 3, title: 'How to Choose Welding Consumables for Pipeline Work', slug: 'choose-welding-consumables' },
    { id: 4, title: 'ISO 9001 Industrial Suppliers in Muscat — What to Look For', slug: 'iso-9001-suppliers' },
    { id: 5, title: 'Complete PPE Checklist for Construction Sites in Oman', slug: 'ppe-checklist-construction' },
  ]

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10 py-24">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Blog & <span className="text-gradient-blue">Resources</span>
          </h1>
          <p className="text-gray-muted text-lg">
            Industrial insights, product guides, and industry updates from Mactech Oman.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 max-w-2xl">
            {posts.map((post) => (
              <div key={post.id} className="glass-card p-6 hover:border-blue-accent/40 transition-all hover:-translate-y-1 cursor-pointer">
                <h2 className="text-lg font-bold text-white mb-2 hover:text-blue-accent transition-colors">{post.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-muted">
                  <span>Posted on blog</span>
                  <span className="text-blue-accent font-semibold">Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
