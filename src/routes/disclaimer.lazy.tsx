import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";
import { useSanityQuery } from "../hooks/useSanityQuery";
import { CONTACT_QUERY } from "../lib/sanity-queries";
import { AlertCircle } from "lucide-react";
import { PageBreadcrumbs } from '../components/PageBreadcrumbs';

export const Route = createLazyFileRoute('/disclaimer')({
  component: Disclaimer,
})

function Disclaimer() {
  const { data: contact } = useSanityQuery(['sanity', 'contact'], CONTACT_QUERY);

  return (
    <div>
      {/* Header */}
      <section className="bg-accent-foreground text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumbs current="Disclaimer" light />
          <h1 className="text-4xl md:text-5xl font-serif mt-8 mb-3">Disclaimer</h1>
          <p className="text-lg max-w-2xl text-white/75">
            Important information about our services and liability
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[220px_1fr] gap-8 items-start">
          <aside className="md:sticky md:top-24 rounded-2xl border bg-card p-5"><p className="font-semibold mb-3">On this page</p><nav className="flex flex-col gap-2 text-sm text-muted-foreground"><a href="#general" className="hover:text-primary">General</a><a href="#risks" className="hover:text-primary">Risks and hazards</a><a href="#medical" className="hover:text-primary">Medical fitness</a><a href="#certification" className="hover:text-primary">Certification</a><a href="#weather" className="hover:text-primary">Weather</a><a href="#disclaimer-contact" className="hover:text-primary">Contact</a></nav></aside>
          <Card className="border-primary/20 rounded-2xl">
            <CardContent className="p-6 md:p-10 space-y-9 leading-relaxed">
              <div className="flex items-start gap-4 bg-primary/10 p-4 rounded-lg">
                <AlertCircle className="size-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>Last Updated:</strong> April 8, 2026
                </p>
              </div>

              <div>
                <h2 id="general" className="text-2xl font-serif mb-4 scroll-mt-24">General Disclaimer</h2>
                <p className="text-muted-foreground">
                  The information provided by Wild Turtle Scuba Club Ltd. on our website and through our 
                  services is for general informational purposes only. All information is provided in good 
                  faith, however we make no representation or warranty of any kind, express or implied, 
                  regarding the accuracy, adequacy, validity, reliability, availability, or completeness of 
                  any information.
                </p>
              </div>

              <div>
                <h2 id="risks" className="text-2xl font-serif mb-4 scroll-mt-24">Risks and Hazards</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-card-foreground">Scuba diving, snorkeling, and fishing activities 
                    involve inherent risks.</strong> These activities can be physically demanding and may result 
                    in serious injury or death. Risks include but are not limited to:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Decompression sickness</li>
                    <li>Drowning</li>
                    <li>Marine life encounters</li>
                    <li>Equipment malfunction</li>
                    <li>Weather-related hazards</li>
                    <li>Boat-related injuries</li>
                    <li>Slips, falls, and other physical injuries</li>
                  </ul>
                  <p className="mt-4">
                    By participating in our activities, you acknowledge these risks and accept full 
                    responsibility for your participation.
                  </p>
                </div>
              </div>

              <div>
                <h2 id="medical" className="text-2xl font-serif mb-4 scroll-mt-24">Medical Fitness</h2>
                <p className="text-muted-foreground">
                  Participants must be in good physical health and free from conditions that could be 
                  aggravated by diving or other water activities. You are required to complete a medical 
                  questionnaire and, if necessary, obtain medical clearance from a physician before 
                  participating. You must disclose any medical conditions, medications, or physical limitations 
                  that may affect your ability to safely participate.
                </p>
              </div>

              <div>
                <h2 id="certification" className="text-2xl font-serif mb-4 scroll-mt-24">Certification Requirements</h2>
                <p className="text-muted-foreground">
                  Certain activities require valid diving certifications. You are responsible for ensuring 
                  your certifications are current and appropriate for the planned activities. Misrepresentation 
                  of certification status may result in denial of service without refund.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, Wild Turtle Scuba Club Ltd., its officers, directors, 
                  employees, agents, and affiliates shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising out of or relating to your use of our services, 
                  including but not limited to personal injury, death, property damage, or loss of profits.
                </p>
              </div>

              <div>
                <h2 id="weather" className="text-2xl font-serif mb-4 scroll-mt-24">Weather and Cancellations</h2>
                <p className="text-muted-foreground">
                  We reserve the right to cancel or modify any scheduled activity due to weather conditions, 
                  sea conditions, equipment issues, or other circumstances that may compromise safety. While we 
                  strive to provide advance notice, conditions may change rapidly. Decisions regarding trip 
                  cancellations are at the sole discretion of our captain and dive masters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Equipment</h2>
                <p className="text-muted-foreground">
                  All rental equipment is maintained according to manufacturer specifications and industry 
                  standards. However, equipment malfunction can occur. You are responsible for inspecting 
                  equipment before use and reporting any concerns immediately. We are not liable for equipment 
                  malfunction or failure unless caused by gross negligence.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Photography and Media</h2>
                <p className="text-muted-foreground">
                  Photos and videos may be taken during activities for promotional purposes. By participating, 
                  you consent to the use of your image in our marketing materials unless you explicitly opt-out 
                  in writing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We have no control over and assume no 
                  responsibility for the content, privacy policies, or practices of any third-party sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Alcohol and Drugs</h2>
                <p className="text-muted-foreground">
                  Participants must not be under the influence of alcohol or drugs. Anyone appearing impaired 
                  will be denied participation without refund. Consumption of alcohol is prohibited within 
                  12 hours prior to any diving activity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Assumption of Risk</h2>
                <p className="text-muted-foreground">
                  By using our services, you voluntarily assume all risks associated with your participation 
                  in diving, snorkeling, fishing, and related activities, whether those risks are known or 
                  unknown. You agree to hold harmless and indemnify Wild Turtle Scuba Club Ltd. from any and 
                  all claims arising from your participation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  Participation in any Wild Turtle Scuba Club Ltd. activity requires signing a comprehensive 
                  liability release and waiver form. By booking our services, you acknowledge that you will 
                  review and sign all required documents before participating.
                </p>
              </div>

              <div id="disclaimer-contact" className="scroll-mt-24 rounded-xl bg-accent/60 p-5">
                <h2 className="text-2xl font-serif mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have questions about this disclaimer, please contact us at:
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
