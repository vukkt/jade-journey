import Head from 'next/head';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Jade Journey</title>
        <meta name="description" content="Learn more about Jade Journey." />
      </Head>
      <main className={styles.container}>
        <h1 className={styles.heading}>About Us</h1> {/* Applied className */}
        <p className={styles.paragraph}>
          Welcome to Jade Journey! We are dedicated to providing the best
          services to our customers.
        </p>
        {/* Add more content as needed */}
      </main>
    </>
  );
}
