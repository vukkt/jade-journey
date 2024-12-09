'use client';

import Link from 'next/link';
import { FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <Link href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.footerLink}>
            Terms of Service
          </Link>
          <Link href="/support" className={styles.footerLink}>
            Support
          </Link>
        </div>
        <div className={styles.social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialIcon}
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className={styles.socialIcon}
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialIcon}
          >
            <FaInstagram />
          </a>
        </div>
        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} Jade Journey. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
