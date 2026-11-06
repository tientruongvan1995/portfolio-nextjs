import { GamePage } from '@/features/game';
import Head from 'next/head';

export default function PokemonPage() {
  return (
    <>
      <Head>
        <title>Homepage - Pokémon TeamFight</title>
        <meta name="description" content="Create your team and join some fights!" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GamePage />
    </>
  );
}
