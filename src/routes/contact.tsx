import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";


export const Route = createFileRoute('/contact')({
  component: Contact,
})


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    guests: "1",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        guests: "1",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to book your adventure? Get in touch with us today
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-accent size-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Ocean Drive<br />
                        Coastal City, CA 90210
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-accent size-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="size-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif mb-1">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-accent size-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="size-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif mb-1">Email</h3>
                      <p className="text-muted-foreground">info@wildturtlescuba.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-accent size-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="size-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif mb-1">Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 8am - 6pm</p>
                        <p>Saturday: 9am - 5pm</p>
                        <p>Sunday: 10am - 4pm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map placeholder */}
              <Card className="mt-8">
                <CardContent className="p-0">
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <MapPin className="size-12 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif mb-6">
                    Book Your Adventure
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="size-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        We've received your booking request and will contact you shortly to
                        confirm the details.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service">Service Type *</Label>
                          <Select value={formData.service} onValueChange={handleServiceChange} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="diving-session">Diving Session</SelectItem>
                              <SelectItem value="certification">Scuba Certification Course</SelectItem>
                              <SelectItem value="fishing-trip">Fishing Trip</SelectItem>
                              <SelectItem value="gear-rental">Gear Rental</SelectItem>
                              <SelectItem value="snorkeling">Snorkeling Tour</SelectItem>
                              <SelectItem value="advanced">Advanced Diving Course</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date *</Label>
                          <Input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="guests">Number of Guests *</Label>
                          <Input
                            type="number"
                            id="guests"
                            name="guests"
                            min="1"
                            max="20"
                            required
                            value={formData.guests}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any special requests or questions?"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 size-5" />
                        Submit Booking Request
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * We'll contact you within 24 hours to confirm your booking
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
