// src/app/support/page.js
import Head from 'next/head';
import Link from 'next/link'; // Imported before CSS
import styles from './Support.module.css';

export default function Support() {
  return (
    <>
      <Head>
        <title>Support - Jade Journey</title>
        <meta name="description" content="Get support for Jade Journey." />
      </Head>
      <main className={styles.container}>
        <h1 className={styles.heading}>Support</h1>

        <section className={styles.section}>
          <h2 className={styles.subheading}>
            Frequently Asked Questions (FAQs)
          </h2>
          <ul>
            <li>
              <strong>Q1: How do I place an order?</strong>
              <p className={styles.paragraph}>
                A1: To place an order, navigate to the Shop page, select your
                desired products, and proceed to checkout.
              </p>
            </li>
            <li>
              <strong>Q2: What is your return policy?</strong>
              <p className={styles.paragraph}>
                A2: We accept returns within 30 days of purchase. Please refer
                to our{' '}
                <Link href="/terms" className={styles.footerLink}>
                  Terms of Service
                </Link>{' '}
                for more details.
              </p>
            </li>
            {/* Add more FAQs as needed */}
          </ul>
        </section>

        {/* Additional sections... */}
      </main>
    </>
  );
}
