export function ContactForm() {
  return (
    <div className="bg-surface border border-border rounded-[2rem] p-8 md:p-12 shadow-sm">
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted">First Name</label>
            <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted">Last Name</label>
            <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted">Email Address</label>
          <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted">Message</label>
          <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"></textarea>
        </div>
        <button type="button" className="w-full bg-primary text-secondary py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
}
