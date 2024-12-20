'use client';

import { FaLeaf } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import ThemeToggle from '../components/ThemeToggle'; // Adjust this path if needed

function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <FaLeaf className={styles.logoIcon} />
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>

          <li>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/faq" className={styles.navLink}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>

      {/* Use the ThemeToggle component here */}
      <ThemeToggle />
    </header>
  );
}

export default Header;
