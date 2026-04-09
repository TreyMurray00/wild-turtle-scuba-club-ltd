import { Turtle } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-foreground text-primary-foreground shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-primary-foreground">
          <Turtle className="h-6 w-6 text-primary" />
          <span className="font-serif text-lg font-semibold tracking-tight">Wild Turtle Scuba Club Ltd.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">Services</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
