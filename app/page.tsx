import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { HeroSplit } from "@/components/heroes/HeroSplit";
import { CTASection } from "@/components/sections/CTASection";
import { FooterModern } from "@/components/footers/FooterModern";

export default function Home() {
  return (
    <main className="pt-20">
      <NavbarClassic />
      <HeroSplit />
      <CTASection title="Ready to work together?" subtitle="Get in touch with our team today to discuss your requirements." buttonText="Contact Us" href="/contact" />
      <FooterModern />
    </main>
  );
}
