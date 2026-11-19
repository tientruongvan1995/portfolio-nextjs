import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

import { CodeLine } from '../components/CodeLine';

import s from './Work.module.css';

type Project = { name: string; line: string; result: string };
type Game = { name: string; line: string; cta: string };

const code = `import CoreBluetooth

/// One key per resident, expiring on the server clock.
final class DoorKey: ObservableObject {
  let service: CBUUID
  let expiresAt: TimeInterval
  let session: Session

  init(service: CBUUID, expiresAt: TimeInterval) {
    self.service = service
    self.expiresAt = expiresAt
    self.session = Session()
  }

  var isExpired: Bool { Date().timeIntervalSince1970 > expiresAt }

  func unlock() throws {
    guard !isExpired else {
      throw DoorError.keyExpired
    }

    try session.write(.unlock, to: service)
  }

  func lock() throws {
    try session.write(.lock, to: service)
  }
}`;

export async function Work() {
  const t = await getTranslations('landing.work');
  const items = t.raw('items') as Project[];
  const game = t.raw('game') as Game;

  return (
    <section className="section g2 g2m" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="group">
          <div className="section-head">
            <h2 id="work-h">{t('heading')}</h2>
            <p>{t('lead')}</p>
          </div>
          <ul className="rows">
            {items.map((project) => (
              <li key={project.name}>
                <span className="rows__name">
                  {project.name}
                  <small>{project.line}</small>
                </span>
                <span className="rows__value">{project.result}</span>
              </li>
            ))}
            <li>
              <span className="rows__name">
                {game.name}
                <small>{game.line}</small>
              </span>
              <Link className="rows__value link" href="/pokemon">
                {game.cta}
              </Link>
            </li>
          </ul>
        </div>
        <div className={`group ${s.codeGroup}`}>
          <div className={s.codeSlot}>
            <div className="ui ui-panel ui-code" data-ui="code" data-visual>
              <div className="ui-code__tabs">
                <span className="ui-code__tab is-on">
                  <i className="ui-code__lang">SW</i>
                  {t('filename')}
                </span>
                <span className="ui-spacer" />
                <span className="ui-chip ui-chip--plain ui-code__chip">
                  {t('chip')}
                </span>
              </div>
              <pre className="ui-code__pre">
                <code>
                  {code.split('\n').map((line, index) => (
                    <span
                      className={`ui-code__ln${index === 18 ? ' is-mark' : ''}`}
                      data-n={index + 1}
                      key={index}
                    >
                      {line ? <CodeLine text={line} /> : '\u00a0'}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
