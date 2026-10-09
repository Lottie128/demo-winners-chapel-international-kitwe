import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function CTASection({ title, subtitle, buttonText, href }: { title: string, subtitle: string, buttonText: string, href: string }) {
  return (
    <section className="bg-primary text-secondary py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{title}</h2>
        <p className="text-lg text-secondary/70 mb-10">{subtitle}</p>
        <Link href={href} className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all gap-2">
          {buttonText} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
