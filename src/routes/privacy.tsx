import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";
import { useSanityQuery } from "../hooks/useSanityQuery";
import { CONTACT_QUERY } from "../lib/sanity-queries";


export const Route = createFileRoute('/privacy')({
  component: Privacy,
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Learn how Wild Turtle Scuba Club Ltd. collects, uses, and safeguards your personal information.' },
      { property: 'og:title', content: 'Privacy Policy | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Learn how Wild Turtle Scuba Club Ltd. collects, uses, and safeguards your personal information.' }
    ]
  })
})


function Privacy() {
  const { data: contact } = useSanityQuery(['sanity', 'contact'], CONTACT_QUERY);

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 space-y-6">
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

              <div>
                <h2 className="text-2xl font-serif mb-4">No Data Collection</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our website functions strictly as a static, informational resource for your viewing pleasure. 
                    We have purposefully opted out of integrating cookies, hidden trackers, analytics telemetry, 
                    or submission forms to ensure your browsing session is completely private.
                  </p>
                  <p>
                    Since we do not offer on-board user accounts or web-based booking forms, there is never a 
                    scenario where you are asked to transmit sensitive information (such as your address, payment 
                    details, or ID variables) directly through this platform. All bookings and reservations are 
                    facilitated through direct external communication (e.g., via phone, email, or WhatsApp) handled 
                    off-server.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">External Links</h2>
                <p className="text-muted-foreground">
                  Our website may occasionally link out to independent third-party services or social media handlers. 
                  Be aware that clicking those destinations takes you beyond our jurisdiction, meaning you will 
                  subsequently fall under their respective user-tracking and privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Wild Turtle Scuba Club Ltd.</p>
                  {contact?.address?.map((line: string, i: number) => (
                    <p key={i}>{line}</p>
                  )) || <p>123 Ocean Drive, Coastal City, CA 90210</p>}
                  <p>Email: {contact?.email || "privacy@wildturtlescuba.com"}</p>
                  <p>Phone: {contact?.phone || "(555) 123-4567"}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
