import Image from 'next/image';
import { useTranslations } from 'next-intl';
import TypingTitle from '@/features/portfolio/components/TypingTitle';
import { siteConfig } from '@/config/siteConfig';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,165,116,0.14),_transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.5))]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)] backdrop-blur-xl lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-[var(--border)] bg-[rgba(212,165,116,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent-warm)]">
              Portfolio of a Senior Mobile Architect
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">
                {t('hero.title')}
              </h1>
              <TypingTitle />
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
              {t('hero.intro')}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent-warm)] px-8 py-4 text-sm font-semibold text-black shadow-[0_6px_16px_rgba(212,165,116,0.35)] transition hover:bg-[var(--accent-warm-strong)]">
                {t('hero.cta')}
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-transparent px-8 py-4 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[rgba(232,228,220,0.08)]">
                {t('hero.linkedin')}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
            <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-[var(--accent)] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="/avatar.jpg"
                alt={siteConfig.author.name}
                width={160}
                height={160}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent-warm)]">
              {t('hero.role')}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">
              {siteConfig.author.name}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              {t('hero.location')}
            </p>

            <div className="mt-8 space-y-3 text-left text-sm text-[var(--muted)]">
              <p>• {t('hero.stats.1')}</p>
              <p>• {t('hero.stats.2')}</p>
              <p>• {t('hero.stats.3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
