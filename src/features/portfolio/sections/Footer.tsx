import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-12">
      <div className="mx-auto max-w-6xl text-center text-[var(--muted)]">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[var(--accent-warm)]">
          {t('footer.getInTouch')}
        </p>
        <p className="mb-4 text-base leading-7">
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="font-semibold text-[var(--foreground)] transition hover:text-[var(--accent-warm)]"
          >
            {t('footer.email')}
          </a>
          <span className="mx-2">•</span>
          <a
            href={`tel:${siteConfig.author.phone}`}
            className="font-semibold text-[var(--foreground)] transition hover:text-[var(--accent-warm)]"
          >
            {t('footer.phone')}
          </a>
        </p>
        <p className="text-sm leading-7">
          {t('footer.builtWith')} {siteConfig.author.location}.
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">
          {t('footer.copy')}
        </p>
      </div>
    </footer>
  );
}
