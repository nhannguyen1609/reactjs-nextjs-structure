import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import commonAtions from 'src/redux/common/actions';
import { wrapper } from 'src/redux/store';
import { END } from 'redux-saga'

const domain = process.env.NEXT_PUBLIC_DOMAIN_API;
const { getProvinces } = commonAtions;

function Home(props) {

  const [detail, setDetail] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProvinces());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>4VUniverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
export default Home;