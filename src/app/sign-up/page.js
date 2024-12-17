'use client';

import Link from 'next/link';
import styles from './SignUpPage.module.css';
import { FaEnvelope, FaApple, FaGoogle, FaFacebookF } from 'react-icons/fa';

export default function SignUpPage() {
  const handleEmailClick = () => {
    console.log('Sign up with Email button clicked');
    // Integrate your email signup logic here, e.g., navigate to email signup flow
  };

  const handleAppleClick = () => {
    console.log('Sign up with Apple button clicked');
    // Integrate your Apple signup logic
  };

  const handleGoogleClick = () => {
    console.log('Sign up with Google button clicked');
    // Integrate your Google signup logic
  };

  const handleFacebookClick = () => {
    console.log('Sign up with Facebook button clicked');
    // Integrate your Facebook signup logic
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
            className={`${styles.oauthBtn} ${styles.emailBtn}`}
            onClick={handleEmailClick}
          >
            <FaEnvelope className={styles.oauthIcon} />
            Sign up with Email
          </button>

          <button className={styles.oauthBtn} onClick={handleAppleClick}>
            <FaApple className={styles.oauthIcon} />
            Sign up with Apple
          </button>

          <button className={styles.oauthBtn} onClick={handleGoogleClick}>
            <FaGoogle className={styles.oauthIcon} />
            Sign up with Google
          </button>

          <button className={styles.oauthBtn} onClick={handleFacebookClick}>
            <FaFacebookF className={styles.oauthIcon} />
            Sign up with Facebook
          </button>

          <p className={styles.legalTextBottom}></p>

          <p className={styles.legalTextBottom}>
            By proceeding, you agree to receive marketing emails from
            JadeJourney.
            <br></br> Try JadeJourney free for 3 days, no credit card required.
            By proceeding, you are agreeing to our{' '}
            <Link href="/terms">Terms of Service</Link> and{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
