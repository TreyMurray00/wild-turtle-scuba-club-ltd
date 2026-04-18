import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";
import { AlertCircle } from "lucide-react";


export const Route = createFileRoute('/disclaimer')({
  component: Disclaimer,
  head: () => ({
    meta: [
      { title: 'Disclaimer | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Important information about our services and liability at Wild Turtle Scuba Club Ltd.' },
      { property: 'og:title', content: 'Disclaimer | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Important information about our services and liability at Wild Turtle Scuba Club Ltd.' }
    ]
  })
})


function Disclaimer() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Disclaimer</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Important information about our services and liability
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4 bg-primary/10 p-4 rounded-lg">
                <AlertCircle className="size-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>Last Updated:</strong> April 8, 2026
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">General Disclaimer</h2>
                <p className="text-muted-foreground">
                  The information provided by Wild Turtle Scuba Club Ltd. on our website and through our 
                  services is for general informational purposes only. All information is provided in good 
                  faith, however we make no representation or warranty of any kind, express or implied, 
                  regarding the accuracy, adequacy, validity, reliability, availability, or completeness of 
                  any information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Risks and Hazards</h2>
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
                <h2 className="text-2xl font-serif mb-4">Medical Fitness</h2>
                <p className="text-muted-foreground">
                  Participants must be in good physical health and free from conditions that could be 
                  aggravated by diving or other water activities. You are required to complete a medical 
                  questionnaire and, if necessary, obtain medical clearance from a physician before 
                  participating. You must disclose any medical conditions, medications, or physical limitations 
                  that may affect your ability to safely participate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Certification Requirements</h2>
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
                <h2 className="text-2xl font-serif mb-4">Weather and Cancellations</h2>
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

              <div>
                <h2 className="text-2xl font-serif mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have questions about this disclaimer, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Wild Turtle Scuba Club Ltd.</p>
                  <p>123 Ocean Drive, Coastal City, CA 90210</p>
                  <p>Email: info@wildturtlescuba.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
