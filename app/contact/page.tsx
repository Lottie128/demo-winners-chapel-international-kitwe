import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { FooterModern } from "@/components/footers/FooterModern";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site.config";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-20 bg-background">
      <NavbarClassic />
      <section className="py-24 px-6 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight mb-8">Get in touch</h1>
            <p className="text-xl text-secondary/80 mb-12 max-w-lg">We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.</p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0"><MapPin size={20} /></div>
                <div><h3 className="font-semibold text-lg">Visit Us</h3><p className="text-secondary/70 mt-1">{siteConfig.business.address}</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0"><Phone size={20} /></div>
                <div><h3 className="font-semibold text-lg">Call Us</h3><p className="text-secondary/70 mt-1">{siteConfig.business.phone}</p></div>
              </div>
            </div>
          </div>
          <div className="relative z-10"><ContactForm /></div>
        </div>
      </section>
      <FooterModern />
    </main>
  );
}
