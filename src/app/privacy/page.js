// src/app/privacy/page.js
import Head from 'next/head';
import styles from './Privacy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Jade Journey</title>
        <meta
          name="description"
          content="Learn about Jade Journey's privacy practices."
        />
      </Head>
      <main className={styles.container}>
        <h1>Privacy Policy</h1>
        <p>Last updated: April 27, 2024</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Jade Journey. We value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website [and use our services].
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, shipping address, email address,
              and telephone number.
            </li>
            <li>
              <strong>Payment Data:</strong> Data necessary to process your
              payment, such as your payment instrument number and the security
              code associated with your payment instrument.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website, products, and services.
            </li>
            {/* Add more data types as necessary */}
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience.
          </p>
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To process your transactions.</li>
            <li>To respond to customer service requests.</li>
            {/* Add more use cases as necessary */}
          </ul>
        </section>

        {/* Add more sections as needed */}

        <section>
          <h2>4. Sharing Your Information</h2>
          <p>
            We may share your information with third parties that perform
            services for us or on our behalf, including payment processing, data
            analysis, email delivery, hosting services, and customer service.
          </p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access,
            correct, or delete the personal information we collect about you.
          </p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:privacy@jadejourney.com">
                privacy@jadejourney.com
              </a>
            </li>
            <li>Address: 1234 Jade Street, Serenity City, SC 56789</li>
          </ul>
        </section>
      </main>
    </>
  );
}
