import type { Metadata } from 'next'
import Image from 'next/image'

const galleryImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85',
]

export const metadata: Metadata = {
  title: 'Gallery | Mactech Oman',
  description: 'Browse project and product gallery from Mactech Oman industrial supply operations.',
}

export default function GalleryPage() {
  return (
    <>
      <section className="relative min-h-[42vh] flex items-center bg-white overflow-hidden border-b border-black/10">
        <div className="container-custom py-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            Project <span className="text-blue-accent">Gallery</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Selected visuals from industrial supply, site support and materials handling across Oman.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryImages.map((src, index) => (
            <div key={src} className="relative h-72 rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-xl transition-shadow">
              <Image
                src={src}
                alt={`Mactech Oman gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
