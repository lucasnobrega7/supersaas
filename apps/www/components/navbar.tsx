import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@repo/ui";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-6xl mx-auto items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Acme</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/solutions"
            className="transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            className="transition-colors hover:text-primary"
          >
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/EmmettM/super-saas-template"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
          <Button size="sm" asChild>
            <a href="/dashboard">Go to dashboard</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
