import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { CONTACT_QUERY } from '../lib/sanity-queries'

export function Footer() {
  const { data: contact } = useSanityQuery(['sanity', 'contact'], CONTACT_QUERY)

  return (
    <footer className="bg-accent-foreground text-primary-foreground py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Contact Us</h3>
            {contact?.phone && <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-white"><Phone className="h-4 w-4 text-primary" />{contact.phone}</a>}
            {contact?.email && <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-white"><Mail className="h-4 w-4 text-primary" />{contact.email}</a>}
            {contact?.address?.length > 0 && <div className="flex items-start gap-3 text-sm text-primary-foreground/80"><MapPin className="h-4 w-4 text-primary mt-0.5" /><span>{contact.address.map((line: string, index: number) => <span key={index} className="block">{line}</span>)}</span></div>}
            {!contact?.phone && !contact?.email && !contact?.address?.length && <p className="text-sm text-primary-foreground/60">Contact details will be added soon.</p>}
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-primary-foreground/80 hover:text-white">Home</Link>
              <Link to="/pricing" className="text-primary-foreground/80 hover:text-white">Dives &amp; Courses</Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-white">About</Link>
              <a href="#footer" className="text-primary-foreground/80 hover:text-white">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6 border-b border-primary/30 pb-2 inline-block">More Info</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/accommodation" className="text-primary-foreground/80 hover:text-white">Accommodation</Link>
              <Link to="/gallery" className="text-primary-foreground/80 hover:text-white">Gallery</Link>
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-white">Privacy Policy</Link>
              <Link to="/disclaimer" className="text-primary-foreground/80 hover:text-white">Disclaimer</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Plan Your Dive</h3>
            <p className="text-sm text-primary-foreground/75 leading-relaxed">Share your dates and experience level with our Castara dive team.</p>
            <Link to="/pricing" className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">View dives &amp; courses</Link>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center text-sm text-primary-foreground/60"><p>&copy; {new Date().getFullYear()} Wild Turtle Scuba Club Ltd. All rights reserved.</p></div>
      </div>
    </footer>
  )
}
