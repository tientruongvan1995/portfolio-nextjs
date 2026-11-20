import s from './loading.module.css';

/**
 * The landing's first paint. It follows the hero's geometry — nav, five-column words,
 * six-column media — so the real page settles into place instead of jumping from a spinner.
 * The skeleton is decoration; the only thing announced is the status text.
 */
export default function Loading() {
  return (
    <div className={s.page} role="status" aria-live="polite">
      <span className={s.sr}>Loading</span>

      <div className={s.bar} aria-hidden="true">
        <div className={`${s.wrap} ${s.bar__in}`}>
          <span className={s.brand}>
            <svg className={s.mark} viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M2.5 21.5V12a9.5 9.5 0 0 1 19 0v9.5h-6V12a3.5 3.5 0 0 0-7 0v9.5z"
                fill="currentColor"
              />
            </svg>
            <span className={s.sk} style={{ width: 96, height: 11 }} />
          </span>

          <span className={s.links}>
            <span className={s.sk} style={{ width: 46, height: 10 }} />
            <span className={s.sk} style={{ width: 58, height: 10 }} />
            <span className={s.sk} style={{ width: 36, height: 10 }} />
            <span className={s.sk} style={{ width: 52, height: 10 }} />
          </span>

          <span className={s.actions}>
            <span className={`${s.sk} ${s.pill}`} />
            <span className={`${s.sk} ${s.pill}`} />
            <span className={`${s.sk} ${s.email}`} />
            <span className={`${s.sk} ${s.menu}`} />
          </span>
        </div>
      </div>

      <main className={s.main} aria-hidden="true">
        <div className={`${s.wrap} ${s.grid}`}>
          <div className={s.text}>
            <span className={`${s.sk} ${s.kicker}`} />

            <div className={s.headline}>
              <span className={`${s.sk} ${s.h1a}`} />
              <span className={`${s.sk} ${s.h1b}`} />
              <span className={`${s.sk} ${s.h1c}`} />
            </div>

            <div className={s.lead}>
              <span className={s.sk} />
              <span className={s.sk} />
              <span className={s.sk} />
            </div>

            <div className={s.buttons}>
              <span className={s.solid} />
              <span className={s.ghost} />
            </div>

            <div className={s.facts}>
              <span className={s.fact}>
                <span className={s.sk} />
                <span className={s.sk} />
              </span>
              <span className={s.fact}>
                <span className={s.sk} />
                <span className={s.sk} />
              </span>
              <span className={s.fact}>
                <span className={s.sk} />
                <span className={s.sk} />
              </span>
            </div>
          </div>

          <div className={s.media}>
            <span className={s.sk} />
            <span className={s.float} />
          </div>
        </div>
      </main>
    </div>
  );
}
