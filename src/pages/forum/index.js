import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Forum() {
  return (
    <Layout title="Forum">
      <div className={styles.forumContainer}>
        <h1>Welcome to the Forum</h1>
        <p>Discuss topics, share ideas, and engage with the community.</p>

        <div className={styles.forumSections}>
          <div className={styles.section}>
            <h2>General Discussion</h2>
            <p>Talk about any topic related to our project.</p>
          </div>
          <div className={styles.section}>
            <h2>Feedback</h2>
            <p>Share your thoughts and suggestions for improvement.</p>
          </div>
          <div className={styles.section}>
            <h2>Support</h2>
            <p>Get help with any issues or questions you may have.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
