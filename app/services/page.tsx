import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { FooterModern } from "@/components/footers/FooterModern";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site.config";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <main className="pt-20 bg-background">
      <NavbarClassic />
      <section className="bg-surface py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">Industry leading solutions tailored to your specific requirements.</p>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.map((svc) => {
            const Icon = (Icons as any)[svc.icon] || Icons.CheckCircle;
            return (
              <div key={svc.id} className="bg-surface p-8 rounded-3xl border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6"><Icon className="text-accent" size={24}/></div>
                <h3 className="font-bold text-lg mb-3">{svc.title}</h3>
                <p className="text-muted leading-relaxed">{svc.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection title="Need a custom solution?" subtitle="Reach out to our experts to discuss how we can assist you." buttonText="Contact Us" href="/contact" />
      <FooterModern />
    </main>
  );
}
