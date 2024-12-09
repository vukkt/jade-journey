// src/components/Header.js
'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaLeaf } from 'react-icons/fa';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <FaLeaf className={styles.logoIcon} />
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className={styles.navLink}>
              Shop
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
        </ul>
      </nav>
      <button
        className={styles.themeToggle}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle Dark Mode"
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;
