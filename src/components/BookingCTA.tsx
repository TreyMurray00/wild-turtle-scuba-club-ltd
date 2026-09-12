import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { Button } from './ui/button'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { CONTACT_QUERY } from '../lib/sanity-queries'

export function BookingCTA({
  title = 'Ready to Dive Tobago?',
  description = 'Tell us your dates, certification level and what you would love to experience. We’ll help you choose the right option.',
}: {
  title?: string
  description?: string
}) {
  const { data: contact } = useSanityQuery(['sanity', 'contact'], CONTACT_QUERY)
  const whatsappNumber = contact?.whatsapp?.replace(/[^\d]/g, '')

  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-primary to-accent-foreground text-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.18em] font-semibold text-white/75 mb-3">Start planning</p>
        <h2 className="text-4xl md:text-6xl font-serif mb-5">{title}</h2>
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-9 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          {whatsappNumber && <Button asChild size="lg" className="rounded-full bg-white text-accent-foreground hover:bg-white/90"><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 size-5" />Ask on WhatsApp</a></Button>}
          {contact?.email && <Button asChild size="lg" variant="outline" className="rounded-full border-white/60 bg-transparent text-white hover:bg-white hover:text-accent-foreground"><a href={`mailto:${contact.email}?subject=Tobago dive enquiry`}><Mail className="mr-2 size-5" />Email the dive team</a></Button>}
          {contact?.phone && <Button asChild size="lg" variant="outline" className="rounded-full border-white/60 bg-transparent text-white hover:bg-white hover:text-accent-foreground"><a href={`tel:${contact.phone}`}><Phone className="mr-2 size-5" />Call us</a></Button>}
          {!whatsappNumber && !contact?.email && !contact?.phone && <Button asChild size="lg" className="rounded-full bg-white text-accent-foreground hover:bg-white/90"><a href="#footer">Contact our dive team <ArrowRight className="ml-2 size-5" /></a></Button>}
        </div>
      </div>
    </section>
  )
}
