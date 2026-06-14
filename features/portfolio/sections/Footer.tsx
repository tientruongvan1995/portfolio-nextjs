export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-12">
      <div className="mx-auto max-w-6xl text-center text-[var(--muted)]">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[var(--accent-warm)]">
          Get in Touch
        </p>
        <p className="mb-4 text-base leading-7">
          <a
            href="mailto:tientruongvan1995@gmail.com"
            className="font-semibold text-[var(--foreground)] transition hover:text-[var(--accent-warm)]"
          >
            tientruongvan1995@gmail.com
          </a>
          <span className="mx-2">•</span>
          <a
            href="tel:+84936952906"
            className="font-semibold text-[var(--foreground)] transition hover:text-[var(--accent-warm)]"
          >
            +84 936 952 906
          </a>
        </p>
        <p className="text-sm leading-7">
          Built with Next.js, deployed on Vercel. 243 Ba Trieu, Hue, Vietnam.
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">
          © 2026. Senior React Native Developer • Always learning, building at scale.
        </p>
      </div>
    </footer>
  );
}
