import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import SignIn from './sign_in/signin';

import React from 'react';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Schedule Generator</title>
      </Head>
      <main>
        <SignIn />
      </main>
    </div>
  );
}
