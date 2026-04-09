import { createFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";


export const Route = createFileRoute('/about')({
  component: About,
})


function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner for unforgettable ocean adventures since 2005
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Wild Turtle Scuba Club Ltd. was founded over 20 years ago by a group of passionate
                  divers and marine conservationists who wanted to share their love of the ocean with others.
                  What started as a small diving club has grown into a premier scuba and fishing service.
                </p>
                <p>
                  Our name reflects our commitment to marine conservation, particularly the protection
                  of sea turtles in our local waters. Today, we pride ourselves on offering safe, exciting,
                  and environmentally responsible experiences for adventurers of all skill levels.
                </p>
                <p>
                  Whether you're taking your first breath underwater or you're an experienced
                  diver seeking new challenges, we're here to make your ocean dreams a reality while
                  protecting the marine ecosystems we love.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628371190872-df8c9dee1093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmVyJTIwdW5kZXJ3YXRlciUyMG9jZWFufGVufDF8fHx8MTc3NTQ4Nzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Scuba diver"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="size-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  Your safety is our top priority. We maintain the highest safety standards and
                  use only certified equipment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="size-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Ocean Conservation</h3>
                <p className="text-muted-foreground">
                  We're committed to protecting marine ecosystems and educating others about
                  ocean conservation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="size-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, from instruction to
                  equipment quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="size-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster a welcoming community where ocean lovers can connect and share their
                  passion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-4">
            Our Team
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Meet our experienced instructors and guides who are passionate about sharing the
            wonders of the ocean with you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-muted size-32 rounded-full mx-auto mb-4"></div>
                <h3 className="font-serif text-xl mb-1">Captain Mike Torres</h3>
                <Badge variant="secondary" className="mb-2">Lead Instructor</Badge>
                <p className="text-muted-foreground">
                  PADI Master Instructor with 25+ years of diving experience
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-muted size-32 rounded-full mx-auto mb-4"></div>
                <h3 className="font-serif text-xl mb-1">Sarah Chen</h3>
                <Badge variant="secondary" className="mb-2">Diving Instructor</Badge>
                <p className="text-muted-foreground">
                  Specializes in beginner training and marine biology education
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-muted size-32 rounded-full mx-auto mb-4"></div>
                <h3 className="font-serif text-xl mb-1">Captain James Rodriguez</h3>
                <Badge variant="secondary" className="mb-2">Fishing Guide</Badge>
                <p className="text-muted-foreground">
                  Expert angler with deep knowledge of local fishing spots
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">20+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">5000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">50+</div>
              <div className="text-muted-foreground">Dive Sites</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">100%</div>
              <div className="text-muted-foreground">Safety Record</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
