'use client';
import { useRef, useEffect } from 'react';
import styles from './page.module.css';
import Head from 'next/head';

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.77;
    }
  }, []);

  return (
    <>
      <Head>
        <title>My Home Page - Home</title>
        <meta
          name="description"
          content="Welcome to My home page, your one-stop page for amazing services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add more meta tags as needed */}
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <video
          ref={videoRef}
          className={styles.heroVideo}
          src="/videos/hero-background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.heroContent}>
          <h1>Welcome to My Home page</h1>
          <p>Your one-stop page for amazing services.</p>
          <button className={styles.button}>Explore</button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Quality Products</h3>
          <p>We offer only the best products for our customers.</p>
        </div>
        <div className={styles.feature}>
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered to your doorstep quickly.</p>
        </div>
        <div className={styles.feature}>
          <h3>24/7 Support</h3>
          <p>Our support team is here to help you anytime.</p>
        </div>
      </section>

      {/* Add more sections as needed */}
    </>
  );
}
