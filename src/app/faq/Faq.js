import { useState } from 'react';
import styles from './Faq.module.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.faqItem}>
      <button className={styles.question} onClick={toggleOpen}>
        {question}
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

const Faq = ({ faqs }) => {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
