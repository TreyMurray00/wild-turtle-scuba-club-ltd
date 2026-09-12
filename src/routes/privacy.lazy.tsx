import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";
import { useSanityQuery } from "../hooks/useSanityQuery";
import { CONTACT_QUERY } from "../lib/sanity-queries";
import { PageBreadcrumbs } from '../components/PageBreadcrumbs';

export const Route = createLazyFileRoute('/privacy')({
  component: Privacy,
})

function Privacy() {
  const { data: contact } = useSanityQuery(['sanity', 'contact'], CONTACT_QUERY);

  return (
    <div>
      {/* Header */}
      <section className="bg-accent-foreground text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumbs current="Privacy Policy" light />
          <h1 className="text-4xl md:text-5xl font-serif mt-8 mb-3">Privacy Policy</h1>
          <p className="text-lg max-w-2xl text-white/75">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[220px_1fr] gap-8 items-start">
          <aside className="md:sticky md:top-24 rounded-2xl border bg-card p-5"><p className="font-semibold mb-3">On this page</p><nav className="flex flex-col gap-2 text-sm text-muted-foreground"><a href="#data-collection" className="hover:text-primary">Data collection</a><a href="#external-links" className="hover:text-primary">External links</a><a href="#policy-changes" className="hover:text-primary">Policy changes</a><a href="#privacy-contact" className="hover:text-primary">Contact</a></nav></aside>
          <Card className="rounded-2xl">
            <CardContent className="p-6 md:p-10 space-y-9 leading-relaxed">
              <div>
                <p className="text-muted-foreground mb-4">
                  <strong>Last Updated:</strong> April 8, 2026
                </p>
                <p className="text-muted-foreground">
                  Wild Turtle Scuba Club Ltd. ("we," "our," or "us") respects your privacy implicitly. 
                  This Privacy Policy serves as a formal declaration that we do not collect, capture, or harbor 
                  any personal information via this website.
                </p>
              </div>

              <div id="data-collection" className="scroll-mt-24">
                <h2 className="text-2xl font-serif mb-4">No Data Collection</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                  Our website does not use advertising cookies, hidden trackers or analytics telemetry. The enquiry form opens your own email application using a mailto link; the website does not transmit or store the form contents.
                  </p>
                  <p>
                    Since we do not offer user accounts or online payment processing, you are not asked to transmit payment details or identity documents through this platform. Bookings and reservations are facilitated through direct external communication by phone, email or WhatsApp.
                  </p>
                </div>
              </div>

              <div id="external-links" className="scroll-mt-24">
                <h2 className="text-2xl font-serif mb-4">External Links</h2>
                <p className="text-muted-foreground">
                  Our website may occasionally link out to independent third-party services or social media handlers. 
                  Be aware that clicking those destinations takes you beyond our jurisdiction, meaning you will 
                  subsequently fall under their respective user-tracking and privacy policies.
                </p>
              </div>

              <div id="policy-changes" className="scroll-mt-24">
                <h2 className="text-2xl font-serif mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div id="privacy-contact" className="scroll-mt-24 rounded-xl bg-accent/60 p-5">
                <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Wild Turtle Scuba Club Ltd.</p>
                  {contact?.address?.map((line: string, i: number) => (
                    <p key={i}>{line}</p>
                  ))}
                  {contact?.email && <p>Email: <a className="text-primary hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a></p>}
                  {contact?.phone && <p>Phone: <a className="text-primary hover:underline" href={`tel:${contact.phone}`}>{contact.phone}</a></p>}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
