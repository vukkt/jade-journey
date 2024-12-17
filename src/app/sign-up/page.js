'use client';

import Link from 'next/link';
import { FaEnvelope, FaApple, FaGoogle, FaFacebookF } from 'react-icons/fa';
import styles from './SignUpPage.module.css';

export default function SignUpPage() {
  const handleEmailClick = () => {
    // Remove console.log for production
    // Implement actual email signup logic
  };

  const handleAppleClick = () => {
    // Remove console.log for production
    // Implement actual Apple OAuth signup logic
  };

  const handleGoogleClick = () => {
    // Remove console.log for production
    // Implement actual Google OAuth signup logic
  };

  const handleFacebookClick = () => {
    // Remove console.log for production
    // Implement actual Facebook OAuth signup logic
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Start Your Journey</h1>
          <p className={styles.subheading}>
            Unlock a world of possibilities with JadeJourney!
          </p>

          {/* Email Button uses both oauthBtn and emailBtn classes */}
          <button
            type="button"
            className={`${styles.oauthBtn} ${styles.emailBtn}`}
            onClick={handleEmailClick}
          >
            <FaEnvelope className={styles.oauthIcon} />
            Sign up with Email
          </button>

          <button
            type="button"
            className={styles.oauthBtn}
            onClick={handleAppleClick}
          >
            <FaApple className={styles.oauthIcon} />
            Sign up with Apple
          </button>

          <button
            type="button"
            className={styles.oauthBtn}
            onClick={handleGoogleClick}
          >
            <FaGoogle className={styles.oauthIcon} />
            Sign up with Google
          </button>

          <button
            type="button"
            className={styles.oauthBtn}
            onClick={handleFacebookClick}
          >
            <FaFacebookF className={styles.oauthIcon} />
            Sign up with Facebook
          </button>

          <p className={styles.legalTextBottom}>
            By proceeding, you agree to receive marketing emails from
            JadeJourney.
            <br /> Try JadeJourney free for 3 days, no credit card required. By
            proceeding, you are agreeing to our{' '}
            <Link href="/terms">Terms of Service</Link> and{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
