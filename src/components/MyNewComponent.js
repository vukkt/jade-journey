import React, { useEffect, useState } from 'react';
import styles from '../components/MyNewComponent.module.css';

const MyNewComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  
  return (
    <div className={styles.section1}>
      {/* Replace with your content */}
      <h2>Welcome to My New Component!</h2>
      <p>This is additional content added as a component.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default MyNewComponent;
