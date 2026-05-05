export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-12">
      <div className="mx-auto max-w-3xl text-center text-[var(--muted)]">
        <p className="mb-4">
          <strong>Get in Touch</strong>
          <br />
          <a 
            href="mailto:tientruongvan1995@gmail.com" 
            className="transition hover:text-[var(--foreground)]"
          >
            tientruongvan1995@gmail.com
          </a>
          <span className="mx-2">•</span>
          <a 
            href="tel:+84936952906" 
            className="transition hover:text-[var(--foreground)]"
          >
            +84 936 952 906
          </a>
          <span className="mx-2">•</span>
          <a 
            href="https://www.linkedin.com/in/tientruongvan1995/" 
            className="transition hover:text-[var(--foreground)]"
          >
            LinkedIn
          </a>
          <span className="mx-2">•</span>
          <a 
            href="https://www.facebook.com/tientruongvan1995" 
            className="transition hover:text-[var(--foreground)]"
          >
            Facebook
          </a>
        </p>
        <p>
          Built with Next.js, deployed on Vercel. 243 Ba Trieu, Hue, Vietnam.
        </p>
        <p className="mt-2 text-sm">
          © 2026. Senior React Native Developer • Always learning, building at scale.
        </p>
      </div>
    </footer>
  );
}
