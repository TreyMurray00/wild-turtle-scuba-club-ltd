import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Contact Us</h3>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@wildturtlescuba.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4 text-primary" />
              <span>123 Ocean Drive, Seaside Coast</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Quick Links</h3>
            <div className="flex flex-col gap-2 scale-y-100 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Services</a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* More Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6 border-b border-primary/30 pb-2 inline-block">More Info</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Accommodation</a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Disclaimer</a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Operating Hours</h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between text-primary font-medium">
                <span>Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center text-sm text-primary-foreground/60 font-sans">
          <p>&copy; {new Date().getFullYear()} Wild Turtle Scuba Club Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
