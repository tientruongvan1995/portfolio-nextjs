'use client';

import CopyrightFooter from '@/features/game/components/layout/CopyrightFooter';
import NoDesktopLayout from '@/features/game/components/layout/NoDesktopLayout';
import BaseButton from '@/features/game/components/primitive/BaseButton';
import { useMediaQuery } from '@/utils/use-hooks';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GamePage.module.css';
import { usePlayerContext } from './context/player';

export default function GamePage() {
  const [playerInfo] = usePlayerContext();
  const [isDesktop] = useMediaQuery();

  return (
    <>
      {isDesktop ? (
        <div className={styles.background}>
          <div className={styles.container}>
            <main className={styles.main}>
              <Link href="/pokemon" className={styles.logo}>
                <Image
                  src="/pokemon/homepage/logo.png"
                  alt="Homepage Logo"
                  width="450"
                  height="203"
                  quality={100}
                  priority={true}
                />
              </Link>
              <div className={styles.menu}>
                <div className={styles.buttonWrapper}>
                  <BaseButton buttonType="primary" role="link" href="pokemon/team/create">
                    <h2>
                      CREATE
                      <br />
                      TEAM
                    </h2>
                  </BaseButton>
                  <div className="verticalBar lightGreen"></div>
                  <Image
                    src="/pokemon/icons/create-team-icon.svg"
                    alt="Create Team Icon"
                    width="75"
                    height="75"
                  />
                </div>
                <Image
                  className={styles.pokeballIcon}
                  src="/pokemon/icons/pokeball-icon.svg"
                  alt="Pokeball Logo"
                  width="300"
                  height="300"
                />
                <div className={styles.buttonWrapper}>
                  <BaseButton
                    buttonType="secondary"
                    role="link"
                    href="/pokemon/team/fight"
                    disabled={playerInfo.team.length < 6}
                  >
                    <h2>
                      TEAM
                      <br />
                      FIGHTING
                    </h2>
                  </BaseButton>
                  <div className="verticalBar orange"></div>
                  <Image
                    src="/pokemon/icons/team-fight-icon.svg"
                    alt="Teamfight Icon"
                    width="75"
                    height="75"
                  />
                </div>
              </div>
            </main>
            <CopyrightFooter />
          </div>
        </div>
      ) : (
        <NoDesktopLayout />
      )}
    </>
  );
}
