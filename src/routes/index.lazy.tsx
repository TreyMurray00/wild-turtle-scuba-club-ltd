import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Award, Camera, CheckCircle2, MapPin, ShieldCheck, Users, Waves } from 'lucide-react'
import SliderPkg from 'react-slick'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Skeleton } from '../components/ui/skeleton'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { BookingCTA } from '../components/BookingCTA'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { ABOUT_SUMMARY_QUERY, HOME_GALLERY_QUERY, HOME_QUERY, HOME_SERVICES_QUERY } from '../lib/sanity-queries'
import { urlFor } from '../lib/sanity'

export const Route = createLazyFileRoute('/')({ component: Home })

const Slider = typeof SliderPkg === 'object' && SliderPkg.default ? SliderPkg.default : SliderPkg

const fallbackServices = [
  { _id: 'guided-diving', name: 'Guided Tobago Diving', description: 'Explore Tobago reefs with a local guide and a dive plan matched to your experience.', price: null, image: null },
  { _id: 'padi-courses', name: 'PADI Certification Courses', description: 'Build your skills with supportive PADI training in Castara, Tobago.', price: null, image: null },
  { _id: 'equipment-rental', name: 'Scuba Equipment Rental', description: 'Travel lighter with convenient access to well-maintained rental equipment.', price: null, image: null },
  { _id: 'dive-holidays', name: 'Tailored Dive Holidays', description: 'Create a Tobago dive package around your dates, interests and accommodation needs.', price: null, image: null },
]

const faqs = [
  { question: 'Where can I go scuba diving in Tobago?', answer: 'Wild Turtle Scuba Club operates from Castara on Tobago and offers guided diving for a range of experience levels. Contact the team to match current dive options with your certification and interests.' },
  { question: 'Can I take PADI certification courses in Trinidad and Tobago?', answer: 'Yes. Our Castara dive centre offers PADI course options in Tobago. Course availability, duration and prerequisites vary, so contact us to choose the right next step.' },
  { question: 'Can you help plan a dive holiday in Tobago?', answer: 'Yes. We can tailor a Tobago dive package around your dates, experience, equipment needs and accommodation preferences.' },
]

function Home() {
  const carouselSettings = { dots: true, infinite: true, speed: 1000, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000, fade: true, pauseOnHover: true, arrows: false }
  const { data: homeData, isLoading: isHomeLoading } = useSanityQuery(['sanity', 'home'], HOME_QUERY)
  const { data: services, isLoading: isServicesLoading } = useSanityQuery(['sanity', 'home-services'], HOME_SERVICES_QUERY)
  const { data: aboutData } = useSanityQuery(['sanity', 'about-summary'], ABOUT_SUMMARY_QUERY)
  const { data: photos, isLoading: isGalleryLoading } = useSanityQuery(['sanity', 'home-gallery'], HOME_GALLERY_QUERY)

  const activeImages = homeData?.images?.length ? homeData.images.map((image: any) => ({ url: urlFor(image).width(1800).url(), alt: 'Scuba diving in Tobago with Wild Turtle Scuba Club' })) : []
  const displayedServices = services?.length ? services.slice(0, 4) : fallbackServices
  const displayedPhotos = photos?.slice(0, 4) ?? []
  const headline = homeData?.herotitle || 'Wild Turtle Scuba Club Ltd.'
  const subheadline = homeData?.herotitle2 || 'Based on Depot Road in Castara, Wild Turtle Scuba Club offers guided scuba diving, reef dives and PADI certification courses in Tobago.'
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative h-[620px] md:h-[680px] bg-accent-foreground/90 overflow-hidden">
        {isHomeLoading ? <Skeleton className="w-full h-full rounded-none opacity-50" /> : (
          <div className="hero-carousel absolute inset-0">
            {activeImages.length > 0 && <Slider {...carouselSettings}>{activeImages.map((image: any, index: number) => <div key={index} className="relative h-[620px] md:h-[680px]"><ImageWithFallback src={image.url} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'low'} className="w-full h-full object-cover" /></div>)}</Slider>}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-foreground/45 via-accent-foreground/55 to-accent-foreground/80 z-[5]" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4 text-white flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/15 px-4 py-2 text-sm font-medium tracking-wide backdrop-blur-sm mb-6"><MapPin className="size-4" /> Castara, Tobago</div>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.05] mb-6 whitespace-pre-wrap drop-shadow-lg">{headline}</h1>
            {isHomeLoading ? <Skeleton className="h-8 w-2/3 mb-9 bg-white/20 rounded-lg" /> : <p className="text-lg md:text-2xl max-w-3xl mb-9 text-white/90 leading-relaxed">{subheadline}</p>}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-full h-13 px-7 text-base bg-primary hover:bg-primary/90"><Link to="/pricing">View Dives &amp; Courses <ArrowRight className="ml-2 size-5" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-7 text-base border-white/60 bg-white/10 text-white hover:bg-white hover:text-accent-foreground backdrop-blur-sm"><a href="#contact">Contact Our Dive Team</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Why divers choose Wild Turtle" className="bg-accent-foreground text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[[Award, 'PADI-certified instruction'], [MapPin, 'Local Castara dive centre'], [Users, 'Beginner to advanced options'], [ShieldCheck, 'Maintained rental equipment']].map(([Icon, label]: any) => <div key={label} className="flex items-center justify-center lg:justify-start gap-3 text-sm md:text-base"><Icon className="size-5 text-primary-foreground shrink-0" /><span>{label}</span></div>)}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] font-semibold text-primary mb-3">Dive local</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Your Dive Holiday in Tobago Starts in Castara</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>Discover <strong className="text-foreground font-medium">scuba diving in Tobago</strong> with a local dive centre on Depot Road. We help new and experienced divers explore Tobago's reefs through guided dives, friendly instruction and maintained equipment.</p>
              <p>Planning a dedicated <strong className="text-foreground font-medium">Tobago dive holiday</strong> or adding a dive to a wider trip? We can shape the experience around your schedule, experience and interests.</p>
            </div>
            <Button asChild variant="outline" className="mt-7 rounded-full border-primary text-primary hover:bg-primary hover:text-white"><Link to="/about">Meet the local team <ArrowRight className="ml-2 size-4" /></Link></Button>
          </div>
          <div className="relative min-h-[360px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary to-accent-foreground">
            {displayedPhotos[0]?.image ? <ImageWithFallback src={urlFor(displayedPhotos[0].image).width(1000).url()} alt={displayedPhotos[0].altText || displayedPhotos[0].title || 'Diving in Tobago'} className="absolute inset-0 w-full h-full object-cover" /> : <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10 text-center"><Waves className="size-16 mb-5 text-white/80" /><p className="font-serif text-3xl">Explore Tobago beneath the surface</p></div>}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-accent-foreground/85 text-white p-5 backdrop-blur-md"><p className="text-sm uppercase tracking-wider text-white/70 mb-1">Based in</p><p className="font-serif text-2xl">Castara, Tobago</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12"><p className="text-sm uppercase tracking-[0.18em] font-semibold text-primary mb-3">Choose your experience</p><h2 className="text-4xl md:text-5xl font-serif mb-4">Tobago Scuba Diving, PADI Courses &amp; More</h2><p className="text-lg text-muted-foreground">From a first underwater experience to a tailored multi-day itinerary, start with the option that suits your trip.</p></div>
          {isServicesLoading ? <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{[1, 2, 3, 4].map((item) => <Skeleton key={item} className="h-[410px] rounded-2xl" />)}</div> : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedServices.map((service: any) => <Card key={service._id} className="group overflow-hidden rounded-2xl border-border/70 bg-background hover:-translate-y-1 hover:shadow-xl transition-all duration-300"><div className="h-52 relative overflow-hidden bg-gradient-to-br from-primary to-accent-foreground">{service.image ? <ImageWithFallback src={urlFor(service.image).width(800).url()} alt={`${service.name} in Tobago`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="w-full h-full flex items-center justify-center"><Waves className="size-14 text-white/70" /></div>}{service.price && <span className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-accent-foreground shadow">From ${service.price}</span>}</div><CardContent className="p-6 flex flex-col min-h-[210px]"><h3 className="font-serif text-2xl mb-3">{service.name}</h3><p className="text-muted-foreground leading-relaxed line-clamp-3 mb-5">{service.description}</p><Link to="/pricing" className="mt-auto inline-flex items-center font-semibold text-primary hover:text-accent-foreground">Explore this option <ArrowRight className="ml-2 size-4" /></Link></CardContent></Card>)}
            </div>
          )}
          <div className="mt-10"><Button asChild size="lg" className="rounded-full"><Link to="/pricing">See all dives, courses and prices <ArrowRight className="ml-2 size-5" /></Link></Button></div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-accent-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12"><p className="text-sm uppercase tracking-[0.18em] font-semibold text-primary-foreground/80 mb-3">Why Wild Turtle</p><h2 className="text-4xl md:text-5xl font-serif mb-4">Local Knowledge, Thoughtful Diving</h2><p className="text-white/75 text-lg">A welcoming, flexible approach to exploring Tobago's underwater world.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{[['Small-group guidance', 'More attention, clearer communication and a pace that suits the group.'], ['Local reef knowledge', 'Dive planning informed by local conditions and experience around Tobago.'], ['Training that fits', 'Supportive options for beginners, certified divers and developing skills.'], ['Flexible trip planning', 'Help coordinating dives, equipment and accommodation around your dates.']].map(([title, copy]) => <div key={title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6"><CheckCircle2 className="size-7 text-primary-foreground mb-5" /><h3 className="text-xl font-serif mb-3">{title}</h3><p className="text-white/70 leading-relaxed">{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden min-h-[480px] bg-muted shadow-lg order-2 lg:order-1">{aboutData?.profileImage ? <img loading="lazy" src={urlFor(aboutData.profileImage).width(800).url()} alt={aboutData.instructorName || 'Wild Turtle Scuba Club instructor'} className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 bg-gradient-to-br from-accent to-muted flex items-center justify-center"><Users className="size-20 text-primary/40" /></div>}</div>
          <div className="order-1 lg:order-2"><p className="text-sm uppercase tracking-[0.18em] font-semibold text-primary mb-3">Meet your dive team</p><h2 className="text-4xl md:text-5xl font-serif mb-3">{aboutData?.instructorName || 'Dive with a local Castara team'}</h2>{aboutData?.instructorRole && <p className="text-xl text-primary font-medium mb-5">{aboutData.instructorRole}</p>}<p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-[8]">{aboutData?.bio || 'Get to know the people who will help plan and guide your time underwater in Tobago.'}</p>{aboutData?.stats?.length > 0 && <div className="grid grid-cols-2 gap-4 mt-7">{aboutData.stats.slice(0, 4).map((stat: any, index: number) => <div key={index} className="rounded-xl bg-card border p-4"><div className="text-2xl font-serif text-primary">{stat.value}</div><div className="text-sm text-muted-foreground">{stat.label}</div></div>)}</div>}<Button asChild variant="outline" className="mt-7 rounded-full border-primary text-primary hover:bg-primary hover:text-white"><Link to="/about">Meet the instructor <ArrowRight className="ml-2 size-4" /></Link></Button></div>
        </div>
      </section>

      {(isGalleryLoading || displayedPhotos.length > 0) && <section className="py-20 md:py-24 bg-background"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"><div><p className="text-sm uppercase tracking-[0.18em] font-semibold text-primary mb-3">Below the surface</p><h2 className="text-4xl md:text-5xl font-serif">A Glimpse of Tobago</h2></div><Button asChild variant="outline" className="rounded-full self-start"><Link to="/gallery">View the gallery <Camera className="ml-2 size-4" /></Link></Button></div>{isGalleryLoading ? <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">{[1, 2, 3, 4].map((item) => <Skeleton key={item} className="aspect-square rounded-2xl" />)}</div> : <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">{displayedPhotos.map((photo: any, index: number) => <Link key={photo._id} to="/gallery" className={`relative overflow-hidden rounded-2xl group ${index === 0 ? 'col-span-2 row-span-2' : ''}`}><ImageWithFallback src={urlFor(photo.image).width(index === 0 ? 1200 : 700).url()} alt={photo.altText || photo.title} className="w-full h-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 right-4 text-white font-medium">{photo.title}</span></Link>)}</div>}</div></section>}

      <section className="py-20 md:py-24 bg-card border-y border-border/50"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-10"><p className="text-sm uppercase tracking-[0.18em] font-semibold text-primary mb-3">Plan with confidence</p><h2 className="text-4xl md:text-5xl font-serif mb-4">Tobago Diving Questions</h2><p className="text-lg text-muted-foreground">Quick answers before you get in touch.</p></div><Accordion type="single" collapsible className="rounded-2xl border bg-background px-6">{faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left text-lg font-serif py-6 hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="text-base text-muted-foreground leading-relaxed pr-8">{faq.answer}{index === 1 && <> Review our <Link to="/pricing" className="text-primary underline underline-offset-4">courses and pricing</Link>.</>}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="py-20 md:py-24 bg-background" aria-labelledby="find-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] font-semibold text-primary mb-3">Find us</p>
            <h2 id="find-us-heading" className="text-4xl md:text-5xl font-serif mb-5">Your Castara Dive Centre</h2>
            <address className="not-italic text-lg text-muted-foreground leading-relaxed mb-5">Wild Turtle Scuba Club Ltd.<br />Depot Road, Castara, Tobago<br />Trinidad and Tobago</address>
            <p className="text-muted-foreground leading-relaxed mb-6">Use the map to find Castara and plan your journey. Contact the team before your dive to confirm where and when to meet.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Wild+Turtle+Scuba+Club+Depot+Road+Castara+Tobago" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-primary hover:text-accent-foreground">Open in Google Maps <ArrowRight className="ml-2 size-4" /></a>
          </div>
          <iframe
            title="Map of Wild Turtle Scuba Club in Castara, Tobago"
            src="https://www.google.com/maps?q=Wild+Turtle+Scuba+Club+Depot+Road+Castara+Tobago&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[360px] md:h-[440px] rounded-3xl border-0 shadow-lg"
          />
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
