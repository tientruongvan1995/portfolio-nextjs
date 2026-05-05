import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
        <div className="space-y-6">
        <div className="flex justify-center mb-8">
          <Image
            src="/avatar.jpg"
            alt="Truong Van Tien"
            width={128}
            height={128}
            priority
            className="rounded-full object-cover border-4 border-[var(--accent)] shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Truong Van Tien
          </h1>
          <p className="mt-2 text-xl text-[var(--muted-strong)]">
            Senior React Native Developer • Cross-platform Architecture • Building at Scale
          </p>
        </div>

        <p className="text-lg leading-relaxed text-[var(--muted)]">
          I architect and build high-performance mobile applications handling millions of transactions. Specialized in cross-platform React Native solutions, native module integration (Swift/Kotlin), and scaling systems for multi-team environments. 8+ years of experience shipping production apps across iOS, Android, and web.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="mailto:tientruongvan1995@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-white transition hover:bg-[var(--accent-strong)]"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/tientruongvan1995/"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-6 py-3 font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-muted)]"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/tientruongvan1995"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-6 py-3 font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-muted)]"
          >
            Connect on Facebook
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
