import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";


export const Route = createFileRoute('/privacy')({
  component: Privacy,
})


function Privacy() {
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
                  Wild Turtle Scuba Club Ltd. ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-card-foreground">Personal Information</h3>
                    <p>
                      We collect personal information that you voluntarily provide to us when booking our services, 
                      including:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Emergency contact details</li>
                      <li>Certification information and diving experience level</li>
                      <li>Medical information relevant to diving safety</li>
                      <li>Payment information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-card-foreground">Automatically Collected Information</h3>
                    <p>
                      When you visit our website, we may automatically collect certain information about your device, 
                      including IP address, browser type, and usage data through cookies and similar technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-2">We use the information we collect to:</p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Process your bookings and provide our diving and fishing services</li>
                  <li>Ensure your safety during activities</li>
                  <li>Communicate with you about your reservations and our services</li>
                  <li>Send you promotional materials (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Service providers who assist in our operations</li>
                  <li>Emergency services if required for your safety</li>
                  <li>Legal authorities when required by law</li>
                  <li>Insurance providers for coverage purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information. 
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee 
                  absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-2">You have the right to:</p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies to enhance your experience on our website. You can control cookie settings 
                  through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not directed to children under 13. We do not knowingly collect information 
                  from children under 13 without parental consent.
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
                  <p>123 Ocean Drive, Coastal City, CA 90210</p>
                  <p>Email: privacy@wildturtlescuba.com</p>
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
