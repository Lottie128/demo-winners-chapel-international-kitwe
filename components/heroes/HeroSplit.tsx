import { siteConfig } from "@/lib/site.config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function HeroSplit() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface text-sm font-medium text-primary mb-6 border border-border">
            <span className="flex h-2 w-2 rounded-full bg-accent"></span> {siteConfig.business.industry}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-6 leading-[1.1]">
            Elevating standards for <span className="text-accent">{siteConfig.business.name}.</span>
          </h1>
          <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
            We provide unmatched quality and dedicated service. Experience the premium difference with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-secondary px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all gap-2">
              Explore Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" alt="Premium Business" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
