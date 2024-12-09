'use client';

import styles from './Button.module.css';

function Button({ children, onClick }) {
  // Changed to function declaration
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {' '}
      {/* Added type="button" */}
      {children}
    </button>
  );
}

export default Button;
