'use client';

import CopyrightFooter from '@/features/game/components/layout/CopyrightFooter';
import GameBar from '@/features/game/components/layout/GameBar/GameBar';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import styles from './GamePage.module.css';
import { usePlayerContext } from './context/player';

const TEAM_SIZE = 6;

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function GamePage() {
  const [playerInfo] = usePlayerContext();
  const { team, teamName, score } = playerInfo;

  const chosen = team.length;
  const ready = chosen === TEAM_SIZE;
  const battles = score.won + score.tied + score.loss;

  return (
    <>
      <GameBar />

      <main className="g-main">
        <div className="g-wrap">
          <div className={styles.hero}>
            <section className={styles.intro}>
              <p className="g-eyebrow">Pokémon TeamFight</p>
              <h1 className="g-title">Build the team. Take the fight.</h1>
              <p className="g-lead">
                Name a team, pick six Pokémon and put their EXP on the line. The side with the
                higher total wins the battle.
              </p>

              <nav className={styles.modes} aria-label="Play">
                <Link href="/pokemon/team/create" className={styles.mode}>
                  <span className={styles.index}>01</span>
                  <span>
                    <span className={styles.modeTitle}>Create a team</span>
                    <span className={styles.modeDesc}>
                      Search the Pokédex, add six, save the lineup.
                    </span>
                  </span>
                  <span className={styles.meta}>
                    <span className={styles.metaCount}>
                      {chosen ? `${chosen} / ${TEAM_SIZE}` : 'Six slots'}
                    </span>
                    <span className={styles.arrow}>
                      <Arrow />
                    </span>
                  </span>
                </Link>

                {ready ? (
                  <Link href="/pokemon/team/fight" className={styles.mode}>
                    <span className={styles.index}>02</span>
                    <span>
                      <span className={styles.modeTitle}>Team fight</span>
                      <span className={styles.modeDesc}>
                        Six against six. Higher total EXP takes it.
                      </span>
                    </span>
                    <span className={styles.meta}>
                      <span className={styles.metaCount}>Ready</span>
                      <span className={styles.arrow}>
                        <Arrow />
                      </span>
                    </span>
                  </Link>
                ) : (
                  <div
                    className={`${styles.mode} ${styles.modeOff}`}
                    aria-disabled="true"
                    title="Fill all six slots to unlock the fight"
                  >
                    <span className={styles.index}>02</span>
                    <span>
                      <span className={styles.modeTitle}>Team fight</span>
                      <span className={styles.modeDesc}>
                        Fill all six slots to unlock the battle.
                      </span>
                    </span>
                    <span className={styles.meta}>
                      <span className={styles.metaCount}>
                        {TEAM_SIZE - chosen} to go
                      </span>
                      <span className={styles.arrow}>
                        <Arrow />
                      </span>
                    </span>
                  </div>
                )}
              </nav>

              <p className={styles.note}>Teams and scores are stored in this browser.</p>
            </section>

            <aside className={`g-card ${styles.roster}`} aria-label="Your team">
              <div className={styles.rosterHead}>
                <div>
                  <p className="g-label">Your team</p>
                  <p className={styles.rosterName}>{teamName || 'Untitled'}</p>
                </div>
                <span className={`${styles.count} g-num`}>
                  {chosen} / {TEAM_SIZE}
                </span>
              </div>

              <ul className={styles.slots}>
                {Array.from({ length: TEAM_SIZE }, (_, index) => {
                  const pokemon = team[index];

                  return (
                    <li
                      key={pokemon?.uuid ?? `empty-${index}`}
                      className={`${styles.slot} ${pokemon ? styles.slotFilled : ''}`}
                    >
                      {pokemon ? (
                        <>
                          <Image
                            className={styles.slotSprite}
                            src={pokemon.spritePixelUrl}
                            alt=""
                            width={56}
                            height={56}
                          />
                          <span className={styles.slotName}>{pokemon.name}</span>
                        </>
                      ) : (
                        <>
                          <span className={`${styles.slotIndex} g-num`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className={styles.slotEmpty}>Empty</span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className={styles.rosterFoot}>
                <span>{battles ? 'Record' : 'No battles yet'}</span>
                {battles > 0 && (
                  <span className={`${styles.record} g-num`}>
                    {score.won}W · {score.tied}T · {score.loss}L
                  </span>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <CopyrightFooter />
    </>
  );
}
