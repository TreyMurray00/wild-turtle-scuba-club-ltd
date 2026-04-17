import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useLocation,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Navigation } from '../components/Navigation'
import { ScrollToTop } from '../components/ScrollToTop'
import { Mail, Phone, MapPin } from "lucide-react"

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'
import appCss from '../styles.css?url'
import slickCss from "slick-carousel/slick/slick.css?url"
import slickThemeCss from "slick-carousel/slick/slick-theme.css?url"

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Wild Turtle Scuba Club Ltd.' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'stylesheet', href: slickCss },
      { rel: 'stylesheet', href: slickThemeCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isStudio = location.pathname.startsWith('/studio');

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere]">
        {isStudio ? (
           <main>{children}</main>
        ) : (
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-accent-foreground text-primary-foreground py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Contact Info */}
                  <div>
                    <h3 className="font-serif text-lg mb-4">Contact Us</h3>
                    <div className="space-y-3 text-primary-foreground/80">
                      <div className="flex items-center gap-2">
                        <Phone className="size-5" />
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="size-5" />
                        <span>info@wildturtlescuba.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="size-5" />
                        <span>123 Ocean Drive, Coastal City</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="font-serif text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-primary-foreground/80">
                      <li>
                        <a href="/" className="hover:text-primary transition-colors">Home</a>
                      </li>
                      <li>
                        <a href="/about" className="hover:text-primary transition-colors">About</a>
                      </li>
                      <li>
                        <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
                      </li>
                    </ul>
                  </div>

                  {/* More Links */}
                  <div>
                    <h3 className="font-serif text-lg mb-4">More Info</h3>
                    <ul className="space-y-2 text-primary-foreground/80">
                      <li>
                        <a href="/pricing" className="hover:text-primary transition-colors">Pricing</a>
                      </li>
                      <li>
                        <a href="/accommodation" className="hover:text-primary transition-colors">Accommodation</a>
                      </li>
                      <li>
                        <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</a>
                      </li>
                    </ul>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="font-serif text-lg mb-4">Hours</h3>
                    <div className="space-y-2 text-primary-foreground/80">
                      <p>Monday - Friday: 8am - 6pm</p>
                      <p>Saturday: 9am - 5pm</p>
                      <p>Sunday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-primary/20 mt-8 pt-8 text-center text-primary-foreground/60">
                  <p>&copy; 2026 Wild Turtle Scuba Club Ltd. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        )}
        <ScrollToTop />
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }, TanStackQueryDevtools]}
        />
        <Scripts />
      </body>
    </html>
  )
}
