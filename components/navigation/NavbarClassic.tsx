import { siteConfig } from "@/lib/site.config";
import { Menu } from "lucide-react";
import Link from "next/link";
export function NavbarClassic() {
  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-primary tracking-tight hover:opacity-80 transition-opacity">
          {siteConfig.business.name}
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium text-muted">
          {siteConfig.nav.map(link => (
            <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
          ))}
        </div>
        <Link href="/contact" className="hidden md:flex bg-primary text-secondary px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all">
          Get in touch
        </Link>
        <button className="md:hidden text-primary p-2"><Menu /></button>
      </div>
    </nav>
  );
}
