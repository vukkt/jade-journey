// src/app/terms/page.js
import Head from 'next/head';
import styles from './Terms.module.css';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Jade Journey</title>
        <meta
          name="description"
          content="Read Jade Journey's Terms of Service."
        />
      </Head>
      <main className={styles.container}>
        <h1>Terms of Service</h1>
        <p>Last updated: April 27, 2024</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Jade Journey's website, you agree to be bound
            by these Terms of Service and our Privacy Policy.
          </p>
        </section>

        <section>
          <h2>2. Use of the Site</h2>
          <p>
            You agree to use the site only for lawful purposes and in a way that
            does not infringe the rights of, restrict, or inhibit anyone else's
            use and enjoyment of the site.
          </p>
        </section>

        <section>
          <h2>3. Intellectual Property</h2>
          <p>
            All content, trademarks, and logos on this site are the property of
            Jade Journey or their respective owners. You are not permitted to
            use, reproduce, or distribute any of our content without explicit
            permission.
          </p>
        </section>

        {/* Add more sections as needed */}

        <section>
          <h2>4. Limitation of Liability</h2>
          <p>
            Jade Journey shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of your use
            of or inability to use the site.
          </p>
        </section>

        <section>
          <h2>5. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of the State of [Your State], without regard to its
            conflict of law provisions.
          </p>
        </section>

        <section>
          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms of Service at
            any time. It is your responsibility to check these Terms
            periodically for changes.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:tos@jadejourney.com">tos@jadejourney.com</a>
            </li>
            <li>Address: 1234 Jade Street, Serenity City, SC 56789</li>
          </ul>
        </section>
      </main>
    </>
  );
}
