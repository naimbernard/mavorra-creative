const ITEMS = [
  "Branding",
  "Web Design",
  "SEO",
  "Lead Generation",
  "Social Media",
  "United Kingdom",
  "Ghana",
  "United States",
  "Marketing Strategy",
];

export function Marquee() {
  const items = [...ITEMS, ...ITEMS];

  return (
    <section data-header-theme="light" className="bg-cream py-8 sm:py-10">
      <div className="group overflow-hidden border-y border-ink/10 py-5 mask-fade-x">
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] sm:gap-14">
          {items.map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-10 sm:gap-14">
              <span className="whitespace-nowrap font-serif text-xl text-ink/70 sm:text-2xl">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
