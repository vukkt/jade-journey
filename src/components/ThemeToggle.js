'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className={styles.toggleWrapper}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleTheme();
        }
      }}
      aria-label="Toggle Dark Mode"
    >
      <div className={`${styles.toggle} ${isDark ? styles.toggleDark : ''}`}>
        {isDark ? (
          <HiOutlineSun size={14} color="#000" />
        ) : (
          <HiOutlineMoon size={14} color="#fff" />
        )}
      </div>
    </button>
  );
}
