// src/app/contact/page.js
import Head from 'next/head';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Jade Journey</title>
        <meta name="description" content="Get in touch with Jade Journey." />
      </Head>
      <main className={styles.container}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.paragraph}>
          We&apos;d love to hear from you! Whether you have a question about
          features, trials, pricing, need a demo, or anything else, our team is
          ready to answer all your questions.
        </p>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.contactFormLabel}>
              Name:
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.contactFormInput}
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.contactFormLabel}>
              Email:
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.contactFormInput}
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.contactFormLabel}>
              Message:
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className={styles.contactFormTextarea}
              />
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
