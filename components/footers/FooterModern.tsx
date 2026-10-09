import { siteConfig } from "@/lib/site.config";
import Link from "next/link";
export function FooterModern() {
  return (
    <footer className="bg-primary text-secondary py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">{siteConfig.business.name}</h3>
          <p className="text-secondary/70 text-sm max-w-xs">{siteConfig.business.industry} Excellence.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-accent">Contact</h4>
          <address className="not-italic text-sm text-secondary/70 space-y-2">
            <p>{siteConfig.business.address}</p>
            <p>{siteConfig.business.phone}</p>
            <p>{siteConfig.business.email}</p>
          </address>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-accent">Navigation</h4>
          <ul className="space-y-2 text-sm text-secondary/70">
            {siteConfig.nav.map(link => (
              <li key={link.label}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
