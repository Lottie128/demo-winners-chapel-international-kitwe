import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { FooterModern } from "@/components/footers/FooterModern";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site.config";

export default function About() {
  return (
    <main className="pt-20 bg-background">
      <NavbarClassic />
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-lg border border-border">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">About {siteConfig.business.name}</h1>
            <div className="prose prose-lg text-muted mb-8 leading-relaxed whitespace-pre-wrap">
              {siteConfig.business.description}
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Learn more about what we do" subtitle="Discover our full range of professional services." buttonText="View Services" href="/services" />
      <FooterModern />
    </main>
  );
}
