import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useState, useCallback } from 'react'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { Skeleton } from '../components/ui/skeleton'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { GALLERY_QUERY } from '../lib/sanity-queries'
import { urlFor } from '../lib/sanity'
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { Button } from '../components/ui/button'
import { PageBreadcrumbs } from '../components/PageBreadcrumbs'
import { BookingCTA } from '../components/BookingCTA'

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Diving', value: 'diving' },
  { label: 'Fishing', value: 'fishing' },
  { label: 'Marine Life', value: 'marine-life' },
  { label: 'Courses', value: 'courses' },
  { label: 'Accommodation', value: 'accommodation' },
]

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  all: 'Explore diving, marine life, courses and coastal experiences from Tobago.',
  diving: 'A closer look at guided scuba diving around Tobago.',
  fishing: 'Days spent fishing and exploring Tobago from the water.',
  'marine-life': 'Reef residents and memorable encounters beneath the surface.',
  courses: 'Training moments from PADI courses and developing divers.',
  accommodation: 'Places and surroundings that help complete a Tobago dive holiday.',
}

type GalleryPhoto = {
  _id: string
  title: string
  image: any
  altText?: string
  category?: string
  description?: string
  isFeatured?: boolean
  order?: number
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const { data: photos, isLoading } = useSanityQuery<GalleryPhoto[]>(
    ['sanity', 'gallery'],
    GALLERY_QUERY
  )

  const filtered =
    activeCategory === 'all'
      ? (photos ?? [])
      : (photos ?? []).filter((p) => p.category === activeCategory)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prevPhoto = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  }, [filtered.length])

  const nextPhoto = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))
  }, [filtered.length])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
    },
    [closeLightbox, prevPhoto, nextPhoto]
  )

  const categoryCounts: Record<string, number> = {}
  if (photos) {
    photos.forEach((p) => {
      const cat = p.category ?? 'uncategorized'
      categoryCounts[cat] = (categoryCounts[cat] ?? 0) + 1
    })
  }
  const totalCount = photos?.length ?? 0

  // Build a masonry-style grid: featured items span 2 rows
  const renderGrid = () => {
    if (isLoading) {
      return Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`gallery-item ${i % 5 === 0 ? 'gallery-item--featured' : ''}`}
        >
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>
      ))
    }

    if (!filtered.length) {
      return (
        <div className="gallery-empty">
          <Images className="gallery-empty__icon" />
          <h3 className="gallery-empty__title">No Photos Yet</h3>
          <p className="gallery-empty__text">
            Photos in this category will appear here once added.
          </p>
        </div>
      )
    }

    return filtered.map((photo, index) => (
      <div
        key={photo._id}
        className={`gallery-item ${photo.isFeatured ? 'gallery-item--featured' : ''}`}
        onClick={() => openLightbox(index)}
        role="button"
        tabIndex={0}
        aria-label={`View ${photo.title}`}
        onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
      >
        <ImageWithFallback
          src={urlFor(photo.image).width(800).url()}
          alt={photo.altText ?? photo.title}
          className="gallery-item__img"
          loading="lazy"
          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        <div className="gallery-item__overlay">
          <ZoomIn className="gallery-item__zoom-icon" />
          <p className="gallery-item__caption">{photo.title}</p>
          {photo.category && (
            <span className="gallery-item__category">
              {photo.category.replace('-', ' ')}
            </span>
          )}
        </div>
      </div>
    ))
  }

  return (
    <div className="gallery-page">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumbs current="Gallery" light />
          <div className="max-w-3xl mt-10">
          <p className="text-sm uppercase tracking-[0.18em] font-semibold text-white/70 mb-3">Below the surface</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-5">Tobago Diving Gallery</h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/85 leading-relaxed">
            Moments captured beneath the waves — diving, marine life, and unforgettable adventures.
          </p>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="gallery-filters-section">
        <div className="gallery-filters">
          {CATEGORIES.map((cat) => {
            const count =
              cat.value === 'all' ? totalCount : (categoryCounts[cat.value] ?? 0)
            const isActive = activeCategory === cat.value
            return (
              <button
                key={cat.value}
                id={`gallery-filter-${cat.value}`}
                className={`gallery-filter-btn ${isActive ? 'gallery-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.value)}
                aria-pressed={isActive}
              >
                {cat.label}
                {count > 0 && (
                  <span className="gallery-filter-btn__count">{count}</span>
                )}
              </button>
            )
          })}
        </div>
        <p className="max-w-7xl mx-auto px-6 pb-3 text-sm text-muted-foreground">{CATEGORY_DESCRIPTIONS[activeCategory]}</p>
      </section>

      {/* ── Masonry Grid ── */}
      <section className="gallery-grid-section">
        <div className="gallery-grid">{renderGrid()}</div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          {/* Close */}
          <button
            id="gallery-lightbox-close"
            className="gallery-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="size-6" />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              id="gallery-lightbox-prev"
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={prevPhoto}
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-8" />
            </button>
          )}

          {/* Image */}
          <div className="gallery-lightbox__inner">
            <div className="gallery-lightbox__img-wrap">
              <ImageWithFallback
                src={urlFor(filtered[lightboxIndex].image).width(1600).url()}
                alt={filtered[lightboxIndex].altText ?? filtered[lightboxIndex].title}
                className="gallery-lightbox__img"
              />
            </div>
            <div className="gallery-lightbox__info">
              <h2 className="gallery-lightbox__title">
                {filtered[lightboxIndex].title}
              </h2>
              {filtered[lightboxIndex].description && (
                <p className="gallery-lightbox__desc">
                  {filtered[lightboxIndex].description}
                </p>
              )}
              {filtered[lightboxIndex].category && (
                <span className="gallery-lightbox__badge">
                  {filtered[lightboxIndex].category!.replace('-', ' ')}
                </span>
              )}
              <p className="gallery-lightbox__counter">
                {lightboxIndex + 1} / {filtered.length}
              </p>
              <Button asChild size="sm" className="mt-2 rounded-full">
                <Link to="/pricing" onClick={closeLightbox}>Explore dives &amp; courses</Link>
              </Button>
            </div>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              id="gallery-lightbox-next"
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={nextPhoto}
              aria-label="Next photo"
            >
              <ChevronRight className="size-8" />
            </button>
          )}
        </div>
      )}
      
      <BookingCTA title="Create Your Own Tobago Memories" description="Join us for a dive, course or ocean experience and start planning your time on the water." />
    </div>
  )
}
