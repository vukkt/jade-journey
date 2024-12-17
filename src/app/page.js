'use client';

import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './page.module.css';

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
          <h1 className={styles.heading}>Welcome to My Home page</h1>
          <p className={styles.paragraph}>
            Your one-stop page for amazing services.
          </p>
          <Link href="/sign-up">
            <button type="button" className={styles.button}>
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3 className={styles.featureHeading}>Quality Products</h3>
          <p className={styles.featureParagraph}>
            We offer only the best products for our customers.
          </p>
        </div>
        <div className={styles.feature}>
          <h3 className={styles.featureHeading}>Fast Delivery</h3>
          <p className={styles.featureParagraph}>
            Get your orders delivered to your doorstep quickly.
          </p>
        </div>
        <div className={styles.feature}>
          <h3 className={styles.featureHeading}>24/7 Support</h3>
          <p className={styles.featureParagraph}>
            Our support team is here to help you anytime.
          </p>
        </div>
      </section>
    </>
  );
}
