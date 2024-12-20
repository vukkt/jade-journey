'use client';
import Head from 'next/head';
import Faq from './Faq'; // Adjust the path if needed

export default function FaqPage() {
  const faqData = [
    {
      question: 'What is Jade-Journey?',
      answer:
        'Jade-Journey is our platform designed to help you discover and explore new sustainable travel experiences.',
    },
    {
      question: 'How do I sign up?',
      answer:
        'Simply click the "Get Started" button on our homepage and follow the instructions to create an account.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial with no credit card required. Upgrade anytime after the trial ends.',
    },
    {
      question: 'How can I contact support?',
      answer:
        'Visit our Contact page or use the live chat feature in the bottom-right corner for immediate assistance.',
    },
  ];

  return (
    <>
      <Head>
        <title>FAQ - Jade Journey</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Jade-Journey, your platform for sustainable travel experiences."
        />
      </Head>
      <main>
        <Faq faqs={faqData} />
      </main>
    </>
  );
}
